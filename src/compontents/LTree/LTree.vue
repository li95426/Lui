<template>
    <div>
        <tree-menus ref="LTree" :list="data" @selectItem="selectItem" @open="open" v-if="treeShow"></tree-menus>
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
            this.treeShow = false //强制渲染组件
            this.$nextTick(() => {
                this.treeShow = true
            })
        },
        open(item, index) {
            if(item._open) {
                this.$set(item, '_open', false)
            }else {
                this.$set(item, '_open', true)
            }
        },
        getSelectItem() {
            // console.log(this.check)
            return this.check
        }
    }
}
</script>