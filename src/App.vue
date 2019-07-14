<template>
    <div id="app">
		<l-tree :data="treeList"></l-tree>
    </div>
</template>

<script>
import LTree from "./compontents/LTree/LTree"
export default {
	name: 'app',
	components: {
		LTree
	},
	data () {
		return {
			treeList: [
                {
                    name: '父亲1',
                    children: [
                        {
                            name: '父1儿1',
                            children: [
                                {
                                    name: '父1儿1孙1'
                                }
                            ]
                        },
                        {
                            name: '父1儿2'
                        }
                    ]
                },
                {
                    name: '父亲2',
                    children: [
                        {
                            name: '父2儿1'
                        },
                        {
                            name: '父2儿2'
                        }
                    ]
                }
            ]
		}
	}
}
</script>

<style>
</style>
