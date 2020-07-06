<template>
  <div id="app">
    <FormPage></FormPage>
  </div>
      
</template>

<script>
import FormPage from './components/FormPage'
export default {
  name: "App",
  data: () => ({
    message: "Data Message",
    selectedComponent: "Quete"
  }),
  components: {
    FormPage
  }
};
</script>
