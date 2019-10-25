<template>
    <div class="chooseadate">
        <div class="fback" @click='gotomyself'>
          <img src="../../images/fback.png" alt="">
        </div>
         <!-- 顶部 Header 区域 -->
        <NavBar :title="title"></NavBar>
        <div class="chooseboxsm">
            <div class="choose">
              <span v-if='index==1'@click='index=2'>按日期选择</span><span v-if='index==2'@click='index=1'>按月选择</span><div class="daosj"><img src="../../images/choose.png" alt=""></div>
            </div>
            
        </div>
        <div class="chooseboxxm">
            <!-- <div>{{currentDate}}</div> -->
            <van-datetime-picker
            v-model="currentDate"
            type="date"
            :min-date="minDate"
            v-if='index==1'
            />
            <van-datetime-picker
              v-model="currentDate"
              type="year-month"
              :min-date="minDate"
              :formatter="formatter"
              v-if='index==2'
            />
        </div>
    </div>
  </template>


  <script>
  import NavBar from "../../components/NavBar.vue"
  export default {
    data () {
      return {
        title:"选择时间",
        index:1,
        minDate: new Date(),
        maxDate: new Date(2019, 10, 1),
        currentDate: new Date()
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
      formatter(type, value) {
        console.log('value',type,value)
        if (type === 'year') {
          console.log('value',type,value)
          return `${value}年`;
        } else if (type === 'month') {
          console.log('value',type,value)
          return `${value}月`
        }
        
        return value;
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
   .chooseadate{
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
   .chooseboxsm{
    display: flex;
    justify-content: space-between;
    padding: 2vh 5vw;
    background-color: rgba(245, 241, 241,0.6);
    color: rgb(158, 154, 154);
   }
   .choose{
     background-color: #fff;
     border-radius: 20px;
     width: 37vw;
     height: 5.5vh;
     line-height: 5.5vh;
     padding-left: 3vw;
    position: relative;
   }
   .choose>span{
     color: rgb(44, 43, 43);
   }
   .daosj{
    position: absolute;
    bottom: 2.5vh;
    right: 3vw;
    width: 5vw;
    height: 5vw;
   }
   .daosj>img{
     width: 100%;
     height: 100%;
   }
  </style>
