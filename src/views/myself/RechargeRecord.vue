<template>
    <div class="rechargerecord">
        <div class="fback" @click='gotomyself'>
          <img src="../../images/fback.png" alt="">
        </div>
         <!-- 顶部 Header 区域 -->
        <NavBar :title="title"></NavBar>
        <div class="onemonthonebox">
          <div class="monthboxsm">
            <div class="month" @click='gotochooseadate'>
              <span>8月</span><div class="daosj"></div>
            </div>
            <div class="sumcount">
              <div class="sum sm">支出 ￥49.90</div>
              <div class="sum xm">收入 ￥0.00</div>
            </div>
          </div>
          <div class="monthboxxm">
            <li class="monthitem">
                <div class="sjbox">
                  <img src="../../images/recharger.png" alt="">
                </div>
                <div class="billingdetails">
                  <p class="sjcz">手机充值</p>
                  <p class="txwl">通讯物流</p>
                  <p class="cztime">08-08 14：26</p>
                </div>
                <div class="bbigsum">
                  -49.90
                </div>
            </li>
            
          </div>
        </div>
        <div class="onemonthonebox">
          <div class="monthboxsm">
            <div class="month">
              <span>5月</span><div class="daosj"></div>
            </div>
            <div class="sumcount">
              <div class="sum sm">支出 ￥49.90</div>
              <div class="sum xm">收入 ￥0.00</div>
            </div>
          </div>
          <div class="monthboxxm">
            <li class="monthitem">
                <div class="sjbox">
                  <img src="../../images/recharger.png" alt="">
                </div>
                <div class="billingdetails">
                  <p class="sjcz">手机充值</p>
                  <p class="txwl">通讯物流</p>
                  <p class="cztime">08-08 14：26</p>
                </div>
                <div class="bbigsum">
                  -49.90
                </div>
            </li>
            
          </div>
        </div>
        <div class="onemonthonebox">
          <div class="monthboxsm">
            <div class="month">
              <span>4月</span><div class="daosj"></div>
            </div>
            <div class="sumcount">
              <div class="sum sm">支出 ￥49.90</div>
              <div class="sum xm">收入 ￥0.00</div>
            </div>
          </div>
          <div class="monthboxxm">
            <li class="monthitem">
                <div class="sjbox">
                  <img src="../../images/recharger.png" alt="">
                </div>
                <div class="billingdetails">
                  <p class="sjcz">手机充值</p>
                  <p class="txwl">通讯物流</p>
                  <p class="cztime">08-08 14：26</p>
                </div>
                <div class="bbigsum">
                  -49.90
                </div>
            </li>
            
          </div>
        </div>
    </div>
  </template>


  <script>
  import NavBar from "../../components/NavBar.vue"
  export default {
    data () {
      return {
        title:"话费充值记录",
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
      gotochooseadate(){
        this.$router.push({path:'/chooseadate'})
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
   .rechargerecord{
    padding-top: 40px;
    padding-bottom: 60px;
    overflow-x: hidden;
    min-height: calc(100vh-100px);
    background-color: rgba(245, 241, 241,0.6);
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
   .monthboxsm{
    display: flex;
    justify-content: space-between;
    padding: 2vh 5vw;
    background-color: rgba(245, 241, 241,0.6);
    color: rgb(158, 154, 154);
   }
   .month{
     background-color: #fff;
     border-radius: 20px;
     width: 20vw;
     height: 5.5vh;
     line-height: 5.5vh;
     padding-left: 3vw;
    position: relative;
   }
   .month>span{
     color: rgb(44, 43, 43);
   }
   .daosj{
    position: absolute;
    bottom: 2.5vh;
    right: 3vw;
    margin-right: 2.5vw;
    width: 0px;
    height: 0px;
    border-top: 1vw solid rgb(158, 154, 154);
    border-left: 1vw solid transparent;
    border-right: 1vw solid transparent;
   }
   .sum{
     text-align: right;
     font-size: 4vw;
   }
   .monthitem{
     display: flex;
     padding: 5vw;
     background-color: #fff;
   }
   .sjbox{
     width: 12vw;
     height: 12vw;
     padding: 2vw;
     background-color: #008000;
     border-radius: 50%;
     flex:0,0,12vw;
   }
   .sjbox>img{
     width: 100%;
     height: 100%;
   }
   .billingdetails{
     flex: 1;
     padding: 0 5vw;
    
   }
   .sjcz{
     font-size: 5vw;
     color: #000;
   }
   .txwl{
    color: #000;
   }
   .cztime{
    font-size: 4vw;
    color: rgb(158, 154, 154);
   }
   .bbigsum{
     font-size: 8vw;
   }
  </style>
