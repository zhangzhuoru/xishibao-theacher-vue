<template>
    <div class="signin">
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
                <van-tab title="已经签到">
                  <div class="sechbox">
                      <form>
                        <fieldset>
                          <legend>请输入学生名字</legend>
                          <input type="text" placeholder="搜索学生" class='sechitem'/>
                          
                        </fieldset>
                      </form>
                      <div class="tablelist">
                        <div class="thead">
                          <div class="sname">学生</div>
                          <div class="signdata">签到消息</div>
                        </div>
                        <div class="tabbody">
                          <li class="sitem" v-for='sitem in student' :key='sitem.id'>
                              <div class="sitemname">{{sitem.name}}</div>
                              <div class="sitemtime">{{sitem.time}}</div>
                          </li>
                        </div>
                      </div>
                  </div>
                </van-tab>
                <van-tab title="未签到">
                    <div class="sechbox">
                        <form>
                          <fieldset>
                            <legend>请输入学生名字</legend>
                            <input type="text" placeholder="搜索学生" class='sechitem'/>
                          </fieldset>
                        </form>
                        <div class="tablelist">
                          <div class="thead">
                            <div class="sname">学生</div>
                            <div class="signdata">签到消息</div>
                          </div>
                          <div class="tabbody">
                            <li class="sitem" v-for='sitem in student' :key='sitem.id'>
                                <div class="sitemname">{{sitem.name}}</div>
                                <div class="sitemtime"></div>
                            </li>
                          </div>
                        </div>
                    </div>
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
        title:"签到报表",
        student:[
          {id:'1',name:'梁祖茂',time:'8：20'},
          {id:'2',name:'陈庆履',time:'8：21'},
          {id:'3',name:'王军',time:'8：28'},
          {id:'4',name:'张人仁',time:'8：29'},
          {id:'5',name:'陈启涛',time:'8：20'},
          {id:'6',name:'徐潘',time:'8：24'},
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
      showPopup() {
        this.show = true;
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
   .signin{
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

  .sechbtn>img{
    width: 100%;
    height: 100%;
  }
 

    .thead{
      background-color: #F1F1F1;
      display: flex;
      text-align: center;
      height:5vh;
      line-height:5vh;
    }
    .sname{
      width: 30vw;
      flex:0,0,30vw;
      border-right: 1px solid #DFDFDF;
    }
    .signdata{
      flex: 1;
    }
    .sitem{
      display: flex;
      text-align: center;
      height:8vh;
      line-height:8vh;
    }
    .sitemname{
      width: 30vw;
      flex:0,0,30vw;
      border-right: 1px solid #DFDFDF;
      border-bottom: 1px solid #DFDFDF;
    }
    .sitemtime{
      flex: 1;
      border-bottom: 1px solid #DFDFDF;
    }
    .tablelist{
      margin-top: 2vh;
    }
    .sechitem{
      width: 100%;
    }
  </style> 
