import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
export const eventBus = new Vue()

Vue.directive("highlight", {
  bind(el, binding, vnode){
    // el.style.backgroundColor = "lightcoral",
    // el.style.backgroundColor = binding.value
    if(binding.arg === "background"){
      el.style.backgroundColor = binding.value
    } else {
      el.style.color = binding.value
    }
    console.log(binding.arg, vnode)
  }
})
new Vue({
  render: h => h(App),
}).$mount('#app')
