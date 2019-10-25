<template>
  <div class="myself">

      <div class="tabs">
        <div class="left" :class="[target==1?'target':'']" @click="target = 1">动态</div>
        <div class="right" :class="[target==2?'target':'']" @click="target = 2">话题</div>
      </div>
      <ul class="leftd" v-if='target==1'>
          
          
          <div class="friendbox">
            <!-- 朋友圈头部 -->
            <div class="friendheard">
              <div class="touxiangbox">
                <div class="name">李老师</div>
                <div class="img">
                  <img src="../images/touxiang.jpg" alt="">
                </div>
              </div>
            </div>
            <!-- 朋友的新动态 -->
            <div class="news">
              <div class="ftitle">朋友的新动态</div>
              <div class="fright">
                <div class="imgbox">
                  <img src="../images/touxiang2.jpg" alt="">
                </div>
                <van-icon name="arrow" />
              </div>
            </div>
            <!-- 朋友的动态 -->
            <div class="zhuti">
              <li class="penyouquangone">
                <div class="touxiang">
                  <img src="../images/touxiang2.jpeg" alt="">
                </div>
                <div class="zhutidata">
                  <div class="name">李强</div>
                  <div class="ztitle">春雨落，黄金满地</div>
                  <div class="photo">
                    <img src="../images/fun/201703222229_9.jpg" alt="">
                  </div>
                  <div class="lastbox">
                      <div class="time">
                        1小时前
                      </div>
                      <div class="hide">
                        ··
                      </div>
                  </div>
                  
                </div>
                <div class="dianzan"></div>
              </li>
              <li class="penyouquangone">
                <div class="touxiang">
                  <img src="../images/touxiang2.jpg" alt="">
                </div>
                <div class="zhutidata">
                  <div class="name">王军</div>
                  <div class="ztitle">黄金满地了吗</div>
                  <div class="photo">
                    <img src="../images/touxiang.jpg" alt="">
                  </div>
                  <div class="lastbox">
                      <div class="time">
                        1小时前
                      </div>
                      <div class="hide">
                        ··
                      </div>
                  </div>
                  
                </div>
                <div class="dianzan"></div>
              </li>
              <li class="penyouquangone">
                <div class="touxiang">
                  <img src="../images/touxiang2.jpeg" alt="">
                </div>
                <div class="zhutidata">
                  <div class="name">李强</div>
                  <div class="ztitle">在陶园西侧的黄金大道，去向饭堂的路</div>
                  <div class="photo">
                    <img src="../images/fun/201703230855.jpg" alt="">
                  </div>
                  <div class="lastbox">
                      <div class="time">
                        2小时前
                      </div>
                      <div class="hide">
                        ··
                      </div>
                  </div>
                  
                </div>
                <div class="dianzan"></div>
              </li>
              <li class="penyouquangone">
                <div class="touxiang">
                  <img src="../images/touxiang2.jpeg" alt="">
                </div>
                <div class="zhutidata">
                  <div class="name">李强</div>
                  <div class="ztitle">美美哒</div>
                  <div class="photo">
                    <img src="../images/fun/201703230913_1.jpg" alt="">
                  </div>
                  <div class="lastbox">
                      <div class="time">
                        3小时前
                      </div>
                      <div class="hide">
                        ··
                      </div>
                  </div>
                  
                </div>
                <div class="dianzan"></div>
              </li>
            </div>
          </div>
      </ul>

      <ul class="righth" v-if='target==2'>
        <li class="flexr">
            <img src="../images/dongtai1.jpg" alt="">
            <div class="flexcol">
                <span>大佬跟你讲讲产品运营实习生生存经验</span>
                <div class="flexend">
                  <div class="time">2019-09-28</div>
                  <div class="reading">
                    阅读量 <span> 10029</span>
                  </div>
                </div>
            </div>
        </li>
        <li class="flexr">
            <img src="../images/tonggao2.jpg" alt="">
            <div class="flexcol">
                <span>高級技工的工賛已经高于许多大学生,技工岗位却无大学生</span>
                <div class="flexend">
                  <div class="time">2019-09-12</div>
                  <div class="reading">
                    阅读量 <span> 1029</span>
                  </div>
                </div>
            </div>
        </li>
        <li class="flexr">
          
            <img src="../images/tonggao3.jpg" alt="">
            <div class="flexcol">
                <span>会计专业找什么行业的公司工作发展前大?</span>
                <div class="flexend">
                  <div class="time">2019-09-08</div>
                  <div class="reading">
                    阅读量 <span> 3029</span>
                  </div>
                </div>
            </div>
        </li>
        <li class="flexr">
            <img src="../images/tonggao4.jpg" alt="">
            <div class="flexcol">
                <span>实习≠打杂,如何正确认识你的实习</span>
                <div class="flexend">
                  <div class="time">2019-08-19</div>
                  <div class="reading">
                    阅读量 <span> 429</span>
                  </div>
                </div>
            </div>
        </li>
        <li class="flexr">
            <img src="../images/tonggao5.jpg" alt="">
            <div class="flexcol">
                <span>任何成长,都需要持久而痛苦的自律</span>
                <div class="flexend">
                  <div class="time">2019-07-19</div>
                  <div class="reading">
                    阅读量 <span> 6029</span>
                  </div>
                </div>
            </div>
        </li>
        <li class="flexr">
            <img src="../images/fun/201703241007_1.jpg" alt="">
            <div class="flexcol">
                <span>办公室压力太大，要学会适当减压</span>
                <div class="flexend">
                  <div class="time">2019-03-19</div>
                  <div class="reading">
                    阅读量 <span> 10029</span>
                  </div>
                </div>
            </div>
        </li>
      </ul>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'myself',
  data() {
			return {
        target:1,
      }
  },
   methods: {
    onClick(name, title) {
      this.$toast(title);
    },

  }

}
</script>

