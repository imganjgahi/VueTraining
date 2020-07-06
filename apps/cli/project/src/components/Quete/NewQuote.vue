<template>
    <div>
        <h1>New Quete</h1>
    <button @click="counter++">UP</button>
    <p> {{counter}} </p>
    </div>
</template>

<script>
export default {
    name: "NewQuote",
    data: () => ({
        counter: 0
    }),
    activated(){console.log("Activated")},
    deactivated(){console.log("Deactivated")},

}
</script>