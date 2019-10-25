<template>
    <div class="plan">
      <div class="fback" @click='gotoscored'>
        <img src="../../images/fback.png" alt="">
      </div>
        <!-- 顶部 Header 区域 -->
      <NavBar :title="title"></NavBar>
      <div class="lable">
          <div class="form-group" style="position:relative;float:left;">
            <label for="state">实习项目:</label>
            <input readonly="readonly" class="pk-input -clean" placeholder="选择一个职位" :value="xm" @click='showChecken'><span class="pk-arrow -clean"></span></div>
          <div class="form-group margint" style="position:relative;float:left;">
            <label for="state">实习学生:</label>
            <input readonly="readonly" class="pk-input -clean" placeholder="选择一名学生" :value="xs" @click='showChecken2'><span class="pk-arrow -clean"></span></div>
            
      </div>
      
      
      <div class="fixend">
        <span class="nopass">取消</span>
        <span class="pass" @click='isok'>安排</span>
      </div>
      <div class="pk-overlay -show" v-if='show'></div>
      <div class="pk-modal -clean -show" v-if='show'>
        <div class="head">选择一个职位</div>
        <div class="pk-search"></div>
        <span class="close" @click='showChecken'>×</span>
        <ul class="main">
          <li class="pk-option  -clean" v-for='item in option1'@click='change(item.text)'><span class="txt">{{item.text}}</span></li>
        </ul>
      </div>
      <div class="pk-overlay -show" v-if='show2'></div>
      <div class="pk-modal -clean -show" v-if='show2'>
        <div class="head">选择一个职位</div>
        <div class="pk-search"></div>
        <span class="close" @click='showChecken'>×</span>
        <ul class="main">
          <li class="pk-option  -clean" v-for='item in student'@click='changename(item.name)'><span class="txt">{{item.name}}</span></li>
        </ul>
      </div>
  </div>
</template>


<script>
import { Dialog } from 'vant';
import NavBar from "../../components/NavBar.vue"
export default {
  data () {
    return {
      title:"安排",
      value1: 0,
      value2: 'a',
      show:false,
      show2:false,
      xm:'',
      xs:'',
      option1: [
        { text: '项目经理', value: 0 },
        { text: 'ui设计', value: 1 },
        { text: '前端开发工程师', value: 2 },
        { text: '安卓开发工程师', value: 3},
        { text: 'ios开发工程师', value: 4 },
        { text: '后台开发工程师', value: 5 },
        { text: '全栈开发工程师', value: 6 },
      ],
      student:[
          {id:'1',name:'梁祖茂',time:'2019-09-12'},
          {id:'2',name:'陈庆履',time:'2019-09-11'},
          {id:'3',name:'王军',time:'2019-08-12'},
          {id:'4',name:'张人仁',time:'2019-09-10'},
          {id:'5',name:'陈启涛',time:'2019-09-01'},
          {id:'6',name:'徐潘',time:'2019-09-12'},
        ]

    }
  },
  created () {
    
  },
  components: {
    NavBar
  },
  methods: {
    gotoscored(){
      this.$router.push({path:'/home/myhome'})
    },
    showChecken() {
      this.show = !this.show;
    },
    showChecken2() {
      this.show2 = !this.show2;
    },
    change(a){
      this.xm=a
      this.show = !this.show;
    },
    changename(a){
      this.xs=a
      this.show2 = !this.show2;
    },
      isok(){
        Dialog.alert({
            message: `成功安排${this.xm}的实习给${this.xs}`
          }).then(() => {
            this.$router.push({path:'/home/myhome'})
          });

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
.plan{
  padding-top: 40px;
  padding-bottom: 60px;
  overflow-x: hidden;
  min-height: calc(100vh-100px);
  background-color: #fff;
}
.lable{
  margin: 50px auto 0;
width: 300px;
min-height: 500px;
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

.fixend{
  position: fixed;
  bottom: 0;
  left: 0;
}
.nopass{
  display: inline-block;
  background-color: #fff;
  width: 50vw;
  height: 8vh;
  line-height: 8vh;
  text-align: center;
}
.pass{
  display: inline-block;
  background-color: #3399FF;
  color: #fff;
  width: 50vw;
  height: 8vh;
  line-height: 8vh;
  text-align: center;
}
.pingyubox{
  margin-top:2vh;
  padding: 5vw;
  background-color: #fff;
}
.form-group {
width: 100%;
float: left;
margin: 5px 0;
}
.margint{
  margin-top: 3vh;
}
label {
margin-bottom: 10px;
float: left;
}
select {
    width: calc(100% - 20px);
    float: left;
    padding: 10px;
    font-family: inherit;
}
.pk-input.-clean {
    background: #fff;
    border: 1px solid #eee;
    font: inherit;
}

.pk-input {
    width: calc(100% - 16px); 
    cursor: pointer;
    padding: 8px;
}
.pk-arrow.-clean {
    background: #eee;
    color: #aaa;
    height: 36px;
}



.pk-arrow {
    position: absolute;
    cursor: pointer;
    right: -2px;
    bottom: 0;
    text-align: center;
    width: 30px;
}
.pk-arrow::before {
    transform: rotate(90deg);
    font-size: 25px;
    position: relative;
    content: "›";
    float: left;
    margin: 9px 0px 0px 13px;
}
.pk-modal.-show {
    transform: translateX(-50%) scale(1,1);
    visibility: visible;
    opacity: 1;
    box-shadow: 1px 1px 20px 2px #888;
}

.pk-modal.-clean {
    background: #fff;
    border-bottom: 10px solid #efefef;
}

.pk-modal {
    transform: translateX(-50%) scale(0.8,0.8);
    left: 50%;
    top: 130px;
    border-radius: 3px;
    position: absolute;
    width: 280px;
    max-height: 90%;
    overflow-y: auto;
    z-index: 1111;
    transition: all .3s;
    visibility: hidden;
    background: #f2f2f2;
    opacity: 0;
}

* {
    padding: 0;
    margin: 0;
}
.pk-option.-clean {
    border-bottom: 1px solid #efefef;
}

.pk-option {
    cursor: pointer;
    padding: 14px 10px;
    border-bottom: 1px solid #efefef;
}
.pk-modal.-clean > .head {
    color: #777;
    background: #efefef;
}
.pk-modal > .head {
    font-size: 18px;
    padding: 20px 10px;
}
.pk-modal > .close {
    position: absolute;
    top: 18px;
    right: 15px;
    color: #ccc;
    font-size: 22px;
    cursor: pointer;
}
.pk-overlay.-show {
    opacity: 1;
    visibility: visible;
}

.pk-overlay {
    width: 100%;
    height: 100%;
    position: fixed;
    background: #666;
    background: rgba(0,0,0,0.4);
    top: 0;
    left: 0;
    opacity: 0;
    visibility: hidden;
    z-index: 1110;
    transition: opacity .3s;
}
.pk-option.-clean:hover {
    background: #f2f2f2;
}
</style>
