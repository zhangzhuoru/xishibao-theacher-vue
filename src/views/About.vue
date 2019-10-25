<template>
    <div class="signin">
        <div class="fback" @click='gotoaddressbook'>
          <img src="../images/fback.png" alt="">
        </div>
         <!-- 顶部 Header 区域 -->
        <NavBar :title="title"></NavBar>
        <div class="invitation">
            <input 
            class="select" 
            type="text"
            :value="value" 
            placeholder="实习宝账号/手机号">
        </div>
        <div class="cellbox" @click='gotoinvitation'>
            <div class="cellrow">
              <div class="lable erweima">
                <img src="../images/add/erweima.png" alt="">
              </div>
              <div class="cellitem">
                <div class="item">
                  <span>我的二维码</span>
                  <p  class="coloer">扫一扫，加我为好友</p>
                </div>
                <van-icon class = 'margin-top'name="arrow" color='#26A2FF' />
              </div>
            </div>
        </div>
        <div class="cellbox">
            <div class="cellrow">
              <div class="lable tongxunlu">
                <img src="../images/add/tongxunlu.png" alt="">
              </div>
              <div class="cellitem">
                <div class="item">
                  <span>手机联系人</span>
                  <p  class="coloer">添加或邀请通讯录中的朋友</p>
                </div>
                <van-icon class = 'margin-top'name="arrow" color='#26A2FF' />
              </div>
            </div>
        </div>
        <div class="cellbox">
            <div class="cellrow">
              <div class="lable">
                <img src="../images/add/saoyisao.png" alt="">
              </div>
              <div class="cellitem">
                <div class="item">
                  <span>扫一扫</span>
                  <p  class="coloer">扫描二维码添加好友</p>
                </div>
                <van-icon class = 'margin-top'name="arrow" color='#26A2FF' />
              </div>
            </div>
        </div>
    </div>
  </template>


  <script>
  import NavBar from "../components/NavBar.vue"
  export default {
    data () {
      return {
        title:"添加朋友",
        value:''
      }
    },
    created () {
     
    },
    components: {
			NavBar
	  },
    methods: {
      gotoaddressbook(){
        this.$router.push({path:'/home/addressbook'})
      },
      text() {
      return this.currentRate.toFixed(0) + '%'
      },
      showPopup() {
        this.show = true;
      },
      gotoinvitation(){
      this.$router.push({path:'/invitation'})
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
   .signin{
    padding-top: 40px;
    overflow-x: hidden;
    background-color: #eee;
    height: 100vh;
    box-sizing: border-box;
   }
   span{
     font-size: 18px;
   }
   p{
     margin: 0;
   }
   .invitation{
    margin-top: 3vh;
    padding: 3vw;
    position: relative;
    background-color: #fff;
   }
   .select{
    background-color: #eee;
    border: none;
    outline: none;
    width: 100%;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    font-size: 5vw;
    padding: 1vh;
    padding-left: 32px;
    box-sizing: border-box;
  }
  .invitation:after{
    content: "";
    width: 20px;
    height: 20px;
    background: url(../images/fun/seach.png) no-repeat center;
    background-size: cover;
    position: absolute;
    left: 5vw;
    top: 30%;
    pointer-events: none;
  }
  .cellbox{
    margin-top: 2vh;
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
    flex: 0,0,12vw;
    width: 12vw;
    background-color: #0090FF;
    padding: 1vw;
    box-sizing: border-box;
    border-radius: 2px;
  }
  .erweima{
    padding: 2vw;
    background-color: #0090FF;
  }
  .tongxunlu{
    background-color: #339966;
  }
  .lable>img{
    width: 100%;
    height: 100%;
  }
  .cellitem{
    padding-left: 5vw;
    font-size: 4vw;
    flex:1;
    display: flex;
    justify-content: space-between;
  }
  .coloer{
    font-size: 12px;
    color: #979797;
  }
  .margin-top{
    margin-top: 6%;
  }

  </style>
