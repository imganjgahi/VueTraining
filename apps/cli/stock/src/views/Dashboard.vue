<template>
  <div class="dashboard">
      <div class="content">
        <h1>Dashboard</h1>
        <Payments />
        <Deposits />
      </div>
      <div class="menu">Menu</div>
  </div>
</template>

<script>
import Deposits from '../components/Transactions/Deposits';
import Payments from '../components/Transactions/Payments';
export default {
  
  components: {
    Deposits,
    Payments,
  }
}
</script>