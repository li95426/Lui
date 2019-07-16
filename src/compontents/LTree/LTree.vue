<template>
    <div>
        <tree-menus :list="data" @selectItem="selectItem" @open="open" v-if="treeShow"></tree-menus>
    </div>
</template>

<script>
import treeMenus from './treeMenus'
export default {
    components: {
        treeMenus
    },
    props: ['data'],
    data() {
        return {
            check: {},
            treeShow: true
        }
    },
    methods: {
        selectItem(item, index) {
            Base.traverseTree(this.data, '_selected', false)
            item._selected = true
            this.check = item
            this.treeShow = false
            this.$nextTick(() => {
                this.treeShow = true
            })
        },
        open(item, index) {
            if(item.open) {
                this.$set(item, 'open', false)
            }else {
                this.$set(item, 'open', true)
            }
        }
    }
}
</script>