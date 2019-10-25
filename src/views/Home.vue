<template>
  <div class="home">
    <!-- 顶部 Header 区域 -->
    <NavBar :title="title"></NavBar>


	<!-- 中间的 路由 router-view 区域 -->

		<keep-alive>
			<router-view></router-view>
		</keep-alive>

		



	<!-- 底部 Tabbar 区域 -->
	<div class="tabbar">
		<router-link to='/home/myhome' tag='div' class="tabbaritem">
			<div class="imgbox">
					<img :src="$router.currentRoute.path=='/home/myhome'?img0:img1" alt="">
			</div>
			<div class="tabbaritemt">首页</div>
		</router-link>
		<router-link to='/home/addressbook' tag='div' class="tabbaritem">
			<div class="imgbox">
					<img src="../images/news2.png" v-if="$router.currentRoute.path=='/home/addressbook'" alt="">
					<img src="../images/news1.png" v-else alt="">
			</div>
			<div class="tabbaritemt">消息</div>
		</router-link>
		<router-link to='/home/lookaround' tag='div' class="tabbaritem">
			<div class="imgbox">
				<img src="../images/location3.png" v-if="$router.currentRoute.path=='/home/lookaround'" alt="">
				<img src="../images/location1.png" v-else alt="">
			</div>
			<div class="tabbaritemt">附近的人</div>
		</router-link>
		<router-link to='/home/findfun' tag='div' class="tabbaritem">
			<div class="imgbox">
				<img :src="$router.currentRoute.path=='/home/findfun'?img4:img3" alt="">
			</div>
			<div class="tabbaritemt">发现</div>
		</router-link>
		<router-link to='/home/myself' tag='div' class="tabbaritem">
			<div class="imgbox">
					<img :src="$router.currentRoute.path=='/home/myself'?img6:img5" alt="">
			</div>
			<div class="tabbaritemt">我的</div>
		</router-link>
	</div>
    
  </div>
</template>

<script>

import NavBar from "../components/NavBar.vue"
export default {
	name: 'home',
	data() {
			return {
				title:"实习宝",
				router:'/home/myhome',
				active: 0,
				icon: {
					normal: '../images/hoem1.png',
					active: '../images/home2.png'
				},
				img1:require('../images/home1.png'),
				img0:require('../images/home2.png'),
				img3:require('../images/findfun1.png'),
				img4:require('../images/findfun2.png'),
				img5:require('../images/myself1.png'),
				img6:require('../images/myself2.png'),
		}
	},
	components: {
			NavBar
	},
	created () {
    },
	methods: {

    },

}
</script>
<style scoped>
	.tabbar{
	position: fixed;
    bottom: 0;
    left: 0;
	z-index: 1;
	display: flex;
    width: 100%;

    background-color: #fff;
	}
	.tabbaritem{
		flex: 0.2;
		padding: 1vh 0;
	}
	.imgbox{
		display: flex;
		justify-content: center;
	}
	.imgbox>img{
		width: 30px;
		height: 30px;
	}
	.tabbaritemt{
		text-align: center;
	}
	.router-link-active{
		color: #124B91;
	}
</style>