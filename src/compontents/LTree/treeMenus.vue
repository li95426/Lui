<template>
  	<ul class="LTree">
		<li class="LTree-Item" v-for="(item, index) in list " :key="index">
			<p class="LTree-Content">
				<span @click="open(item, index)" 
					:class="['LTree-Switch', item.children?(item._open?'LTree-Switch-open':'LTree-Switch-close'):'LTree-Switch-blank']" ></span>
				<span :class="['LTree-Switch', item.children?(item._open?'LTree-Icon-open':'LTree-Icon-close'):'LTree-Icon-blank']">

				</span>
				<span :class="['LTree-Name', item._selected?'LTree-Name-check':'']" @click="selectItem(item, index)">{{item.name}}</span>
			</p>
			<tree-menus v-show="item._open" :list="item.children" @open="open" @selectItem="selectItem"></tree-menus>
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
		.LTree-Content{
			display: flex;
			align-items: center;
			/**-- switch --**/
			.LTree-Switch{
				display: inline-block;
				width: 18px;
				height: 18px;
				cursor: pointer;
			}
			.LTree-Switch-close{
				background: url('../../assets/img/vueTreeStandard.png');
				background-position: -74px -72px;
			}
			.LTree-Switch-open{
				background: url('../../assets/img/vueTreeStandard.png');
				background-position: -91px -55px;
			}
			.LTree-Switch-blank{
				background: url('../../assets/img/vueTreeStandard.png');
				background-position: -56px -57px;
			}
			/**-- icon --**/
			.LTree-Icon{
				display: inline-block;
				width: 18px;
				height: 18px;
			}
			.LTree-Icon-close{
				background: url('../../assets/img/vueTreeStandard.png');
				background-position: -110px 1px;
			}
			.LTree-Icon-open{
				background: url('../../assets/img/vueTreeStandard.png');
				background-position: -110px -15px;
			}
			.LTree-Icon-blank{
				background: url('../../assets/img/vueTreeStandard.png');
				background-position: -110px -31px;
			}
			/**-- name --**/
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
		}
	}
</style>