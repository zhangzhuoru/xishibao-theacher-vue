<template>
    <div class="editordata">
      <div class="fback" @click='gotomyhome'>
        <img src="../../images/fback.png" alt="">
      </div>
        <!-- 顶部 Header 区域 -->
      <NavBar :title="title"></NavBar>
      <div class="studes">
          <div> 时间 </div><span>2019-09-12</span>
      </div>
      <div class="scoreddata">
          <div> 通知标题 </div><input type="text" class="dispinb">
      </div>
      <div class="pingyubox">
        <div class="pingyu">
            通知内容：
        </div>
        <textarea cols="6" class="duohangwenben"></textarea>
      </div>
      <div class="studes" @click='showbox'>
          <div> 发送到：</div> <div>{{who}}<van-icon name="arrow" /></div>
      </div>
      <div class="boxshadow" v-if='show' @click='closebox'>
        <div class="autobox" v-if='show' @click='sendwho'>
          所有人
        </div>
      </div>
      <div class="fixend">
        <span class="nopass" >取消</span>
        <span class="pass" @click='sending'>提交</span>
      </div>
  </div>
</template>


  <script>
  import { Dialog } from 'vant';
  import NavBar from "../../components/NavBar.vue"
  export default {
    data () {
      return {
        title:"发通知",
        who:'',
        show: false,
        user:{
          name:'李老师'
        }
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
      showbox() {
        this.show = true;
      },
      sendwho(){
        this.who = '所有人'
        this.show = false
      },
      closebox(){
        this.show = false
      },
      sending(){
        Dialog.alert({
            message: '发送通告成功'
          }).then(() => {
            this.$router.push({path:'/home/myhome'})
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
   .editordata{
    padding-top: 40px;
    padding-bottom: 60px;
    overflow-x: hidden;
    min-height: calc(100vh-100px);
    background-color: #F6F6F6;
   }
   
   .studes{
     margin-top:1vh;
     padding: 5vw;
     background-color: #fff;
     display: flex;
     justify-content: space-between;
   }
   .studes>div{
     font-size: 5vw;
     font-weight: 800;
   }

   .scoreddata{
     margin-top:2vh;
     padding: 5vw;
     background-color: #fff;
     display: flex;
   }
   .scoreddata>div{
     flex: 0,0,20vw;
     width: 20vw;
     height: 40px;
     line-height: 40px;
   }
   .dispinb{
     flex: 1;
     margin: 0;
     border: none;
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
    }
  </style>
