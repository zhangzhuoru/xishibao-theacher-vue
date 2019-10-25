<template>
    <div class="lookaround">
      <div class="ditubox">
          <img src="../images/ditu.jpg"  alt="">
      </div>
      <div class="hintbox">
          <img src="../images/dingwei.png" alt="" class="locationicon">
          <div class="hint">天河区五山路248号金山大厦南塔19层1901室</div>
      </div>
      <ul class="lookAroundPeople">
        <li  v-for='(student,indexs) in students' :key='indexs'>
          <div class="imgbox"><img src="../images/tonggao3.jpg" alt=""></div>
          <div class="studentabout">
            <div class="studentname">{{student.name}}</div>
            <div class="sabout">{{student.job}}</div>
          </div>
        </li>
        
      </ul>
    </div>
  </template>
  <script>
 
  export default {
    data () {
      return {
        students:[
          {name:'王军',job:'广东恒电信息科技股份有限公司'},
          {name:'李子丰',job:'广东恒电信息科技股份有限公司'},
          {name:'梁祖茂',job:'广东恒电信息科技股份有限公司'},
        ]
      }
    },
    created () {
     
    },
    methods: {
     

    },
    watch: {

    },
    mounted () {
     
    }
  }
  </script>
   
  <!-- Add 'scoped" attribute to limit CSS to this component only -->
  <style lang="scss" scoped>
   .lookaround{
    padding-top: 40px;
    padding-bottom: 60px;
    overflow-x: hidden;
    min-height: calc(100vh-100px);
    background-color: #fff;
   }
   .ditubox{
     width: 100%;
     height: 40vh;
   }
   .ditubox>img{
     width: 100%;
     height: 100%;
   }
   .hintbox{
     display: flex;
     background-color: #CCFFFF;
   }
   .locationicon{
     flex:0,0,32px;
     width: 26px;
     height: 26px;
     padding:5px 0 2px 6px;
   }
   .hint{
    flex: 1;
    line-height: 32px;
    height: 32px;
    white-space:nowrap;  
    overflow:hidden; 
    text-overflow:ellipsis;
   }
   .lookAroundPeople li{
     height: 15vw;
     padding: 0 0 0 4vw;
     background-color: #fff;
     display: flex;
     margin-top: 2vw;
   }
   .lookAroundPeople li .imgbox{
     height: 15vw;
     width: 20vw;
   }
   .lookAroundPeople div img{
    width: 13vw;
    height: 13vw;
    margin-top: 1vw;
    border-radius: 15%;
   }
   .lookAroundPeople .studentabout{
    width: 100%;
    border-bottom: 1px solid rgb(218, 218, 218);
    }
    .studentabout .studentname{
      margin-top: 2vw;
    }
    .studentabout .sabout{
      color: gray;
      font-size: 4vw;
    }
  </style>
