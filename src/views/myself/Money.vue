<template>
    <div class="money">

      <div class="bg">
        <img src="../../images/money.png" alt="">
      </div>
      <div class="telephonecard">
        <div class="telephonenmb">
          <span>177****3009</span><a href="#">切换号码</a><img src="../../images/refresh.png" alt="">
        </div>
        <div class="numbertitle">
          话费余额 >
        </div>
        <div class="number">
          0元
        </div>
        <div class="recharge">
          <button class="rechargebtn" @click='gototelephonecharge'>话费充值</button>
        </div>
        <div class="timeupdate">
          更新于14：12
        </div>

      </div>
      <van-notice-bar
        style="margin-top:32vh"
        :scrollable="false"
        mode="closeable"
        text="您的话费余额不足，请及时充值"
        left-icon="volume-o"
      />
      <div class="Advertisement">
        <img src="../../images/Advertisement.jpg" alt="">
      </div>
    </div>
  </template>


  <script>

  export default {
    data () {
      return {

      }
    },
    created () {
     
    },

    methods: {
      gototelephonecharge(){
      this.$router.push({path:'/telephonecharge'})
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
   .money{
    padding-bottom: 60px;
    overflow-x: hidden;
    min-height: calc(100vh-100px);
    background-color: rgba(245, 241, 241,0.6);
   }
  .bg{
    width: 100%;
    height: 36vh;
    position: relative;
  }
  .bg > img,.Advertisement > img{
    width: 100%;
    height: 100%;
  }
  .Advertisement{
    width: 100%;
    height: 20vh;
    margin-top: 5vw;
  }
  .telephonecard{
    position: absolute;
    width: 85vw;
    height: 36vh;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    left: 2.5vw;
    top:25vh;
    padding: 5vw;
  }
  .telephonenmb{
    display: flex;
  }
  .telephonenmb>span{
    color: #000;
    font-size: 5vw;
  }
  .telephonenmb>a{
    color: #D96017;
    font-size: 5vw;
    text-decoration: underline;
    margin-left: 5vw;
    flex: 1;
  }
  .telephonenmb>img{
    width: 5vw;
    height: 5vw;
    flex:0,0,5vw;
    /* transform: translateY(1px); */
  }
  .numbertitle{
    font-size: 4vw;
    margin-top: 5vw;
    color: rgb(182, 181, 181);
  }
  .number{
    font-size: 12vw;
    text-align: center;
    margin-top: 8vw;
  }
  .recharge{
    margin-top: 8vw;
    display: flex;
    justify-content: center;
  }
  .rechargebtn{
    width: 40vw;
    height: 5vh;
    font-size: 4vw;
    background-color: #D96017;
    color: #fff;
    border: none;
    border-radius: 8px;
  }
  .timeupdate{
    margin-top: 2vw;
    text-align: right;
    font-size: 4vw;
    color: rgb(180, 179, 179);
  }
  </style>
