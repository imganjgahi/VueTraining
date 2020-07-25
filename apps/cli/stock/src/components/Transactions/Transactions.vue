<template>
        <div class="transactions">
        <Payments />
        <Deposits />
        </div>
</template>

<script>
import Deposits from './Deposits';
import Payments from './Payments';
export default {
  
  components: {
    Deposits,
    Payments,
  }
}
</script>