<template>
    <div class="switchInput">
        <div :class="{isOn: value}" @click="onChange(true)">On</div>
        <div :class="{isOff: !value}" @click="onChange(false)">Off</div>
    </div>
</template>

<script>
export default {
    name: "AppSwitch",
    props: ['value'],
    methods: {
        onChange(switchValue){
            this.$emit("input", switchValue)
        }
    }
}
</script>

<style scoped>

.switchInput {
    background-color: #ccc;
    width: 65px;
    display: flex;
}
.isOn {
    background-color: greenyellow;
}
.isOff {
    background-color: lightcoral;
}
.switchInput div {
	flex: 1;
	text-align: center;
	cursor: pointer;
    transition: all 200ms;
}
</style>