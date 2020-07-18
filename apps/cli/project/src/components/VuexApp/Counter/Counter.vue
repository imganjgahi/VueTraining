<template>
  <div>
    <p>{{doubleCounter}}</p>
    <p>You Click {{stringCounter}}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
      ...mapGetters([
      "doubleCounter", 
      "stringCounter"
      ])
  }
};
</script>