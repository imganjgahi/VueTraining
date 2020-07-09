import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import { routes } from "./Routes";
import { store } from "./store/store";

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: "history"
})
Vue.config.productionTip = false
export const eventBus = new Vue()

Vue.filter('to-lowercase', (value) => {
  return value.toLowerCase()
})
Vue.directive("highlight", {
  bind(el, binding, vnode){
    // el.style.backgroundColor = "lightcoral",
    // el.style.backgroundColor = binding.value
    let delay = 0;
    if(binding.modifiers['delayed']){
      delay = 3000
    }

    setTimeout(() => {
      if(binding.arg === "background"){
        el.style.backgroundColor = binding.value
      } else {
        el.style.color = binding.value
      }
    }, delay);
    
    console.log(binding.arg, vnode)
  }
})
Vue.mixin({
  created() {
    console.log("Global Created");
  }
})

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
