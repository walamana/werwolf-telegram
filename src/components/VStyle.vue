
<script>
import { h } from 'vue'
export default {
    name: "VStyle",
    render() {
        // console.log("Render", this.$slots.default())
        return h('style', {}, this.$slots.default ? this.$slots.default() : [])
    },
    created(){
        console.log("Created")
    }
}
</script>

<style lang="less" scoped>

</style>