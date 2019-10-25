<template>
  <div class="wchet">
    <div class="fback" @click='gotoaddressbook'>
      <img src="../../images/fback.png" alt="">
    </div>
    <!-- 顶部 Header 区域 -->
    <NavBar :title="title"></NavBar>
    <div id="container">

      <ul class="content" id="chewbox">
          <li v-for='item in msg' >
            <div class="time">{{item.time}}</div>
            <img :src="item.img" :class="[item.name==user.name ? 'imgright':'imgleft']"alt="">
            
            <span :class="[item.name==user.name ? 'spanright':'spanleft']">{{item.msg}}</span>
          </li>
      </ul>

      
    </div>
    <div class="footer">
        <div class="icon">
          <img src="../../images/touxiang.jpg" alt="">
        </div>
        <div class="inputbox">
            <input id="text" v-model='value' type="text" @keyup.enter='sendmsg'placeholder="说点什么吧...">
        </div>
        <span id="btn" @click='sendmsg'>发送</span>
      </div>
  </div>
</template>
<script>
  import tx1 from "@/assets/touxiang.jpg"
  import tx2 from "@/assets/touxiang2.jpg"
  import tx3 from "@/images/touxiang2.jpeg"
  import NavBar from "../../components/NavBar.vue"
  export default {
    data() {
      return {
        title: "计算机系11-1",
        value:'',
        user:{
          name:'李老师'
        },
        rule:0,
        msg:[
          {name:'李老师',msg:'有人在吗在？',img:require('@/assets/touxiang.jpg'),time:'9:30'},
          {name:'小张',msg:'在的，遇到什么事了吗',img:tx2,time:'9:30'},
          {name:'李老师',msg:'想问问周记是一周两篇吗',img:tx1,time:'11:30'},
          {name:'小李',msg:'你喜欢洛，随便写',img:tx3,time:'12:30'},
          {name:'小朋友',msg:'别听他的，一周一篇',img:tx2,time:'13:30'},
          {name:'李老师',msg:'好的，谢谢',img:tx1,time:'18:30'},
          ]
      }
    },
    created() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    components: {
      NavBar
    },
    methods: {
      sendmsg(){
        let msg = {name:'李老师',msg:this.value,img:tx1,time:'18:30'}
        let msg1 = {name:'你好剑',msg:'你这个磨人的小妖精',img:tx2,time:'18:30'}
        let msg2 = {name:'你好剑',msg:'你还骄傲起来了',img:tx2,time:'18:30'}
        this.msg.push(msg)
        if(this.value=='呵呵'){
          this.rule=1
        }
        else if(this.value=='一般一般'){
          this.rule=2
        }
        else{
          this.rule=0
        }
        console.log(this.rule)
        setTimeout(()=> {
          if(this.rule==1){
            this.msg.push(msg1)
            this.gotobuttom()
          }
          if(this.rule==2){
            this.msg.push(msg2)
            this.gotobuttom()
          }
        },1000)
        this.value=''
        this.gotobuttom()
      },
      gotobuttom(){
        this.$nextTick(() => {
        let msg = document.getElementById('chewbox') // 获取对象
        msg.scrollTop = msg.scrollHeight // 滚动高度
        })
      },
      latemsg(){
        setTimeout(function (){
          if(this.value=='呵呵'){
          this.msg.push(msg1)
          }
        },1)
        this.$nextTick(() => {
        let msg = document.getElementById('chewbox') // 获取对象
        msg.scrollTop = msg.scrollHeight // 滚动高度
        console.log('1',msg)
        })
      },
      gotoaddressbook() {
        this.$router.push({ path: '/home/addressbook' })
      },
    },
    watch: {

    },
    mounted() {

    }
  }
</script>

<!-- Add 'scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  /* 浏览器滚动条设置 */
/* width */
::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
    background: rgb(255, 255, 255);
    border-radius: 8px;
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgb(201, 201, 202);
    border-radius: 8px;
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: rgb(162, 162, 163);
  }
/* 滚动条 */
  .wchet {
    padding-top: 40px;
    padding-bottom: 50px;
    overflow-x: hidden;
    box-sizing: border-box;
    height: 100vh;
    background-color: rgb(244, 249, 252);
  }
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    font-family: '微软雅黑'
  }

  #container {
    height: 100%;
    width: 100%;
  }
  .footer {
   position: fixed;
   bottom: 0;
   left: 0;
   display: flex;
   height: 50px;
   width: 100%;
   background-color: #eee;
  }

  .footer .inputbox {
    flex: 1;
    height: 38px;
    padding: 6px;
  }
  .footer .inputbox input{
    width: 100%;
    height: 100%;
    border: none;
    font-size: 16px;
    text-indent: 10px;
    border-radius: 6px;
  }
  .footer span {
    flex: 0,0,68px;
    width: 62px;
    height: 38px;
    background: #ccc;
    margin-top: 5px;
    margin-right: 6px;
    font-weight: 900;
    line-height: 38px;
    text-align: center;
    border-radius: 6px;
  }

  .footer span:hover {
    color: #777;
    background: #ddd;
  }

  .icon {
    flex: 0,0,50px;
    width: 40px;
    height: 40px;
    padding: 5px;
    border-radius: 50%;
    overflow: hidden;
  }
  .icon>img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  .content {
    font-size: 20px;
    overflow-x: hidden;
    width: 100%;
    height: 100%;
    background-color: #fff;
    position: relative;
  }

  .content li {
    margin-top: 10px;
    padding:0 10px;
    width: 100%;
    box-sizing: border-box;
    display: block;
    clear: both;
    overflow: hidden;
  }

  .content li img {
    float: left;
    width: 60px;
    height: 60px;
    background-size: cover;
    border-radius: 8px;
  }

  .content li span {
    background: #7cfc00;
    padding: 10px;
    border-radius: 10px;
    float: left;
    margin: 6px 10px 0 10px;
    max-width: 310px;
    border: 1px solid #ccc;
    box-shadow: 0 0 3px #ccc;
  }

  .content li .imgleft {
    float: left;
    
  }

  .content li .imgright {
    float: right;

  }

  .content li span.spanleft {
    float: left;
    background: #fff;
  }

  .content li span.spanright {
    float: right;
    background: #7cfc00;
  }
  .time{
    text-align: center;
    font-size: 12px;
  }
</style>