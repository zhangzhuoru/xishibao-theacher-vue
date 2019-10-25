<template>
    <div class="duidance">
        <div class="fback" @click='gotomyhome'>
          <img src="../../images/fback.png" alt="">
        </div>
         <!-- 顶部 Header 区域 -->
        <NavBar :title="title"></NavBar>

        <div class="dailylist">
          <li class="dailylistitem" v-for='items in student' :key='items.id'>
            <div class="dailylistsm">
                <van-notice-bar 
                color="#999"
                background="#ffffff"
                :scrollable="false"
                >
                    {{items.name}}
                  </van-notice-bar>
            </div>
            <div class="dailylistxm">
              <div class="who">
                <span>发布日期：{{items.time}} </span>
                <span>来自：{{items.who}}</span>
                 
              </div>
              <div class="tipthey" @click='gotosendnoticedetail(items)'>查看详情</div>
            </div>
          </li>
        </div>

               
        <div class="logoout"  @click='gotosendnotice'>
            <img src="../../images/fun/add.png" >
        </div>

        
    </div>
  </template>


  <script>
  import NavBar from "../../components/NavBar.vue"
  export default {
    data () {
      return {
        title:"通知公告",
        student:[
          {id:'1',name:'华南师范大学 “不忘初心、牢记使命”主题教育 工作动态',who:'梁老师',time:'9-22',tip:'学校为进一步推动主题教育深入开展，将10月作为“主题教育学习月”，制订完善主题教育学习研讨、调查研究、检视问题和整改落实等配套工作方案，进一步明确主题教育行动指南；广泛开展“四个一”活动，激发“比学赶帮”热情；在不同层面召开多场座谈会，对学校领导班子和学校事业发展征求意见和建议等。二级党组织按照学校党委要求，结合本单位实际，纷纷开展理论学习会、征求意见座谈会、主题教育交流会等多形式主题教育活动。学校强调树立特色意识、创新意识和品牌意识，以特色化方式落实“规定动作”，主题教育具有鲜明的“华师特色”。'},
          {id:'2',name:'计算机学院获批设立软件工程博士后科研流动站',who:'陈老师',time:'9-20',tip:'近日，人力资源社会保障部、全国博士后管委会联合下发《人力资源社会保障部 全国博士后管委会关于批准新设湖南大学哲学等339个博士后科研流动站的通知》（人社部发〔2019〕105号），我校计算机学院申报的软件工程一级学科获批设立博士后科研流动站。'},
          {id:'3',name:'华南先进光电子研究院邀请海外学者做客“勷勤论坛”',who:'王老师',time:'9-9',tip:'9月9日下午，由华南先进光电子研究院主办的学校第十二届“勷勤论坛”华电分论坛，在大学城校区理五栋举行2场学术报告。分论坛的主题为“品学术风采，探科创真谛”。主讲人为新加坡国立大学陈景升副教授和欧阳建勇副教授。'},
          {id:'4',name:'《中国教育报》高度肯定我校研究生思政工作，全文为“学习强国”平台转载',who:'张老师',time:'09-10',tip:'10月8日，《中国教育报》基层新闻版头条以《华南师大：建好研究生思政立体网——网络思政全覆盖 科研育人齐步走 深入实践觅真知》为题对我校研究生思政工作进行了报道，高度肯定和评价我校研究生思政工作创新和亮点，随后，中宣部“学习强国”平台以经验典型全文转载了该篇报道。'},
          {id:'5',name:'2019年全省中小学党组织书记培训示范班在我校举行开班典礼',who:'陈老师',time:'09-01',tip:'华南师范大学哲学与社会发展学院受广东省教育工委组织处的委托承办广东省中小学党组织书记培训示范班项目。此培训示范班于10月9日上午举行了开班典礼。省教育工委组织处副处长叶祝秋、省中小学教师发展中心副主任黄道鸣、教务处副处长赵艺、哲学与社会发展学院党委书记谭俊生、院长胡泽洪、专家组代表罗长青主任出席了开班典礼。'},
          {id:'6',name:'学习习近平的治国理论，大力推进文明校园建设',who:'徐老师',time:'8-22',tip:'可怜身上衣正单，心忧炭贱愿天寒,华南师大老教授协会在石牌校区“人文社会科学高等研究院”学术会议厅举办本年度论坛活动，主题为“学习习近平的治国理论，为建设高水平师范大学，大力推进文明校园建设”。参加论坛的会员和名誉会长、顾问等近60人。我校副校长沈文淮、副校长何景陶，党委宣传部、统战部副部长华维勇，校离退办主任石丽红、副主任谢红苗等领导出席会议。'},
          {id:'7',name:'美术学院师生在各地为祖国庆生',who:'徐老师',time:'8-8',tip:'笔端绘山河，讴歌新时代。在中华人民共和国成立70周年之际，美术学院师生在世界各地为祖国庆生。'},
        ]
      }
    },
    created () {
     
    },
    components: {
			NavBar
	  },
    methods: {
      gotomyhome(){
        this.$router.push({path:'/home/myhome'})
      },
     
      gotosendnotice(){
        this.$router.push({path:'/sendnotice'})
      },
      gotosendnoticedetail(a){
        this.$router.push({
					path: "/sendnoticedetail",
					query: {
						message: a
					}
				});
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
   .duidance{
    padding-top: 40px;
    padding-bottom: 60px;
    overflow-x: hidden;
    min-height: calc(100vh-100px);
    background-color: #fff;
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
   .van-tabsqd{
     width: 100vw;
   }

   .dailylistsm /deep/ .van-notice-bar {
      height: 100%;
      padding-left:0;
      font-size: 6vw;
      color: #000!important;
  }
   
  .dailylist{
    padding: 2vh 5vw;
  }
  .dailylistitem{
    padding: 2vh 0;
    border-bottom: 1px solid #DFDFDF;
    list-style: none;
  }
  .dailylistsm{
    width: 100%;
  }
  .dailylistsm>.listl{
    font-size: 6vw;
    font-weight: 600;
    height: 6vh;
    line-height: 6vh;
  }
  .dailylistsm>.listr>p{
    font-size: 4vw;
    margin: 0;
  }
  .dailylistxm{
    margin-top: 1vh;
    display: flex;
    
  }
  .tipthey{
    flex: 0,0,25vw;
    width: 25vw;
    color: #26A2FF;
    font-size: 5vw;
    text-align: right;
  }
  .who{
    flex: 1;
    display: flex;
    justify-content: space-between;
  }
  </style>
