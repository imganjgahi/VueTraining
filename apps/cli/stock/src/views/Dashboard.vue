<template>
  <div class="dashboard">
      <div class="content">
        <h1>Dashboard</h1>
        <Transactions />
      </div>
      <div class="menu">Menu</div>
  </div>
</template>

<script>
import Transactions from '../components/Transactions/Transactions';
export default {
  
  components: {
    Transactions,
  }
}
</script>