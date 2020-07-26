<template>
  <div class="deposite">
    <h3>Deposits</h3>
    <div class="action">
      <form @submit="addNewDeppsite($event)">
        <label>Title</label>
        <input type="text" v-model="depositTitle" />
        <label>Amount</label>
        <input type="text" v-model="depositAmont" />
        <button type="submit">Add Transaction</button>
      </form>
    </div>
    <div class="list">
      <GridTable :columns="['id', 'title', 'amount', 'action']" :dataProps="depositeList" :loading="true">
        <template #id="data">
          <strong :style="{color: 'red'}">
            <input type="checkbox" @input="selectItem($event, data.col)">
          </strong>
        </template>
        <template #title="data">
          <strong :style="{color: 'red'}">{{data.col}}</strong>
        </template>
        <template #actions="record">
          <button>{{record.item.id}}</button>
        </template>
      </GridTable>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import GridTable from "../Grid/Grid";
export default {
  components: {
    GridTable,
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
    ...mapGetters(["depositeList"]),
    status() {
      console.log("State: ", this.$store.getters.depositeList);
      return true;
    },
  },
  methods: {
    addNewDeppsite(event) {
      event.preventDefault();

      this.$store.commit("addNewItem", {
        id: Math.random() * 10000000,
        title: this.depositTitle,
        amount: Number(this.depositAmont),
      });
    },
    selectItem(event, itemId){
      console.log("event", event.target.checked)
      console.log("selectItem", itemId)
    }
  },
};
</script>