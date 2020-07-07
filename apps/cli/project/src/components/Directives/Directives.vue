<template>
  <div class="directive">
    <h1>Build-in Directives</h1>
    <p v-text="'Some Text'"></p>
    <p v-html="'<b><i> Some Text  </i></b>'"></p>
    <hr />
    <h1>Custom Directive</h1>
    <p v-highlight="'red'">Color Changed</p>
    <p v-highlight:background="'lightblue'">Background Color Changed</p>
    <p v-highlight:background.delayed="'lightblue'">Highlight Directive</p>
    <hr />
    <h1>Local Directive</h1>
    <p v-local-highlight:background.delayed="'yellow'">Highlight Directive</p>
    <p v-local-highlight:background.delayed.blink="'yellow'">Blink</p>
    <p v-local-highlight:background.blink="'yellow'">Just Blink</p>
    <p v-local-highlight:background.blink="{mainColor: 'yellow', secondColor: 'green', blinkDelay: 500}">Just Blink</p>
  </div>
</template>

<script>
export default {
  name: "Directives",
  directives: {
    "local-highlight": {
      bind(el, binding, vnode) {
        let delay = 0;
        if (binding.modifiers["delayed"]) {
          delay = 3000;
        }
        if (binding.modifiers["blink"]) {
          let mainColor = binding.value.mainColor ? binding.value.mainColor : binding.value;
          let secondColor = binding.value.secondColor ? binding.value.secondColor : "coral";
          let currentColor = mainColor;
          setTimeout(() => {
            setInterval(() => {
              currentColor =
                currentColor === mainColor ? secondColor : mainColor;
              if (binding.arg === "background") {
                el.style.backgroundColor = currentColor;
              } else {
                el.style.color = currentColor;
              }
            }, binding.value.blinkDelay ? binding.value.blinkDelay : 1000);
          }, delay);
        } else {
          setTimeout(() => {
            if (binding.arg === "background") {
              el.style.backgroundColor = binding.value.mainColor ? binding.value.mainColor : binding.value;
            } else {
              el.style.color = binding.value.mainColor ? binding.value.mainColor : binding.value;
            }
          }, delay);
        }

        console.log(binding.arg, vnode);
      }
    }
  }
};
</script>

<style lang="css" scoped>
.directive {
  width: 60%;
  margin: 25px auto;
}
</style>
