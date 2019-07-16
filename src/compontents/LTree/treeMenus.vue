<template>
  	<ul class="LTree">
		<li class="LTree-Item" v-for="(item, index) in list " :key="index">
			<p class="LTree-Content">
				<span @click="open(item, index)" :class="['LTree-Switch', item.children?(item.open?'LTree-Switch-open':'LTree-Switch-close'):'LTree-Switch-blank']" ></span>
				<span :class="['LTree-Name', item._selected?'LTree-Name-check':'']" @click="selectItem(item, index)">{{item.name}}</span>
			</p>
			<tree-menus v-show="item.open" :list="item.children" @open="open" @selectItem="selectItem"></tree-menus>
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
				showList: [],
				check: {},
				checkIndex: null
			}
		},
		methods: {
			open(item, index) {
				// if(this.showList.indexOf(value) == -1) {
				// 	this.showList.push(value)
				// }else {
				// 	this.showList.splice(this.showList.indexOf(value), 1)
				// }
				this.$emit('open', item, index)
			},
			selectItem(item, index) {
				this.$emit('selectItem', item, index)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.LTree{
		padding-left: 15px;
		font-size: 12px;
		.LTree-Switch{
			display: inline-block;
			width: 18px;
			height: 18px;
			cursor: pointer;
		}
		.LTree-Switch-close{
			background: url('../../assets/img/vueTreeStandard.png');
			background-position: -74px -18px;
		}
		.LTree-Switch-open{
			background: url('../../assets/img/vueTreeStandard.png');
			background-position: -92px -54px;
		}
		.LTree-Switch-blank{
			background: url('../../assets/img/vueTreeStandard.png');
			background-position: -56px -18px;;
		}
	}
	.LTree-Content{
		display: flex;
		align-items: center;
	}
	.LTree-Name{
		cursor: pointer;
	}
	.LTree-Name-check{
		background: #FFE6B0;
		border: 1px #FFB951 solid;
		opacity: 0.8;
	}
	.LTree-Name:hover{
		text-decoration: underline;
	}
	/* .LTree-Item{

	} */
</style>