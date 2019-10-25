<template>
    <div class="scored">
        <div class="fback" @click='gotomyhome'>
          <img src="../../images/fback.png" alt="">
        </div>
         <!-- 顶部 Header 区域 -->
        <NavBar :title="title"></NavBar>
        <div class="van-tabsqd">
            <van-tabs 
              type="card"
              color='#26a2ff'
              >
                <van-tab title="我的考评">
                  <div class="dailylist">
                    <li class="dailylistitem" v-for='items in student' :key='items.id'>
                      <div class="dailylistsm">
                          <div class="listl">
                            <div class="pbox">
                                <p class="black">{{items.name}} ({{items.nbm}})</p>
                            
                                <p>考评状态：<span v-if='items.state'>已考评</span><span v-else class="red">未考评</span></p>
                            </div>
                            
                          </div>
                          <div class="listr">
                            <div v-if='items.state' class="kaopinbtn">查看详情</div>
                            <div v-else class="kaopinbtn orange" @click='gotoscoring(items)'>考评</div>
                          </div>
                      </div>
                      
                    </li>
                  </div>
                </van-tab>
                <van-tab title="对我的考评">
                  
                </van-tab>
                
                
              </van-tabs>

        </div>
        
    </div>
  </template>


  <script>
  import NavBar from "../../components/NavBar.vue"
  export default {
    data () {
      return {
        title:"实习考评",
        student:[
          {id:'1',name:'梁祖茂',nbm:'20191120',state:0},
          {id:'2',name:'陈庆履',nbm:'20191121',state:0},
          {id:'3',name:'王军',nbm:'20191110',state:0},
          {id:'4',name:'张人仁',nbm:'20191220',state:1},
          {id:'5',name:'陈启涛',nbm:'20191320',state:0},
          {id:'6',name:'徐潘',nbm:'20191420',state:1},
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
      gotoscoring(a){
        this.$router.push({
          path:'/scoring',
          query: {
						message: a
					}
        })
      },
      text() {
      return this.currentRate.toFixed(0) + '%'
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
   .scored{
    padding-top: 40px;
    overflow-x: hidden;
    min-height: calc(100vh-40px);
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

   .van-tabsqd /deep/ .van-tabs__nav--card {
      box-sizing: border-box;
      height: 6vh;
      margin: 1vh 3vh ;
      border-radius: 8px;
      line-height: 6vh;

  }
   .van-tabsqd /deep/ .van-tabs__wrap {
      height: 8vh;
  }
   .van-tabsqd /deep/ .van-ellipsis {
    height: 6vh;
    line-height: 6vh;
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
    font-size: 5.5vw;
    font-weight: 600;
    height: 10vh;
    display: flex;
    align-items: center;
  }
  .dailylistsm>.listr{
    font-size: 5.5vw;
    font-weight: 600;
    height: 10vh;
    display: flex;
    align-items: center;
  }
  .listl>.pbox>p{
    font-size: 4vw;
    margin: 0;
  }
  .red{
    color: red;
  }
  .black{
    color: black;
  }
  .dailylistzj{
    display: flex;
    justify-content: flex-start;
  }
  .dailylistxm{
    margin-top: 1vh;
    display: flex;
    justify-content: space-between;
    
  }
  .tipthey{
    color: #26A2FF;
  }
  .kaopinbtn{
    width: 30vw;
    height: 5vh;
    background-color: #26A2FF;
    color: #fff;
    font-size: 4vw;
    text-align: center;
    line-height: 5vh;
    border-radius: 8px;
  }
  .orange{
    background-color: orange;
  }
  </style>
