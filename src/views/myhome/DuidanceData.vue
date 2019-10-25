<template>
    <div class="duidancedata">
        <div class="fback" @click='gotoback'>
          <img src="../../images/fback.png" alt="">
        </div>
         <!-- 顶部 Header 区域 -->
        <NavBar :title="title"></NavBar>
        <div class="cellbox">
            <div class="cellrow">
                <div class="lable">巡访老师：</div>
                <div >{{message.teacher}}</div>
            </div>
        </div>
        <div class="cellbox">
            <div class="cellrow">
                <div class="lable">巡访学生：</div>
                <div >{{message.name}}</div>
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
                <div >{{message.tepy ? '实地':'电话'}}</div>
              </div>
        </div>

        <div class="alldatabck">
          <div class="alldatabox">
            <div class="alldataheard">
               巡访总结：
            </div>
            <p>{{message.data}}</p>
          </div>
        </div>

        
    </div>
  </template>


  <script>
  import NavBar from "../../components/NavBar.vue"
  export default {
    data () {
      return {
        title:"巡访详情",
        message:'',
        show: false,
        user:{
          name:'李老师'
        }
      }
    },
    created () {
      this.message = this.$route.query.message;
    },
    components: {
			NavBar
	  },
    methods: {
      gotoback() {
        this.$router.go(-1);
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
   .duidancedata{
    padding-top: 40px;
    overflow-x: hidden;
    min-height: calc(100vh-40px);
    height: 100vh;
    background-color: #fff;
    box-sizing: border-box;
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
  </style>
