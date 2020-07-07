import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
export const eventBus = new Vue()

Vue.directive("highlight", {
  bind(el, binding, vnode){
    el.style.backgroundColor = "lightcoral",
    console.log(binding, vnode)
  }
})
new Vue({
  render: h => h(App),
}).$mount('#app')
