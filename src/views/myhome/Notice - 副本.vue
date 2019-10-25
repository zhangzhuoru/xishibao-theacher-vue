<template>
    <div class="duidance">
        <div class="fback" @click='gotomyhome'>
          <img src="../../images/fback.png" alt="">
        </div>
         <!-- 顶部 Header 区域 -->
        <NavBar :title="title"></NavBar>

        <div class="dailylist">
          <li class="dailylistitem" v-for='items in student' :key='items.id'>
            <div class="dailylistsm">
                <div class="listl">{{items.name}}</div>
                <div class="listr">
                  <p>发布日期：{{items.time}}</p>
                  <p>来自：{{items.who}}</p>
                </div>
            </div>
            <div class="dailylistxm">
              <div class="who">
                  <van-notice-bar 
                  color="#999"
                  background="#ffffff"
                  :scrollable="false"
                  >
                      {{items.tip}}
                    </van-notice-bar>
                 
              </div>
              <div class="tipthey" @click='gotosendnoticedetail(items)'>查看详情</div>
            </div>
          </li>
        </div>

               
        <div class="logoout"  @click='gotosendnotice'>
            <img src="../../images/fun/add.png" >
        </div>

        
    </div>
  </template>


  <script>
  import NavBar from "../../components/NavBar.vue"
  export default {
    data () {
      return {
        title:"通知公告",
        student:[
          {id:'1',name:'梁老师发的通知',who:'梁老师',time:'2019-09-12',tip:'小心火烛'},
          {id:'2',name:'陈老师发的通知',who:'陈老师',time:'2019-09-11',tip:'天寒添衣'},
          {id:'3',name:'王老师发的通知',who:'王老师',time:'2019-08-12',tip:'临行密密缝,意恐迟迟归.谁言寸草心,报得三春晖.'},
          {id:'4',name:'张老师发的通知',who:'张老师',time:'2019-09-10',tip:'可怜身上衣正单，心忧炭贱愿天寒--白居易《卖炭翁》'},
          {id:'5',name:'陈老师发的通知',who:'陈老师',time:'2019-09-01',tip:'小心火烛'},
          {id:'6',name:'徐老师发的通知',who:'徐老师',time:'2019-09-12',tip:'可怜身上衣正单，心忧炭贱愿天寒'},
        ]
      }
    },
    created () {
     
    },
    components: {
			NavBar
	  },
    methods: {
      gotomyhome(){
        this.$router.push({path:'/home/myhome'})
      },
     
      gotosendnotice(){
        this.$router.push({path:'/sendnotice'})
      },
      gotosendnoticedetail(a){
        this.$router.push({
					path: "/sendnoticedetail",
					query: {
						message: a
					}
				});
      },

    },
    watch: {

    },
    mounted () {
     
    }
  }
  </script>
   
  <!-- Add 'scoped" attribute to limit CSS to this component only -->
  <style lang="scss" scoped>
   .duidance{
    padding-top: 40px;
    padding-bottom: 60px;
    overflow-x: hidden;
    min-height: calc(100vh-100px);
    background-color: #fff;
   }
   .fback{
     width: 7vw;
     height: 3vh;
     position: fixed;
     top: 1.5vh;
     left: 2vw;
     z-index: 9999;
   }
   .fback img{
     width: 100%;
     height: 100%;
   }
   .van-tabsqd{
     width: 100vw;
   }

   .who /deep/ .van-notice-bar {
      height: 100%;
      padding-left:0;
      font-size: 5vw;
  }
   
  .dailylist{
    padding: 2vh 5vw;
  }
  .dailylistitem{
    padding: 2vh 0;
    border-bottom: 1px solid #DFDFDF;
    list-style: none;
  }
  .dailylistsm{
    display: flex;
    justify-content: space-between;
  }
  .dailylistsm>.listl{
    font-size: 6vw;
    font-weight: 600;
    height: 6vh;
    line-height: 6vh;
  }
  .dailylistsm>.listr>p{
    font-size: 4vw;
    margin: 0;
  }
  .dailylistxm{
    margin-top: 1vh;
    display: flex;
    
  }
  .tipthey{
    flex: 0,0,25vw;
    width: 25vw;
    color: #26A2FF;
    font-size: 5vw;
    text-align: right;
  }
  .who{
    color: #DFDFDF;
    flex: 1;
  }
  </style>
