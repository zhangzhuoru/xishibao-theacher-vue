<template>
    <div class="editordata">
        <div class="fback" @click='gotomyself'>
          <img src="../../images/fback.png" alt="">
        </div>
         <!-- 顶部 Header 区域 -->
        <NavBar :title="title"></NavBar>
 
        <div class="container">
            <div class="avator"></div>
            <p @click="showPopup">{{user.name}}</p>
        </div>
        <div class="cellbox" >
          <div class="cellrow posr">
            <div class="lable">性别</div>
            <div class="cellitem">
              <div class="item">女</div>
              <van-icon name="arrow" color='#26A2FF' />
            </div>
          </div>
        </div>
        <div class="cellbox">
            <div class="cellrow">
              <div class="lable">生日</div>
              <div class="cellitem">
                <div class="item">1999-10-01</div>
                <van-icon name="arrow" color='#26A2FF' />
              </div>
            </div>
        </div>
        <div class="cellbox">
          <div class="cellrow">
              <div class="cellitem">
                <div class="lable">家乡</div>
                <van-icon name="arrow" color='#26A2FF' />
              </div>
          </div>
        </div>
        <div class="cellbox">
            <div class="cellrow">
                <div class="lable">学校</div>
                <div >华南师范大学</div>
            </div>
        </div>
        <div class="cellbox">
            <div class="cellrow">
                <div class="lable">基本信息</div>
                <div >建筑系</div>
              </div>
        </div>
        <van-popup v-model="show" round>
          <div class="namebox">
            <div class="nameboxtitle">设置姓名</div>
            <div class="padd"><input type="text" v-model='user.name'></div>
            <div class="surebox">
              <div class="quxiao">取消</div>
              <div class="queding">确定</div>
            </div>
          </div>
        </van-popup>
    </div>
  </template>


  <script>
  import NavBar from "../../components/NavBar.vue"
  export default {
    data () {
      return {
        title:"个人信息",
        username:'',
        password:'',
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
      gotomyself(){
        this.$router.push({path:'/home/myself'})
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
   .editordata{
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
      flex: 0,0,25vw;
      width: 25vw;
      color: rgb(158, 154, 154);
    }

    .cellitem{
      flex:1;
      display: flex;
      justify-content: space-between;
    }
    .avator {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      background: url(../../images/touxiang.jpg) no-repeat center center;
      background-size: 100% 100%;
      margin: 0 auto;
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
      width: 49%;
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
  </style>
