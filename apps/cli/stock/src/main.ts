import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import EventBus from './utils/EventBus'
Vue.config.productionTip = false

Vue.directive('focus', {
  inserted: (element: HTMLElement, binding) => {
    if(binding.value === true) {
      element.focus()
    }
  }
})
export const eventBus = new EventBus()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
