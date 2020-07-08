export const FruitMixin = {
    data() {
        return {
            fruits: ["Apple", "Orang", "Benana", "Melon"],
            filterText: ""
        }
    },
    computed: {
        filterFruits() {
            return this.fruits.filter(item => item.toLowerCase().match(this.filterText.toLowerCase()))
        }
    }
}