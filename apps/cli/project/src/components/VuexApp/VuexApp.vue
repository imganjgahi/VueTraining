<template>
    <div class="vuex">
        <h1>Vuex</h1>
    <div class="cotent">
        <CounterApp :counter="counter" />
        <ActionBtn @updated="counter += $event" />
    </div>
    </div>
</template>

<script>
import CounterApp from './Counter/Counter';
import ActionBtn from './Counter/ActionBtn';
export default {
    data() {
        return {
            counter: 1
        }
    },
    components: {
        CounterApp,
        ActionBtn
    }
}
</script>