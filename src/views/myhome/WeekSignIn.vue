<template>
    <div class="weeksignIn">
        <div class="fback" @click='gotomyhome'>
          <img src="../../images/fback.png" alt="">
        </div>
         <!-- 顶部 Header 区域 -->
        <NavBar :title="title"></NavBar>
        <div class="cellbox" >
          <div class="cellrow posr">
            <div class="lable">组织机构</div>
            <div class="cellitem">
              <div class="item">华南师范学院</div>
            </div>
          </div>
        </div>
        <div class="cellbox">
            <div class="cellrow">
              <div class="lable">选择时间</div>
              <div class="cellitem">
                <div class="item">1999-10-01</div>
                <van-icon name="arrow" color='#26A2FF' @click="showPopup" />
              </div>
            </div>
        </div>
        <div class="auto">
            <van-circle
            v-model="currentRate"
            :rate="30"
            :speed="100"
            layer-color="#ebedf0"
            color='#FB9420'
            size="40vw"
             />
            <div class="jingdutip">
              <p class="tip1">30%</p>
              <p class="tip2">签到率</p>
            </div>
        </div>
        
        <div class="detail">
            <div class="detailbox" @click='gotosignindetail'>
              已签到：<span class="coloro">6人</span>
            </div>
            <div class="detailbox">
              未签到：<span class="coloro">20人</span>
            </div>
        </div>
        <div class="gotoauto" @click='gotosignindetail'>
          <div class="btngoto">
              查看详情
          </div>
        </div>
        <van-popup v-model="show" round>
          <div class="timebox">
              <van-datetime-picker
              v-model="currentDate"
              type="date"
              :min-date="minDate"
            />
          </div>
            
        </van-popup>
    </div>
  </template>


  <script>
  import { Notify } from 'vant';
  import NavBar from "../../components/NavBar.vue"
  export default {
    data () {
      return {
        title:"考勤周报",
        currentRate: 0,
        currentDate: new Date(),
        minDate: new Date(),
        show: false,
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
      text() {
      return this.currentRate.toFixed(0) + '%'
      },
      showPopup() {
        this.show = true;
      },
      gotosignindetail(){
        Notify({ type: 'primary',className:'moretoll', message: `还未写入周报详情，请继续` });
        this.$router.push({path:'/home/myhome'})
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
   .weeksignIn{
    padding-top: 40px;
    padding-bottom: 60px;
    overflow-x: hidden;
    min-height: calc(100vh-100px);
    background-color: #fff;
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
    .auto{
      margin-top: 5vh;
      display: flex;
      justify-content: center;
      position: relative;
    }
    .jingdutip{
      position: absolute;
      top:14vw;
      text-align: center;
    }
    .tip1{
      color: #FB9420;
      font-size: 5vw;
      margin: 0;
    }
    .tip2{
      color: #323233;
      margin: 0;
      font-size:3.5vw;
    }
    .detail{
      padding: 5vh 5vw 0;
      display: flex;
      justify-content: space-between;
      font-size: 4vw;
    }
    .detailbox{
      width: 35vw;
      border-bottom:2px solid #FB9420;
    }
    .coloro{
      color: #FB9420;
      font-size: 6vw;
    }
    .gotoauto{
      margin-top: 12vh;
      display: flex;
      justify-content:center;
    }
    .btngoto{
      padding: 5vw 10vw;
      background-color: #FB9420;
      color: #fff;
      border-radius: 8px;
    }
    .timebox{
      width: 80vw;
      
    }
  </style>
