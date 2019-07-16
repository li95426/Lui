<template>
    <div>
        <tree-menus ref="LTree" :list="data" @selectItem="_selectItem" @open="_open" v-if="treeShow"></tree-menus>
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
    computed: {
        _type() {
            console.log(this.$el.hasAttribute('radio'))
        }
    },
    methods: {
        _selectItem(item, index) {
            Base.traverseTree(this.data, '_selected', false)
            item._selected = true
            this.check = item
            this.treeShow = false //强制渲染组件
            this.$nextTick(() => {
                this.treeShow = true
            })
        },
        _open(item, index) {
            if(item._open) {
                this.$set(item, '_open', false)
            }else {
                this.$set(item, '_open', true)
            }
        },
        /**
         * 获取选中节点
         */
        getSelectItem() {
            return this.check
        }
    }
}
</script>