<template>
    <div class="duidance">
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
                <van-tab title="我收到的">
                  <div class="dailylist">
                    <li class="dailylistitem" v-for='items in student' :key='items.id'>
                      <div class="dailylistsm">
                          <div class="listl">{{items.teacher}}</div>
                          <div class="listr">
                            <p>巡访日期：{{items.time}}</p>
                            <p>巡访方式：{{items.tepy ? '实地':'电话'}}</p>
                          </div>
                      </div>
                      <div class="dailylistxm">
                        <div class="who">
                            巡访学生：{{items.name}}
                        </div>
                        <div class="tipthey" @click='gotolook(items)'>查看详情</div>
                      </div>
                    </li>
                  </div>
                </van-tab>
                <van-tab title="我提交的">
                  
                </van-tab>
                
                
              </van-tabs>
              <div class="logoout" @click="addClick">
                  <img src="../../images/fun/add.png" >
              </div>
        </div>
        
    </div>
  </template>


  <script>
  import NavBar from "../../components/NavBar.vue"
  export default {
    data () {
      return {
        title:"指导学生",
        student:[
          {id:'1',name:'梁祖茂',time:'2019-09-12',teacher:'李老师',tepy:0,data:'不错'},
          {id:'2',name:'陈庆履',time:'2019-09-11',teacher:'梁老师',tepy:1,data:'得再努力'},
          {id:'3',name:'王军',time:'2019-08-12',teacher:'梁老师',tepy:1,data:'很认真'},
          {id:'4',name:'张人仁',time:'2019-09-10',teacher:'罗老师',tepy:1,data:'。。。'},
          {id:'5',name:'陈启涛',time:'2019-09-01',teacher:'罗老师',tepy:1,data:'不错'},
          {id:'6',name:'徐潘',time:'2019-09-12',teacher:'李老师',tepy:0,data:'同上'},
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
      text() {
      return this.currentRate.toFixed(0) + '%'
      },
      gotolook(a) {
        this.$router.push({
          path:'/duidancedata',
					query: {
						message: a
					}
        })
      },
      addClick(){
        this.$router.push({path:'/duidancedataadd'})
      }

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
    justify-content: space-between;
  }
  .tipthey{
    color: #26A2FF;
  }
  
  </style> 
