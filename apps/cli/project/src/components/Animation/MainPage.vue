<template>
  <div class="animationPage">
    <h1>Animations Course</h1>
    <hr />
    <div class="cotainer">
      <div class="action">
        <button @click="showAlert = !showAlert">{{showAlert ? "Hide Alert" : "Show Alert"}}</button>
      </div>
      <div class="content">
          <transition name="slide">
          <div class="alert" v-if="showAlert">This is a alert</div>
        </transition>
        <transition name="fade">
          <div class="alert" v-if="showAlert">This is a alert</div>
        </transition>
        <transition name="fade" appear>
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
/* Animation class */
.slide-enter {
}
.slide-enter-active {
    animation: slide-in 0.25s ease-out forwards;
}
.slide-leave {
}
.slide-leave-active {
    animation: slide-out 0.25s ease-out forwards;
}

@keyframes slide-in {
    from {
        transform: translateY(20px);
        opacity: 0;
    }
    to{
        transform: translateY(0);
        opacity: 1;
    }
}
@keyframes slide-out {
    from {
        transform: translateY(0);
        opacity: 1;
    }
    to{
        transform: translateY(20px);
        opacity: 0;
    }
}

/* Template style */
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
  margin: 25px 0;
}
</style>