<template>
    <div class="addressBook">
      
      <ul class="list" ref='userlist'>
        <li class="souzm" v-for='(item,index) in listData' :key='index'>
          <ul>
            <li @click='gotoabout'>
              <div class="imgbigbox">
                  <div class="imgbox add"><img src="../images/add/addusers.png" alt=""></div>
              </div>
              <div class="name">新的朋友</div>
            </li>
            <li @click='gotowchet'>
              <div class="imgbigbox">
                  <div class="imgbox qun"><img src="../images/add/qun.png" alt=""></div>
              </div>
              <div class="name">群聊</div>
            </li>
            <li>
              <div class="imgbigbox">
                  <div class="imgbox xsbao"><img src="../images/add/txbao.png" alt=""></div>
              </div>
              <div class="name">实习宝小秘书</div>
            </li>
            <li @click='gotobook'>
              <div class="imgbigbox" >
                  <div class="imgbox tongxl"><img src="../images/add/tongxl.png" alt=""></div>
              </div>
              <div class="name">通讯录</div>
            </li>
            
          </ul>
        </li>

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
  ] 
  export default {
    data () {
      return {

        listData: userData,

      }
    },
    created () {
     
    },
    methods: {
      gotobook(){
        this.$router.push({path:'/book'})
      },
      gotoabout(){
        this.$router.push({path:'/about'})
      },
      gotowchet(){
        this.$router.push({path:'/wchet'})
      },

    },
    watch: {

    },
    mounted () {

    }
  }
  </script>
   
  <!-- Add 'scoped" attribute to limit CSS to this component only -->
  <style lang="scss" scoped>
   .addressBook{
    padding-top: 40px;
    padding-bottom: 60px;
    overflow-x: hidden;
    height: 100vh;
    background-color: #fff;
    box-sizing: border-box;
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
    padding: 0 0 0 3vw;
    background-color: #fff;
    display: flex;
    margin-top: 1vh;
   }
   .imgbigbox{
     width: 16vw;
     display: flex;
     justify-content:start;
     align-items: center;
   }
   .souzm li .imgbox{
     width: 10vw;
     height: 10vw;
     border-radius: 8px;
     padding: 1vw;
     box-sizing: border-box;
   }
   .souzm div img{
    width: 100%;
    height: 100%;
    border-radius: 8px;
   }
   .name{
    line-height: 11vw;
    font-size: 5vw;
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
   .add{
     background-color: #FF9933;
   }
   .qun{
     background-color: #38A45A;
   }
   .xsbao{
     background-color: #FF578C;
   }
   .tongxl{
     background-color: #1296db;
   }
  </style>
