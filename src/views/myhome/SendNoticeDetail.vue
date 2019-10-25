<template>
    <div class="sendnoticedetail">
      <div class="fback" @click='gotonotice'>
        <img src="../../images/fback.png" alt="">
      </div>
        <!-- 顶部 Header 区域 -->
      <NavBar :title="title"></NavBar>
      <div class="boxbc">
        <div class="studes">
            <div> 时间 </div><p style="margin: 0;line-height: 29px;font-size: 20px;">{{message.time}}</p>
        </div>
        <div class="scoreddata">
            <div> 通知标题: </div>
            <p  class="dispinb">{{message.name}}</p>
        </div>
      </div>
      
      <div class="pingyubox">
        <div class="pingyu">
            通知内容：
        </div>
        <p cols="6" class="duohangwenben">{{message.tip}}</p>
      </div>

  </div>
</template>


  <script>
  import NavBar from "../../components/NavBar.vue"
  export default {
    data () {
      return {
        title:"发通知",
        show: false,
        message:[],
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
      gotonotice(){
        this.$router.push({path:'/notice'})
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
   .sendnoticedetail{
    padding-top: 40px;
    padding-bottom: 60px;
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
   .studes{
     margin-top:1vh;
     padding: 5vw;
     background-color: #fff;
     display: flex;
     justify-content: space-between;
   }
   .boxbc{
     background-color: #F6F6F6;
     padding-bottom: 2vh;
   }
   .studes>div{
     font-size: 5vw;
     font-weight: 800;
   }

   .scoreddata{
     margin-top: 2vh;
     padding: 5vw;
     background-color: #fff;
   }
   .scoreddata>div{
     width: 100%;
     height: 40px;
     line-height: 40px;
   }
   .dispinb{
     flex: 1;
     margin: 0;
     border: none;
     line-height: 40px;
     font-size: 22px;
     font-weight: bold;
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
    .pingyubox{
      margin-top:2vh;
      padding: 5vw;
      background-color: #fff;
    }
    .duohangwenben{
      min-height: 30vh;
      margin: 0;
      border: none;
      margin-top: 1vh;
      font-size: 22px;
    }
  </style>
