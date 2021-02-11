import Vue from 'vue'
import App from './App.vue'
import router from './router'
import jQuery from 'jquery'
window.$ = window.jQuery = jQuery;
import 'bootstrap';
import 'popper.js';
import '../src/assets/app.scss';
import moment from 'moment';
import ScrollAnimation from './directives/scrollanimation'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import Fragment from 'vue-fragment';
import i18n from './i18n'
Vue.use(Fragment.Plugin);

Vue.directive('scrollanimation', ScrollAnimation);
Vue.filter('formatDate', function(value) {
  if (value) {
      return moment(String(value)).format('MM/DD/YYYY')
  }
})

Vue.config.productionTip = false
Vue.use(require("moment"));
Vue.use(VueSweetalert2);

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
