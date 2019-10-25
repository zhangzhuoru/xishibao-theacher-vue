<template>
    <div class="editordata">
      <div class="fback" @click='gotoscored'>
        <img src="../../images/fback.png" alt="">
      </div>
        <!-- 顶部 Header 区域 -->
      <NavBar :title="title"></NavBar>
      <div class="studes">
          <div> 考评学生 </div><span>{{message.name}}</span>
      </div>
      <div class="scoreddata">
          <div> 考评成绩 </div>
          <input 
          type="number"
          class="dispinb" 
          placeholder="请输入成绩" 
          v-model="input1">
      </div>
      <div class="pingyubox">
        <div class="pingyu">
            实习评语：
        </div>
        <textarea 
        rows="6" 
        class="mostbibi"
        placeholder="请输入实习评语" 
        v-model="input2"></textarea>
      </div>
      <div class="fixend">
        <span class="nopass">取消</span>
        <span class="pass" @click='isok'>提交</span>
      </div>
  </div>
</template>


  <script>
  import { Dialog } from 'vant';
  import { Notify } from 'vant';
  import NavBar from "../../components/NavBar.vue"
  export default {
    data () {
      return {
        title:"考评成绩",
        message:'',
        show: false,
        input1:'',
        input2:'',
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
      gotoscored(){
        this.$router.push({path:'/scored'})
      },
      showPopup() {
        this.show = true;
      },
      isok(){
        if(this.input1){
          Dialog.alert({
            message: `成功考核 ${this.message.name}同学\n实习成绩为：${this.input1}分\n评语：${this.input2}`
          }).then(() => {
            this.$router.push({path:'/home/myhome'})
          });
        }else{
          Notify({ type: 'warning',className:'moretoll', message: `${this.user.name}还未填写${this.message.name}同学成绩，请继续填写` });
        }

      }

    },
    watch: {
        "input1"(n,o){
          this.input1=(String(n).replace(/[^\d]/g,''))-0
          console.log(n,o,String(n).replace(/[^\d]/g,''))
          if(n>100){
            this.input1=100
          }
          if(n<0){
            this.input1=''
          }
          
        }
    },
    mounted () {
     
    }
  }
  </script>
   
  <!-- Add 'scoped" attribute to limit CSS to this component only -->
  <style lang="scss" scoped>
   .editordata{
    padding-top: 40px;
    overflow-x: hidden;
    background-color: #F6F6F6;
    height:100vh;
    box-sizing: border-box;
   }
   .studes{
     margin-top:1vh;
     padding: 5vw;
     background-color: #fff;
     display: flex;
   }
   .studes>div{
     flex: 0,0,20vw;
     width: 20vw;
   }
   .studes>span{
     flex:1;
     color: #3399FF;
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
    .mostbibi{
      margin-top: 2vh;
      width: 100%;
      border: none;
      font-size: 20px;
    }
  </style>
