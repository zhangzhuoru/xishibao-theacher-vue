<template>
    <div class="changepassword">
        <div class="fback" @click='gotomyself'>
          <img src="../../images/fback.png" alt="">
        </div>
         <!-- 顶部 Header 区域 -->
        <NavBar :title="title"></NavBar>
        <van-cell-group>
          <van-field
            v-model="message"
            label="请输入原密码"
            type="textarea"
            placeholder="请输入原密码"
            rows="1"
            autosize
          />
        </van-cell-group>
        <van-cell-group>
          <van-field
            v-model="message"
            label="请输入新密码"
            type="textarea"
            placeholder="请输入新密码"
            rows="1"
            autosize
          />
        </van-cell-group>
        <div class="tiphot">
          必须是6-20个英文字母、数字或符号(除空格)，且字母、数字和标点符号至少包含两种
        </div>
        <van-button color='#D96017' size="large">确定</van-button>
    </div>
  </template>


  <script>
  import NavBar from "../../components/NavBar.vue"
  export default {
    data () {
      return {
        title:"修改密码",
        message:''
      }
    },
    created () {
     
    },
    components: {
			NavBar
	  },
    methods: {
      gotomyself(){
        this.$router.push({path:'/home/myself'})
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
   .changepassword{
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


   .tiphot{
    font-size: 3vw;
    color: rgb(182, 181, 181);
    letter-spacing:1px;
   }
  </style>