<style lang="scss" scoped>
.myself{
  padding-top: 40px;
  padding-bottom: 60px;
  overflow-x: hidden;
  height: 100vh;
  background-color: #fff;
  box-sizing: border-box;
}
.tabs{
  margin:10px 0;
  display: flex;
  justify-content: center;
}
.left,.right{
  background-color: #fff;
  color: #000;
  width: 45%;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.left{
  border-radius: 10px 0 0 10px;
}
.right{
  border-radius: 0 10px 10px 0;
}
.target{
  background-color: #26a2ff;
  color: #fff;
}
.righth{
  padding: 0 5vw;
  background-color: #fff;
}
.leftd{
  background-color: #fff;
}
.flexr{
  display: flex;
  padding: 10px 0;
  border-bottom: 1px solid rgb(228, 228, 228);
}
.flexr >img{
  width: 35vw;
  height:25vw;
  flex:0 0 35vw;
  border-radius: 2vw;
  
}
.flexr >.flexcol{
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  padding-left: 2vw;
}
.flexcol >span{
  overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 2;
   -webkit-box-orient: vertical;
   font-size: 5vw;
   font-weight: 700;
}
.flexend{
  flex-basis: 100%;
  display: flex;
  justify-content: space-between;
}
.flexend>.time,.flexend>.reading{
  font-size: 4vw;
}
.flexend>.reading>span{
  color: orange;
}
.friendheard{
  width: 100%;
  height: 40vh;
  background: url(../images/money.png) no-repeat center center;
  position: relative;
}
.touxiangbox{
  position: absolute;
  right: 3vh;
  bottom: -3vh;
  overflow: hidden;
}
.touxiangbox>.img{
  width: 18vw;
  height: 18vw;
  float: right;
}
.touxiangbox>.name{
  color: #fff;
  font-size: 22px;
  float: left;
  height: 18vw;
  line-height: 18vw;
  margin-right: 2vw;
}
.touxiangbox>.img>img{
  width: 100%;
  height: 100%;
  border-radius: 8px;
}
.news{
  margin-top: 5vh;
  padding: 5vw;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ebedf0;
  border-top: 1px solid #ebedf0;
}
.fright>.imgbox{
  width: 5vw;
  height: 5vw;
  display: inline-block;
  margin-right: 3vw;
}
.fright>.imgbox>img{
  width: 100%;
  height: 100%;
  border-radius: 50% ;
}
.penyouquangone{
  padding: 3vw;
  border-bottom: 1px solid #ebedf0;
  display: flex;
}
.touxiang{
  flex: 0,0,11vw;
  width: 10vw;
  height: 10vw;
}
.touxiang>img{
  width: 100%;
  height: 100%;
  border-radius: 8px;
}
.zhutidata{
  flex: 1;
  padding-left: 2vw;
}
.zhutidata>.name{
  color: #4189c0;
}
.zhutidata>.lastbox{
  display: flex;
  justify-content: space-between;
  height: 5vw;
  line-height: 5vw;
}

.zhutidata>.lastbox>.time{
  color: #999;
  font-size: 14px;
  height: 5vw;
  line-height: 5vw;
}
.zhutidata>.lastbox>.hide {
  font-size: 20px;
  height: 5vw;
  line-height: 3vw;
  padding: 1vw 2vw;
  background-color: rgb(228, 228, 228);
  border-radius: 4px;
}
.photo{
  max-width: 50vw;
}
.photo>img{
  width: 100%;
  height: 100%;
}
</style>