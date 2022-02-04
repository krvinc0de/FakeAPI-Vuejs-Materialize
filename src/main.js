import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'vue-material-design-icons/styles.css';
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

new Vue({
  router,
  axios,
  VueAxios,
  render: h => h(App)
}).$mount('#app')