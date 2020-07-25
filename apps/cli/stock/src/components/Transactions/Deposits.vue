<template>
  <div class="deposite">
    <h3>Deposits</h3>
    <div class="action">
      <form @submit="addNewDeppsite($event)">
        <label> Title</label>
        <input type="text" v-model="depositTitle">
        <label> Amount</label>
      <input type="text" v-model="depositAmont">
      <button type="submit">Add Transaction</button>
      </form>
    </div>
    <div class="list">
      <GridTable :dataProps="depositeList" :loading="true" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import GridTable from '../Grid/Grid'
export default {
  components: {
    GridTable
  },
  data() {
    return {
      depositTitle: "",
      depositAmont: "",
      totalAmount: 0,
      depositList: [],
    };
  },
  computed: {
    ...mapGetters([
      'depositeList'
    ]),
    status() {
      console.log("State: ", this.$store.getters.depositeList)
      return true
    },
  },
  methods: {
    addNewDeppsite(event) {
      event.preventDefault()
      
      this.$store.commit("addNewItem", {id:(Math.random() * 10000000), title: this.depositTitle, amount: Number(this.depositAmont)})
    }
  }
};
</script>