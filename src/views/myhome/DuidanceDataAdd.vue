<template>
    <div class="duidancedataadd">
        <div class="fback" @click='gotoback'>
          <img src="../../images/fback.png" alt="">
        </div>
         <!-- 顶部 Header 区域 -->
        <NavBar :title="title"></NavBar>
        <div class="cellbox">
            <div class="cellrow">
                <div class="lable">巡访老师：</div>
                <div >李老师</div>
            </div>
        </div>
        <div class="cellbox">
            <div class="cellrow1">
                <div class="lable">巡访学生：</div>
                <input class="select" type="text":value="value" @click="showPicker = true" placeholder="选择巡访学生">
            </div>
        </div>
        <div class="cellbox">
            <div class="cellrow">
                <div class="lable">巡访日期：</div>
                <div >{{message.time}}</div>
              </div>
        </div>
        <div class="cellbox">
            <div class="cellrow">
                <div class="lable">巡访方式：</div>
                <div ><input type="radio" name="sex" value="1" checked="checked"/>实地<!--name一样-->
                  <input type="radio" name="sex" value="0"/>电话</div>
              </div>
        </div>

        <div class="alldatabck">
          <div class="alldatabox">
            <div class="alldataheard">
               巡访总结：
            </div>
            <textarea 
              rows="6" 
              class="mostbibi"
              placeholder="请输入巡访总结" 
              v-model="all"></textarea>
          </div>
        </div>
        <div class="fixend">
          <span class="nopass">不通过</span>
          <span class="pass" @click='isok'>通过</span>
        </div>
        <van-popup v-model="showPicker" position="bottom">
          <van-picker
            show-toolbar
            :columns="columns"
            @cancel="showPicker = false"
            @confirm="onConfirm"
          />
        </van-popup>
    </div>
  </template>


  <script>
  import { Dialog } from 'vant';
  import { Notify } from 'vant';
  import NavBar from "../../components/NavBar.vue"
  export default {
    data () {
      return {
        title:"巡访详情",
        message:{id:'1',name:'梁祖茂',time:'2019-09-12',teacher:'李老师',tepy:0,data:'不错'},
        show: false,
        all:'',
        user:{
          name:'李老师'
        },
        value: '',
        showPicker: false,
        columns: ['梁祖茂', '陈庆履', '张人仁', '王军', '陈启涛']
      }
    },
    created () {
    },
    components: {
			NavBar
	  },
    methods: {
      gotoback() {
        this.$router.go(-1);
      },
      isok(){
        if(this.value){
          Dialog.alert({
            message: `提交巡访${this.value}的工作指导通过`
          }).then(() => {
            this.$router.push({path:'/home/myhome'})
          });
        }else{
          Notify({ type: 'warning',className:'moretoll', message: `${this.user.name}还未填写巡访学生，请继续填写` });
        }
        

      },
      onConfirm(value) {
      this.value = value;
      this.showPicker = false;
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
   .duidancedataadd{
    padding-top: 40px;
    overflow-x: hidden;
    min-height: calc(100vh-40px);
    height: 100vh;
    background-color: #fff;
    box-sizing: border-box;
   }


    .container{
      padding-top: 4vh;
    }
    .cellbox{
      box-sizing: border-box;
      width: 100%;
      padding: 0 5vw;
      overflow: hidden;
      color: #323233;
      font-size: 14px;
      line-height: 24px;
      background-color: #fff;
    }
    .cellrow{
      width: 100%;
      display: flex;
      font-size: 5vw;
      border-bottom: 1px solid #ebedf0;
      padding: 2vh 0;
      position: relative;
    }
    .lable{
      flex: 0,0,35vw;
      width: 35vw;
      color: rgb(158, 154, 154);
    }

    .cellitem{
      flex:1;
      display: flex;
      justify-content: space-between;
    }


    p {
        margin: 20px 0;
        text-align: center;
        font-size: 28px;
        font-family: Righteous;
    }
    .namebox{
      width: 90vw;
      font-size: 5vw;
    }
    .nameboxtitle{
      text-align: center;
      font-size: 8vw;
      height: 10vh;
      line-height: 10vh;
    }
    .padd{
      padding: 2vh 10vw;
    }
    .quxiao,.queding{
      width: 50%;
      display: inline-block;
      height: 7vh;
      line-height: 7vh;
      text-align: center;
      border-top: 1px solid #ebedf0;
    }
    .quxiao{
      border-right: 1px solid #ebedf0;
    }
    .queding{
      color: #26A2FF;
    }
    .fw{
      font-weight: 800;
    }
    .alldatabck{
      background-color: #F6F6F6;
      padding: 2vh 0 0;
    }
    .alldatabox{
      padding: 1vh 5vw 3vh;
      background-color: #fff;
    }
    .alldataheard{
      color: rgb(158, 154, 154);
      font-size: 5vw;
      margin-bottom: 2vh;
    }
    .alldatabox>p{
      margin: 0;
      font-size: 5vw;
      color: #000;
      text-align: left;
    }
    .fixend{
      position: fixed;
      bottom: 0;
      left: 0;
    }
    .nopass{
      display: inline-block;
      background-color: #fff;
      width: 50vw;
      height: 8vh;
      line-height: 8vh;
      text-align: center;
    }
    .pass{
      display: inline-block;
      background-color: #3399FF;
      color: #fff;
      width: 50vw;
      height: 8vh;
      line-height: 8vh;
      text-align: center;
    }

    .select{
      border: none;
      outline: none;
      width: 160px;
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      font-size: 5vw;
  }
  .cellrow1{
      width: 100%;
      display: flex;
      font-size: 5vw;
      border-bottom: 1px solid #ebedf0;
      padding: 2vh 0;
      position: relative;
    }
    .cellrow1:after{
      content: "";
      width: 20px;
      height: 20px;
      background: url(../../images/xiala.png) no-repeat center;
      background-size: cover;
      position: absolute;
      right: 0;
      top: 30%;
      pointer-events: none;
  }
  .mostbibi{
      margin-top: 2vh;
      width: 100%;
      border: none;
      font-size: 5vw;
    }
  </style>
