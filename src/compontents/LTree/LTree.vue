<template>
    <div>
        <tree-menus :list="data"></tree-menus>
    </div>
</template>

<script>
import treeMenus from './treeMenus'
export default {
    components: {
        treeMenus
    },
    props: ['data']
}
</script>