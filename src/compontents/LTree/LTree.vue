<template>
    <div>
        <tree-menus v-if="treeShow" :list="data" @selectItem="selectItem"></tree-menus>
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
            this.treeShow = false
            Base.traverseTree(this.data, '_selected', false)
            item._selected = true
            this.check = item
            this.treeShow = true
        }
    }
}
</script>