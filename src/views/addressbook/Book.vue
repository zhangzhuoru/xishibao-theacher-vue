<template>
    <div class="addressBook">
      <div class="fback" @click='gotoaddressbook'>
        <img src="../../images/fback.png" alt="">
      </div>
        <!-- 顶部 Header 区域 -->
      <NavBar :title="title"></NavBar>
      <ul class="list" ref='userlist'>
        <li class="souzm" v-for='(item,index) in listData' :key='index'>
          <p>{{item.index}}</p>
          <ul>
            <li  v-for='(user,indexs) in item.users' :key='indexs'>
              <div class="imgbox"><img src="../../images/tonggao3.jpg" alt=""></div>
              <div class="name">{{user.name}}</div>
            </li>
            
          </ul>
        </li>

      </ul>
      <ul class="keyword">
        <li v-for='(items,indexss) in listData' :key='indexss' @touchstart='setScroll'>{{items.index}}</li>
      </ul>
    </div>
  </template>
  <script>
  var userData = [
    {'index':"#","users":[
      {"name":"#1","tell":"新的朋友"},
      {"name":"#2","tell":"群聊"},
      {"name":"#3","tell":"实习宝小秘书"},
      {"name":"#4","tell":"用户消息列表"},
    ]},
    {'index':"A","users":[
      {"name":"a1","tell":"13011111111"},
      {"name":"a2","tell":"13011111112"},
      {"name":"a3","tell":"13011111113"},
    ]},
    {'index':"B","users":[
      {"name":"b1","tell":"13011111122"},
      {"name":"b2","tell":"13011111132"},
      {"name":"b3","tell":"13011111143"},
    ]},
    {'index':"C","users":[
      {"name":"c1","tell":"13011111111"},
      {"name":"c2","tell":"13011111112"},
      {"name":"c3","tell":"13011111113"},
    ]},
    {'index':"D","users":[
      {"name":"d1","tell":"13011111111"},
      {"name":"d2","tell":"13011111112"},
      {"name":"d3","tell":"13011111113"},
    ]},
    {'index':"E","users":[
      {"name":"e1","tell":"13011111111"},
      {"name":"e2","tell":"13011111112"},
      {"name":"e3","tell":"13011111113"},
    ]},
  ] 
  import NavBar from "../../components/NavBar.vue"
  export default {
    data () {
      return {
        title:"通讯录",
        value:'',
        scroll: '',
        isFilter: false,
        customTypeSelect: -1,
        hTypeSelect: -1,
        listData: userData,
        listFirstPinyin: [
   
        ],
        searchData: {
          salesmanName: ''
        }
      }
    },
    created () {
     
    },
    components: {
			NavBar
	  },
    methods: {
      setScroll(ev){
        var allp = this.$refs.userlist.getElementsByTagName('p');
        console.log('sss',this.$refs.userlist,allp)
        for(var i=0;i<allp.length;i++){
          if(allp[i].innerHTML == ev.target.innerHTML){
            console.log('sss',i)
            document.documentElement.scrollTop = allp[i].offsetTop-40;
            console.log('sss',allp[i].offsetTop)
          }
        }
      },
      gotoaddressbook(){
        this.$router.push({path:'/home/addressbook'})
      },
    },
    watch: {
      scroll: function () {
        this.loadSroll()
      }
    },
    mounted () {
      window.addEventListener('scroll', this.dataScroll)
    }
  }
  </script>
   
  <!-- Add 'scoped" attribute to limit CSS to this component only -->
  <style lang="scss" scoped>
   .addressBook{
    padding-top: 40px;
    overflow-x: hidden;
    box-sizing: border-box;
    height: 100vh;
    background-color: rgb(244, 249, 252);
   }

   .souzm p{
     background-color: rgb(228, 226, 226);
     margin: 0;
     height: 30px;
     line-height: 30px;
     color: rgb(134, 134, 134);
     padding: 0 4vw;
     font-size: 5vw;
   }
   .souzm ul li{
    height: 15vw;
     line-height: 15vw;
     padding: 0 0 0 4vw;
     background-color: #fff;
     display: flex;
   }
   .souzm li .imgbox{
     height: 15vw;
     width: 20vw;
   }
   .souzm div img{
    width: 13vw;
    height: 13vw;
    margin-top: 1vw;
    border-radius: 15%;
   }
   .name{

     width: 100%;
     border-bottom: 1px solid rgb(218, 218, 218);
   }
   .keyword{
     position: fixed;
     right: 10px;
     top:50%;
     font-size: 20px;
     
     transform:  translate(0,-50%);
   }
   .keyword li{
     margin: 1vh 0;
     font-weight: 200;
     color: #000;
     font-size: 3vh;
   }
  </style>
