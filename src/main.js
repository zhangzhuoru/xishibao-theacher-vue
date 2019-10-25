import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '../public/css/gloabel.css';
import '../public/css/deep.css';

// 全局导入 Mint-UI 中的组件   
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);

//导入Vant 所有组件

import Vant from 'vant';
import 'vant/lib/index.css';



Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
