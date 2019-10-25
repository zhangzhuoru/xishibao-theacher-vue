<template>
    <div class="signin">
        <div class="fback" @click='gotomyhome'>
          <img src="../../images/fback.png" alt="">
        </div>
         <!-- 顶部 Header 区域 -->
        <NavBar :title="title"></NavBar>
        <div class="van-tabsqd">
           <div class="box">
              <div class="sbox">
                <div class="touxiangimg">
                  <img src="../../images/touxiang.jpg" alt="">
                </div>
                <span class="name">李老师</span>
              </div>
              <div class="zbox">
                  <div class="photobox">
                      <img src="../../images/youdu.png" alt="">
                  </div>
                  
              </div>
              <div class="span">扫一扫上面的二维码，加入实习宝</div>

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
        title:"邀请老师",
        
      }
    },
    created () {
     
    },
    components: {
			NavBar
	  },
    methods: {
      gotomyhome(){
        this.$router.go(-1)
      },
      text() {
      return this.currentRate.toFixed(0) + '%'
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
   .signin{
    padding-top: 40px;
    overflow-x: hidden;
    background-color: #eee;
    min-height: 95vh;
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
   .van-tabsqd{
     width: 100vw;
     height: 80vh;
     display: flex;
     justify-content: center;
     align-items: center;
   }
   .van-tabsqd>.box{
     width: 90vw;
     height: 90vw;
     padding: 2vw;
     background-color: #fff;
     border-radius: 8px;
     box-shadow: -1px 7px 22px #b4b3b3;
     overflow: hidden;
   }
   .sbox{
    overflow: hidden;
   }
   .touxiangimg{
     float: left;
     width: 15vw;
     height: 15vw;
   }
   .touxiangimg>img{
     width: 100%;
     height: 100%;
     border-radius: 8px;
   }
   .sbox>.name{
     float: left;
     margin-left: 3vw;
     margin-top: 1vh;
   }
   .zbox{
     margin-top: 1vw;
     display: flex;
     justify-content: center;
   }
   .photobox{
    width: 60vw;
    height: 60vw;
   }
   .photobox>img{
    width: 100%;
    height: 100%;
   }
   .span{
     text-align: center;
   }
  </style>
