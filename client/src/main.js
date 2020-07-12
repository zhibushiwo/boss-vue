import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import '@/style/index.scss'
import '@/assets/fonts/iconfont.css'

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
import global from '@/utils/global'
Vue.use(global)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
