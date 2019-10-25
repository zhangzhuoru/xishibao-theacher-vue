<template>
  <div class="myhome">
    <van-notice-bar
      color="#1989fa"
      background="#ecf9ff"
      left-icon="info-o"
    >
      <span>最新消息</span>

    </van-notice-bar>
    <div class="bianjiaoliao">
      <div class="tongzhi" @click='gotonotice'>
        <div class="tongzhiicon">
          <img src="../images/home/tonggao.png" alt="">
        </div>
        <div class="tongzhiall">
          通知公告
        </div>
      </div>
      <div class="tongzhi" @click='gotosignin'>
        <div class="tongzhiicon">
          <img src="../images/home/wenjian.png" alt="">
        </div>
        <div class="tongzhiall">
            今日情况
        </div>
      </div>
      <div class="tongzhi" @click='gotosignindetail'>
        <div class="tongzhiicon">
          <img src="../images/home/baobiao.png" alt="">
        </div>
        <div class="tongzhiall">
            报表
        </div>
      </div>
      <div class="tongzhi" @click='gotowaiting'>
        <div class="tongzhiicon">
          <img src="../images/home/dcwenjuan.png" alt="">
        </div>
        <div class="tongzhiall">
            待办事项
        </div>
      </div>
      
    </div>

    <!-- 实习管理 -->
    <div class="shixsq">
      <div class="sxheard">
        实习管理
      </div>
      <div class="sxbox">
        <div class="sxitem" @click='gotopracticeaskfor'>
            <div class="lv tongzhiicon">
              <div class="imgtest1 imgall"></div>
            </div>
            <div class="tongzhiall">
              实习申请
            </div>
        </div>
        <div class="sxitem" @click='gotoleave'>
            <div class="lv tongzhiicon">
              <div class="imgtest2 imgall"></div>
            </div>
            <div class="tongzhiall">
              请假申请
            </div>
        </div>
        <div class="sxitem" @click='gotopracticeaskforend'>
            <div class="lv tongzhiicon">
              <div class="imgtest3 imgall"></div>
            </div>
            <div class="tongzhiall">
                结束申请
            </div>
        </div>
        <div class="sxitem" @click='gotoplan'>
            <div class="lv tongzhiicon">
              <div class="imgtest4 imgall"></div>
            </div>
            <div class="tongzhiall">
              实习安排
            </div>
        </div>
      </div>
    </div>
    <!-- 实习批阅 -->
    <div class="shixsq">
      <div class="sxheard">
        实习批阅
      </div>
      <div class="sxbox">
        <div class="sxitem" @click='gotodaily'>
            <div class="lv tongzhiicon">
              <div class="imgtest5 imgall"></div>
            </div>
            <div class="tongzhiall">
              日记批阅
            </div>
        </div>
        <div class="sxitem" @click='gotoweek'>
            <div class="lv tongzhiicon">
              <div class="imgtest6 imgall"></div>
            </div>
            <div class="tongzhiall">
               周记批阅
            </div>
        </div>
        <div class="sxitem" @click='gotomonth'>
            <div class="lv tongzhiicon">
              <div class="imgtest7 imgall"></div>
            </div>
            <div class="tongzhiall">
               月记批阅
            </div>
        </div>
        <div class="sxitem" @click='gotoscored'>
            <div class="lv tongzhiicon">
              <div class="imgtest8 imgall"></div>
            </div>
            <div class="tongzhiall">
                实习考评
            </div>
        </div>
      </div>
    </div>
    <!-- 工作记录 -->
    <div class="shixsq">
      <div class="sxheard">
        工作记录
      </div>
      <div class="sxbox">
        <div class="sxitem" @click='gotoduidance'>
            <div class="lv tongzhiicon">
              <div class="imgtest9 imgall"></div>
            </div>
            <div class="tongzhiall">
              指导记录
            </div>
        </div>
        <div class="sxitem" @click='gotoinvitation'>
            <div class="lv tongzhiicon">
              <div class="imgtest10 imgall"></div>
            </div>
            <div class="tongzhiall">
                邀请老师
            </div>
        </div>
        <div class="sxitem" @click='gotoweeksignIn'>
            <div class="lv tongzhiicon">
              <div class="imgtest11 imgall"></div>
            </div>
            <div class="tongzhiall">
              考勤周报
            </div>
        </div>
        <div class="sxitem" @click='gotoinsurance'>
            <div class="lv tongzhiicon">
              <div class="imgtest12 imgall"></div>
            </div>
            <div class="tongzhiall">
              全部保单
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'myhome',
  methods: {
    gotonotice(){
      this.$router.push({path:'/notice'})
    },
    gotosignin(){
      this.$router.push({path:'/signin'})
    },
    gotosignindetail(){
      this.$router.push({path:'/signindetail'})
    },
    gotodaily(){
      this.$router.push({path:'/daily'})
    },
    gotoweek(){
      this.$router.push({path:'/week'})
    },
    gotomonth(){
      this.$router.push({path:'/month'})
    },
    gotoduidance(){
      this.$router.push({path:'/duidance'})
    },
    gotopracticeaskfor(){
      this.$router.push({path:'/practiceaskfor'})
    },
    gotoscored(){
      this.$router.push({path:'/scored'})
    },
    gotopracticeaskforend(){
      this.$router.push({path:'/practiceaskforend'})
    },
    gotoplan(){
      this.$router.push({path:'/plan'})
    },
    gotowaiting(){
      this.$router.push({path:'/waiting'})
    },
    gotoleave(){
      this.$router.push({path:'/leave'})
    },
    gotoinvitation(){
      this.$router.push({path:'/invitation'})
    },
    gotoweeksignIn(){
      this.$router.push({path:'/weeksignIn'})
    },
    gotoinsurance(){
      this.$router.push({path:'/insurance'})
    },

  },
}
</script>

