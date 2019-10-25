<template>
    <div class="month">
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
              <van-tab title="未批阅">
                  <div class="monthlist">
                    <li class="monthlistitem" v-for='items in student' :key='items.id'>
                      <div class="monthlistsm">
                          <div class="listl">{{items.name}}的月报</div>
                          <div class="listr">
                            <p>提交时间：{{items.time}}</p>
                            <p>提交篇数：{{items.id}}</p>
                          </div>
                      </div>
                      <div class="monthlistxm" @click='gotomonthdata(items)'>
                        <div class="tipthey">批阅TA</div>
                      </div>
                    </li>
                  </div>
                </van-tab>
                <van-tab title="已批阅">
                  <div class="monthlist">
                    <li class="monthlistitem" v-for='items in student' :key='items.id'>
                      <div class="monthlistsm">
                          <div class="listl">{{items.name}}的月报</div>
                          <div class="listr">
                            <p>提交时间：{{items.time}}</p>
                            <p>提交篇数：{{items.id}}</p>
                          </div>
                      </div>
                      <div class="monthlistxm">
                        <div class="black">已批阅</div>
                      </div>
                    </li>
                  </div>
                </van-tab>
                
                <van-tab title="未提交">
                  <div class="monthlist">
                    <li class="monthlistitem" v-for='items in student' :key='items.id'>
                      <div class="monthlistsm">
                          <div class="listl">{{items.name}}的月报</div>
                          <div class="listr">
                            <p>提交时间：{{items.time}}</p>
                            <p>提交篇数：{{items.id}}</p>
                          </div>
                      </div>
                      <div class="monthlistxm">
                        <div class="tipthey" @click='tipta(items.name)'>提醒TA</div>
                      </div>
                    </li>
                  </div>
                </van-tab>
                
              </van-tabs>
        </div>
        
    </div>
  </template>


  <script>
  import { Notify } from 'vant';
  import NavBar from "../../components/NavBar.vue"
  export default {
    data () {
      return {
        title:"月报批阅",
        student:[
          {id:'1',name:'梁祖茂',time:'2019-09-12',about:'整理数据',get:'收获很多',problem:'无'},
          {id:'2',name:'陈庆履',time:'2019-09-11',about:'整理数据',get:'收获很多',problem:'无'},
          {id:'3',name:'王军',time:'2019-08-12',about:'整理数据',get:'收获很多',problem:'无'},
          {id:'4',name:'张人仁',time:'2019-09-10',about:'整理数据',get:'收获很多',problem:'无'},
          {id:'5',name:'陈启涛',time:'2019-09-01',about:'整理数据',get:'收获很多',problem:'无'},
          {id:'6',name:'徐潘',time:'2019-09-12',about:'整理数据',get:'收获很多',problem:'无'},
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
      },
      gotomonthdata(a){
        this.$router.push({
          path:'/monthdata',
					query: {
						message: a
					}
        })
      },
      tipta(a){
        Notify({ type: 'success', message: `成功提醒${a}未提交月报` });
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
   .month{
    padding-top: 40px;
    overflow-x: hidden;
    min-height: calc(100vh-40px);
    background-color: #fff;
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
  .monthlist{
    padding: 2vh 5vw;
  }
  .monthlistitem{
    padding: 2vh 0;
    border-bottom: 1px solid #DFDFDF;
    list-style: none;
  }
  .monthlistsm{
    display: flex;
    justify-content: space-between;
  }
  .monthlistsm>.listl{
    font-size: 6vw;
    font-weight: 600;
    height: 6vh;
    line-height: 6vh;
  }
  .monthlistsm>.listr>p{
    font-size: 4vw;
    margin: 0;
  }
  .monthlistxm{
    display: flex;
    justify-content: flex-end;
  }
  .tipthey{
    color: #26A2FF;
  }
  .black{
    color: #8f8f94;
  }
  </style>
