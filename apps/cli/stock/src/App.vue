<template>
  <div id="app">
    <NavBar />
    <button @click="confirm"> Test Confirm </button>
    <router-view />
    <TopDialog />
  </div>
</template>

<script>
import NavBar from './components/Navbar'
import TopDialog from './components/Dialogs/TopDialog'
import { eventBus } from './main';
export default {
  components: {
    NavBar,
    TopDialog
  },
  created() {
    this.$store.dispatch("tryAutoLogin");
  },
  mounted() {
    eventBus.listen('test-called', (data) => {
      data.dialog.clear({success: true})
    })
    eventBus.listen('test-cleared', (data) => {
      if(!data.success){
        return;
      }
      eventBus.fire('submit-update-form');
    })
  },
  methods: {
    confirm(){
      eventBus.fire('top-confirm', {
        id: "test",
        message: 'Are you shoure ?'
      })
    }
  }
}
</script>
<style>
@import url('./assets/styles/main.css');

</style>