<style lang="scss" scoped>
.myhome{
  padding-top: 40px;
  padding-bottom: 60px;
  overflow-x: hidden;
  height: 100vh;
  background-color: #fff;
  box-sizing: border-box;
}

.lv{
  width: 100%;
  height: 100%;
  border-radius: 4px;
  display: flex;
  justify-content: center;
}
.bianjiaoliao{
  background-color: #fff;
  padding: 2vh 0;
  margin-top: 2vh;
  display: flex;
}
.shixsq{
  background-color: #fff;
  padding: 2vh 0;
  margin-top: 2vh;
}
.sxbox{
  display: flex;
}
.tongzhi,.sxitem{
  flex: 0,0,25%;
  width: 25%;
  display: flex;

  flex-direction: column;
  justify-content: center;
}
.tongzhiicon{
  display: flex;
  justify-content: center;
  margin-bottom: 1vh;
}
.tongzhiall{
  text-align: center;
  font-family: Microsoft Yahei;
  font-size: 4vw;
  color: #838384;
}
.imgall{
  width: 12vw;
  height: 12vw;
  border-radius: 4px;
}
.imgtest1{
  background: #FCA12E url(../images/fun/askfor.png) no-repeat center center;
}
.imgtest2{
  background: #5CC662 url(../images/home/qingjia.png) no-repeat center center;
}
.imgtest3{
  background: rgb(67, 187, 250) url(../images/home/over.png) no-repeat center center;
}
.imgtest4{
  background: #FF5846 url(../images/home/anpai.png) no-repeat center center;
}
.imgtest5{
  background: #34C094 url(../images/home/riji.png) no-repeat center center;
}
.imgtest6{
  background: #36CFEA url(../images/home/zouji.png) no-repeat center center;
}
.imgtest7{
  background: #F05A5C url(../images/home/yueji.png) no-repeat center center;
}
.imgtest8{
  background: #FEA22F url(../images/home/fenshu.png) no-repeat center center;
}
.imgtest9{
  background: #65DBEF url(../images/fun/guidance.png) no-repeat center center;
}
.imgtest10{
  background: #28D375 url(../images/home/biangeng.png) no-repeat center center;
}
.imgtest11{
  background: #FEA22F url(../images/home/kaoqing.png) no-repeat center center;
}
.imgtest12{
  background: #FF6666 url(../images/home/baoxian.png) no-repeat center center;
}
.sxheard{
  font-size: 5vw;
  margin-bottom: 2vh;
  font-weight: 800;
  padding-left: 4vw;
}
</style>