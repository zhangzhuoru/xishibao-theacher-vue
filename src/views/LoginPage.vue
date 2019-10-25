<template>
  <div class="centered-container">
    <!-- <el-main
      class="loading" 
      v-loading="loading"
      element-loading-text="请等待..."
      element-loading-spinner="el-icon-loading"
      element-loading-color="#fff"
      element-loading-background="rgba(0, 0, 0, 0)"
    ></el-main> -->
    <div class="wrapper">
      <div class="input_box">
        <div class="logo_box">
          <img src="../assets/logo.png">
        </div>
        <div class="henghua">实习宝</div>
        <!-- <div class="login_initialise" v-if="!loading && !initB" @click="initClick">初始化</div> -->
        <div class="login_enter_box">
          <div class="account_input">
            <input
              type="text"
              placeholder="请输入账号"
              @focus="tip = false"
              v-model="user.name"
              @keydown.enter="auth"
              autofocus
            >
            <img src="../assets/user.png" alt>
          </div>
          <div class="password_input">
            <input
              placeholder="请输入密码"
              v-model="user.password"
              @focus="tip = false"
              @keydown.enter="auth"
              type="password"
            >
            <img src="../assets/password.png" alt>
          </div>
          <div class="choose_box">
            <input type="checkbox">
            <span class="remember">记住我</span>
            <span class="forget" @click="resetPassword">忘记密码？</span>
          </div>
          <button class="login_btn" @click="auth">登 录</button>

        </div>
        <div class="incorrect" v-if="tip">{{message}}</div>
      </div>
      <div class="copyright">版权所有广东恒电信息科技股份有限公司</div>
    </div>
  </div>
</template>

<script>


export default {
  name: "login",
  data: () => ({
    initB: false,
    loading: false,
    message: null,
    user: {
      name: null,
      password: null
    },
    tip: false
  }),

  created: function() {
    this.loading = true;
    // this.init();
  },

  methods: {
    resetPassword() {
      this.message = "请联系管理员修改密码";
      this.tip = true;
    },
    auth() {
      //this.$router.push('/admin');
      if (!this.user.name) {
        this.$message({
          type: "warning",
          message: "请输入您的账号"
        });
        return false;
      }
      if (!this.user.password) {
        this.$message({
          type: "warning",
          message: "请输入您的密码"
        });
        return false;
      }
      this.tip = null;
      // let params = {
      //   name:this.user.name,
      //   password:this.user.password
      // };
      if(this.user.name == 't' && this.user.password == "123"){
        // 刷新：无
        this.$router.push({path:"/home"});
      }else if(this.user.name && this.user.password == "123"){
        this.$router.push({path:"/home"});
      } else{
        this.$router.push("/");
        this.tip = true;
        this.message = "账号或密码不正确，请重新登录";
        // this.$message({
        //   type:"waring",
        //   message:"账号或密码不正确，请重新登录"
        // })
      }
      /*
      else{
        this.$router.push("/");
        this.tip = true;
        this.message = "账号或密码不正确，请重新登录";
      }*/
    },
    
  }
};
</script>

<style lang="scss">
.loading {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.centered-container .el-icon-loading:before{
  color:#fff!important;
}

.el-loading-text{
  color:#ddd!important;
}

.centered-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: url("../assets/background.png");
  .wrapper {
    width: 300px;
    height: 100vh;
    min-height: 520px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-direction: column;
    padding-top: 12vh;
    box-sizing:border-box;
    .input_box {
      flex: 1;
      width: 100%;
      height: 100vh;
      .logo_box {
        width: 100%;
        img {
          width: 100px;
          height: 124px;
          margin: 0 0 0 50%;
          transform: translateX(-50%);
        }
      }
      .henghua {
        padding: 0;
        width: 100%;
        // height: 40px;
        line-height: 40px;
        font-size: 26px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 4px;
        color: #ffffff;
        text-align: center;
        margin-top: 2vh;
      }
      .account_input,
      .password_input {
        width: 100%;
        height: 34px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        input {
          width: 300px;
          height: 34px;
          background: #ffffff !important;
          border-radius: 7px;
          opacity: 0.7;
          border: none;
          padding-left: 5.2vw;
        }
        img {
          width: 20px;
          height: 20px;
          position: absolute;
          right: 4vw;
          top: 7px;
        }
      }

      .login_initialise {
        width: 100%;
        height: 40px;
        text-align: center;
        line-height: 40px;
        color: #fff;
        background-color: #1851ff;
        box-shadow: 0px 3px 13px 0px rgba(19, 80, 185, 0.35);
        border-radius: 7px;
        opacity: 0.7;
        font-family: MicrosoftYaHeiLight;
        font-size: 18px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 6px;
        margin-top: 18vh;
      }

      .account_input {
        margin-top: 8vh;
      }
      .password_input {
        margin-top: 3vh;
      }
      .choose_box {
        width: 100%;
        height: 1.68vh;
        margin-top: 6vh;
        input {
          width: 16px;
          height: 16px;
          float: left;
          border: none;
        }
        .remember,
        .forget {
          float: left;
          height: 18px;
          font-family: MicrosoftYaHeiLight;
          font-size: 1.4vh;
          font-weight: normal;
          font-stretch: normal;
          letter-spacing: 0;
          color: #cde3ff;
        }
        .remember {
          margin-left: 1vh;
        }
        .forget {
          float: right;
          margin-left: 2.06vh;
          cursor: pointer;
        }
      }
      .login_btn {
        width: 100%;
        height: 38px;
        background-color: #1851ff;
        box-shadow: 0px 3px 13px 0px rgba(19, 80, 185, 0.35);
        border-radius: 7px;
        opacity: 0.7;
        font-family: MicrosoftYaHeiLight;
        font-size: 18px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 6px;
        color: #ffffff;
        border: none;
        margin-top: 18px;
      }
      .login_tourist{
        color:rgb(65, 65, 250);
        font-size:14px;
        margin:4px 0 0 94px;
        cursor:pointer;
      }
    }
  }

  .incorrect {
        width: 100%;
        height: 2vh;
        font-family: AdobeHeitiStd-Regular;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 2vh;
        letter-spacing: 0;
        color: #ff0000;
        margin-top: 2vh;
        // position:absolute;
        // bottom:6vh;
        text-align: center;
      }

  .copyright {
    width: 100%;
    height: 3.74vh;
    font-family: AdobeHeitiStd-Regular;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 3.74vhpx;
    letter-spacing: 0;
    color: #24679c;
    text-align: center;
    position: flex;
    bottom: 20px;
  }
}
input::-webkit-input-placeholder {
  font-family: MicrosoftYaHeiLight;
  font-size: 1.6vh;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0;
  color: #5eacfe;
  margin-left: 2vw;
}

input:focus {
  outline: none;
  background-color: transparent;
}

@media screen and (max-width: 710px) {
  .copyright {
    color: #444 !important;
  }
  .login_btn {
    opacity: 1;
  }
}
</style>