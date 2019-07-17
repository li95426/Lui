<template>
    <div>
        <tree-menus ref="LTree" :list="data" :isCheckBox="checkbox" @checkMore="_checkMore" @selectItem="_selectItem" @open="_open" v-if="treeShow"></tree-menus>
    </div>
</template>

<script>
import treeMenus from './treeMenus'
export default {
    components: {
        treeMenus
    },
    props: {
        data: {
            type: Array,
            default: () => {
                return []
            }
        },
        checkbox: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            check: {},
            treeShow: true
        }
    },
    methods: {
        /**
         * 选中节点
         */
        _selectItem(item, index) {
            Base.traverseTree(this.data, '_selected', false)
            item._selected = true
            this.check = item
            this.treeShow = false //强制渲染组件
            this.$nextTick(() => {
                this.treeShow = true
            })
        },
        /**
         * 点击展开或闭合
         */
        _open(item, index) {
            if(item._open) {
                this.$set(item, '_open', false)
            }else {
                this.$set(item, '_open', true)
            }
        },
        /**
         * 选择更多
         */
        _checkMore(item, index) {
            if(item._check) {
                this.$set(item, '_check', false)
            }else {
                this.$set(item, '_check', true)
            }
            console.log(this.data)
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