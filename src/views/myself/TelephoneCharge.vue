<template>
    <div class="telephonecharge">
      <div class="fback" @click='gotomyself'>
        <img src="../../images/fback.png" alt="">
      </div>
      <!-- 顶部 Header 区域 -->
      <NavBar :title="title"></NavBar>
        <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item>
              <div class="imgbox">
                  <img src="../../images/logo1.jpg" alt="">
              </div>
            </van-swipe-item>
            <van-swipe-item>
                <div class="imgbox">
                    <img src="../../images/logo2.jpg" alt="">
                </div>
            </van-swipe-item>
            <van-swipe-item>
                <div class="imgbox">
                    <img src="../../images/logo3.jpg" alt="">
                </div>
            </van-swipe-item>
          </van-swipe>
          <van-notice-bar
            style="margin-top:1vh;height: 3.5vh;"
            color="RGB（47,50,51）"
            background="RGB（232,217,117）"
            left-icon="volume-o"
          >
            月初月末运营商维护，部分地区到账延迟，请谅解~
          </van-notice-bar>
          <div class="telephonebox">
            <div class="telephone" style="margin-top:1vh" ref='teleinput'>
                <input type="number" class="inputn" placeholder="请输入手机号码" v-model='telephone' @focus='setture' @blur='setfales'>
                <div class="rightbox">
                  <div class="lx" @click='setinput'><img src="../../images/x.png" alt=""v-show='lxshow'></div>
                  <div class="rm"><img src="../../images/users.png" alt=""></div>
                </div>
            </div>
            <div class="tip" >
              <span v-show='tipshow'>输入11位有效号码</span>
            </div>
          </div>
          <div class="choosepaymoney">
            <div class="choosetip">
              选择充值金额
            </div>
            <div class="cardbox">
              <div class="cards">
                <div class="cardssm">
                  <span class="bbig">30</span><span>元</span>
                </div>
                <div class="cardsxm">
                  售30.00元
                </div>
              </div>
              <div class="cards">
                <div class="cardssm">
                  <span class="bbig">50</span><span>元</span>
                </div>
                <div class="cardsxm">
                  售50.00元
                </div>
              </div>
              <div class="cards posr">
                <div class="posa">荐</div>
                <div class="cardssm">
                  <span class="bbig">100</span><span>元</span>
                </div>
                <div class="cardsxm">
                  售100.00元
                </div>
              </div>
              <div class="cards">
                <div class="cardssm">
                  <span class="bbig">300</span><span>元</span>
                </div>
                <div class="cardsxm">
                  售300.00元
                </div>
              </div>
            </div>
            <div class="choosetipx choosetip">
                更多功能
            </div>
            <div class="cardbox">
              <div class="cards">
                <div class="cardssm">
                  <span class="bbig">30</span><span>元</span>
                </div>
                <div class="cardsxm">
                  售30.00元
                </div>
              </div>
            </div>
          </div>

          
    </div>
  </template>
  <script>
  import NavBar from "../../components/NavBar.vue"
  export default {
    data () {
      return {
        title:"话费充值",
        telephone:17765603009,
        lxshow:false,
        tipshow:false
      }
    },
    created () {

    },
    components: {
			NavBar
	  },
    methods: {
      setinput(){
        this.telephone=null
        console.log('11111',22)
        var input = this.$refs.teleinput.getElementsByTagName('input');
        input[0].focus() 
      },
      setfales(){
        this.lxshow=false
      },
      setture(){
        this.lxshow=true
      },
      gotomyself(){
        this.$router.push({path:'/home/myself'})
      }
    },
    watch: {
       telephone(newName, oldName){
         if(newName){
          if(newName.length<11)this.tipshow=true
          if(newName.length==11)this.tipshow=false
          if(newName.length>11){
            this.telephone=oldName
            return
          }
         }
         
         
       }
    },
    mounted () {

    }
  }
  </script>
   

  <style lang="scss" scoped>
   .telephonecharge{
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
   .imgbox{
     width: 100%;
     height: 22vh;
   }
   .imgbox>img{
     width: 100%;
     height: 100%;
   }
   .telephone{
    display: flex;
    justify-content: space-between;
    height: 6vh;
    padding: 0 5vw 0 0;
   }
   .inputn{
     border:none;
     /* border-bottom: 1px solid rgb(199, 199, 199); */
     height: 6vh;
     line-height: 6vh;
     font-size: 5vh;
     font-weight: 700;
     width: 65vw;
     margin: 0;
     padding: 0;
   }
   ::-webkit-input-placeholder { /* WebKit browsers */
      color: #999;
      font-size: 3vh;
      line-height: 3vh;
      font-weight: 200;
    }

    ::-moz-placeholder { /* Mozilla Firefox 19+ */
      color: #999;
      font-size: 3vh;
      line-height: 3vh;
      font-weight: 200;
    }

    :-ms-input-placeholder { /* Internet Explorer 10+ */
      color: #999;
      font-size: 3vh;
      line-height:3vh;
      font-weight: 200;
    }   
    .rightbox{
      width: 22vw;
      display: flex;
      justify-content: space-between;
    }
    .lx{
      width: 2vw;
    }
    .tip{
      height: 3vh;
      width: 100%;
      background-color: #fff;
      padding-bottom: 4vh;
      border-bottom: 1px solid rgb(199, 199, 199); 
    }
    .tip > span{
      font-size: 3vw;
      color: #D96017;
      letter-spacing:2px;
    }
    .telephonebox{
      padding: 0 5vw;
      height: 8vh;
    }
    .choosepaymoney{
      margin-top: 5vh;
      padding: 0 0 0 5vw;
    }
    .choosetip{
      font-size: 3vw;
      color: rgb(182, 181, 181);
      letter-spacing:2px;
    }

    .cards{
      border: 1px solid #D96017;
      width: 32.5vw;
      display: inline-block;
      margin-right: 1vw;
      margin: 1.5vh 5vw 1.5vw 0;
      padding: 2vh;
      border-radius: 8px;
      color: #D96017;
      font-size:2.5vh;
    }
    .cardssm{
      margin-bottom: .5vh;
    }
    .bbig{
      font-size: 5vh;
    }
    .posr{
      position: relative;
    }
    .posa{
      position: absolute;
      background-color: #D96017;
      color: #fff;
      padding: 1vh;
      right: 0;
      top: 0;
      border-radius:0 4px;
    }
    .choosetipx{
      margin-top: 3vh;
    }
  </style>
