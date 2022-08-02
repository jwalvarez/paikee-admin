import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VCalendar from 'v-calendar'
import axios from 'axios'
import { Bar } from 'vue-chartjs/legacy'

Vue.config.productionTip = false

Vue.use(VCalendar, {
  componentPrefix: 'vc',
});

axios.defaults.baseURL = 'https://portal-millonario.free.beeceptor.com'

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
