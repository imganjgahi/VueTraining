<template>
  <div class="animationPage">
    <h1>Animations Course</h1>
    <hr />
    <div class="cotainer">
      <div class="action">
        <button @click="showAlert = !showAlert">{{showAlert ? "Hide Alert" : "Show Alert"}}</button>
      </div>
      <div class="content">
        <transition name="fade">
          <div class="alert" v-if="showAlert">This is a alert</div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AnimationPage",
  data() {
    return {
      showAlert: false
    };
  }
};
</script>

<style scoped>

.fade-enter {
    scale: 0;
}
.fade-enter-active {
    transition: scale 250ms;
}
.fade-leave {
    scale: 1;
}
.fade-leave-active {
    transition: scale 250ms;
    scale: 0;
}
h1 {
  text-align: center;
  font-family: Tahoma, Geneva, Verdana, sans-serif;
}

.cotainer {
  width: 80%;
  margin: 20px auto;
}

.action {
  height: 50px;
  border: 1px solid;
  display: flex;
  align-items: center;
  padding: 0 25px;
  margin-bottom: 20px;
}

.content {
  border: 1px solid #ccc;
  padding: 25px;
  min-height: 300px;
}
.alert {
  background-color: lightblue;
  height: 45px;
  display: flex;
  align-items: center;
  padding: 0 25px;
  width: 300px;
  border-radius: 5px;
  border: 2px solid darkblue;
}
</style>