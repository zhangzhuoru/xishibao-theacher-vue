<template>
    <div class="changepassword">
        <div class="fback" @click='gotomyself'>
          <img src="../../images/fback.png" alt="">
        </div>
         <!-- 顶部 Header 区域 -->
        <NavBar :title="title"></NavBar>
        公司总机：+86-020-38468526 </br>

传     真：+86-020-62983368</br>

公司网址： www.gdhengdian.com</br>

官方微信：gz_hengdian</br>

业务联系：18922435697 </br>

投诉电话：400-011-9558 </br>

技术支持：400-011-9558 </br>

公司邮箱：hdkj@gzhengdian.com </br>

公司总部：广东省广州市天河区五山路248号金山大厦南塔19楼</br>
<img src="../../images/about.jpg" alt="">
    </div>
  </template>


  <script>
  import NavBar from "../../components/NavBar.vue"
  export default {
    data () {
      return {
        title:"关于恒电",
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
