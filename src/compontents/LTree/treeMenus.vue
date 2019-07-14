<template>
  	<ul>
		<li v-for="(item, index) in list " :key="index">
			<p @click="open(index)">
				<span class="" v-if="item.children" v-html="childrenShow(index)?'-':'+'"></span>
				<span>{{item.name}}</span>
			</p>
			<tree-menus v-show="childrenShow(index)" :list="item.children"></tree-menus>
		</li>
  	</ul>
</template>

<script>
	import bgImage from "../../assets/img/vueTreeStandard.png"
	export default{
		name:'treeMenus',
		props:{
			list: Array
		},
		data() {
			return {	
				showList: []
			}
		},
		computed: {
			childrenShow() {
				return function(value) {
					return this.showList.indexOf(value) >= 0
				}
			}
		},
		methods: {
			open(value) {
				if(this.showList.indexOf(value) == -1) {
					this.showList.push(value)
				}else {
					this.showList.splice(this.showList.indexOf(value), 1)
				}
			}
		}
	}
</script>

<style>
    ul{
        padding-left: 20px;
		list-style: none;
    }
</style>