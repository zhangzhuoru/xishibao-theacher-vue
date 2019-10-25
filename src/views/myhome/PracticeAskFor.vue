<template>
    <div class="practiceaskfor">
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
              <van-tab title="待审批">
                  <div class="dailylist">
                      <li class="dailylistitem" v-for='items in studented' :key='items.id'>
                        <div class="dailylistsm">
                            <div class="listl">{{items.name}}</div>
                            <div class="listr">
                              <p>{{items.time}}</p>
                            </div>
                        </div>
                        <div class="dailylistzj">
                          <div class="major">计算机系/{{items.special}}</div>
                        </div>
                        <div class="dailylistxm">
                          <div class="who">
                              申请单位：{{items.unit}}
                          </div>
                          <div class="tipthey" @click='gotopracticeaskfordata(items)'>去审批</div>
                        </div>
                      </li>
                    </div>
              </van-tab>
                <van-tab title="已审批">
                  <div class="dailylist">
                    <li class="dailylistitem" v-for='items in studentst' :key='items.id'>
                      <div class="dailylistsm">
                          <div class="listl">{{items.name}}</div>
                          <div class="listr">
                            <p>{{items.time}}</p>
                          </div>
                      </div>
                      <div class="dailylistzj">
                        <div class="major">计算机系/{{items.special}}</div>
                      </div>
                      <div class="dailylistxm">
                        <div class="who">
                            申请单位：{{items.unit}}
                        </div>
                        <div class="black">已通过</div>
                      </div>
                    </li>
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
        title:"实习申请批阅",
        studentst:[
          {id:'1',name:'梁祖茂的的实习',time:'2019-09-12',special:'人工智能',unit:'广州恒电'},
          {id:'2',name:'陈庆履的的实习',time:'2019-09-11',special:'大数据',unit:'广州恒电'},
          {id:'3',name:'王军的的实习',time:'2019-08-12',special:'安卓开发',unit:'广州恒电'},
          {id:'4',name:'张人仁的的实习',time:'2019-09-10',special:'数控技术',unit:'广州恒电'},
          {id:'5',name:'陈启涛的的实习',time:'2019-09-01',special:'软件工程',unit:'广州恒电'},
        ],
        studented:[
          {id:'1',name:'任海标的的实习',time:'2019-09-12',special:'人工智能',unit:'广州恒电'},
          {id:'2',name:'梁祖茂的的实习',time:'2019-09-11',special:'大数据',unit:'广州恒电'},
          {id:'3',name:'刘涛的的实习',time:'2019-08-12',special:'安卓开发',unit:'广州恒电'},
          {id:'4',name:'李子丰的的实习',time:'2019-09-10',special:'数控技术',unit:'广州恒电'},
          {id:'5',name:'徐潘的的实习',time:'2019-09-12',special:'微信小程序',unit:'广州恒电'},
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
      
      gotopracticeaskfordata(a){
        this.$router.push({
					path: "/practiceaskfordata",
					query: {
						message: a
					}
				});
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
   .practiceaskfor{
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
    width: 100%;
    height: 5vh;
    display: flex;
    justify-content: space-between;
  }
  .dailylistsm>.listl{
    font-size: 5.5vw;
    font-weight: 600;

  }
  .dailylistsm>.listr>p{
    font-size: 4vw;
    margin: 0;
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
  .black{
    color: #8f8f94;
  }
  .tipthey{
    color: #26A2FF;
  }
  
  </style> 
