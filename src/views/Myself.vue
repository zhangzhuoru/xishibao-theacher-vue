<template>
  <div class="myself">
    <img class="user-poster" src="https://img.yzcdn.cn/public_files/2017/10/23/8690bb321356070e0b8c4404d087f8fd.png">
    <van-row class="user-links">
      <van-col span="6" @click='gotomoney'>
        <van-icon name="pending-payment" />
        余额
      </van-col>
      <van-col span="6">
        <van-icon name="records" />
        全部通话
      </van-col>
      <van-col span="6" @click='gototelephonecharge'>
        <van-icon name="tosend" />
        充值
      </van-col>
      <van-col span="6" @click='gotorechargerecord'>
        <van-icon name="logistics" />
        充值记录
      </van-col>
    </van-row>

    <van-cell-group class="user-group">
      <van-cell icon="points" title="个人信息管理" is-link @click='gotoeditordata'/>
      <van-cell icon="gift-o" title="修改密码" is-link @click='gotochangepassword'/>
      <van-cell icon="gold-coin-o" title="地图下载" is-link @click='download'/>

    </van-cell-group>

    <van-cell-group>
      <van-cell icon="gift-o" title="黑名单" is-link @click='blackname'/>
      <van-cell icon="gift-o" title="关于我们" is-link @click='hdabout'/>
    </van-cell-group>
    <van-cell-group class="user-group" @click='goout'>
      <button class="but">退出登录</button>
    </van-cell-group>
  </div>
</template>

<script>
// @ is an alias to /src
import { Notify } from 'vant';
import { Toast } from 'vant';
import { Dialog } from 'vant';
export default {
  name: 'myself',
  data() {
			return {
        visible:true
      }
  },
  created () {
      console.log(this.$router.currentRoute.path)
  },
  methods: {
    gototelephonecharge(){
      this.$router.push({path:'/telephonecharge'})
    },
    gotorechargerecord(){
      this.$router.push({path:'/rechargerecord'})
    },
    gotomoney(){
      this.$router.push({path:'/money'})
    },
    gotochangepassword(){
      this.$router.push({path:'/changepassword'})
    },
    gotoeditordata(){
      this.$router.push({path:'/editordata'})
    },
    download(){
      Dialog.confirm({
        message: '是否下载离线地图'
      }).then(() => {
        const toast = Toast.loading({
        duration: 0,       // 持续展示 toast
        forbidClick: true, // 禁用背景点击
        loadingType: 'spinner',
        message: '网络错误'
      });

      let second = 3;
      const timer = setInterval(() => {
        second--;
        if (second) {
          toast.message = `即将关闭 ${second} 秒`;
        } else {
          clearInterval(timer);
          Toast.clear();
        }
      }, 1000);
      }).catch(() => {
        // on cancel
      });


      Notify({ type: 'primary',className:'moretoll', message: `还未写入待办详情，请继续` });
    },
    blackname(){
      Dialog.confirm({
        message: '你暂无黑名单，是否要添加'
      }).then(() => {
        // on confirm
      }).catch(() => {
        // on cancel
      });
    },
    goout(){
      this.$router.push({path:'/'})
    },
    hdabout(){
      this.$router.push({path:'/hdabout'})
    }
  },

}
</script>

<style lang="scss" scoped>
.myself{
  padding-top: 40px;
  padding-bottom: 60px;
  overflow-x: hidden;
  min-height: calc(100vh-100px);
  background-color: #fff;
}
.user-poster {
    width: 100%;
    height: 53vw;
    display: block;
    margin-bottom: 15px;
  }
  .user-group {
    margin-bottom: 15px;
  }
  .user-links {
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background-color: #fff;
  }
    .van-icon {
      display: block;
      font-size: 24px;
    }
  

.but{
  height: 6vh;
  width: 100%;
  background-color: #fff;
  color: red;
  border: none;
  font-size: 14px;
}
</style>