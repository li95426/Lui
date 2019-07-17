<template>
  	<ul class="LTree">
		<li class="LTree-Item" v-for="(item, index) in list " :key="index">
			<p class="LTree-Content">
				<span 
					@click="open(item, index)" 
					:class="Switch(item)" >
				</span>
				<span 
					:class="Icon(item)"
					@click="checkMore(item, index)">
				</span>
				<span :class="Name(item)" @click="selectItem(item, index)">{{item.name}}</span>
			</p>
			<tree-menus v-show="item._open" :list="item.children" :isCheckBox="isCheckBox" @checkMore="checkMore" @open="open" @selectItem="selectItem"></tree-menus>
		</li>
  	</ul>
</template>

<script>
	export default{
		name:'treeMenus',
		props:{
			list: Array,
			isCheckBox: Boolean
		},
		data() {
			return {
				showList: [],
				check: {}
			}
		},
		computed: {
			Switch() {
				return function(item) {
					return [
						'LTree-Switch',
						{
							'LTree-Switch-open': item.children && item._open,
							'LTree-Switch-close': item.children && !item._open,
							'LTree-Switch-blank': !item.children && item.children<=0
						}
					]
				}
				
			},
			Icon() {
				return function(item) {
					return [
						'LTree-Icon',
						{
							'LTree-Icon-open': !this.isCheckBox && item.children && item._open,
							'LTree-Icon-close': !this.isCheckBox && item.children && !item._open,
							'LTree-Icon-blank': !this.isCheckBox && !item.children,
							'LTree-Icon-nocheck': this.isCheckBox && !item._check,
							'LTree-Icon-check': this.isCheckBox && item._check
						}
					]
				}
			},
			Name() {
				return function(item) {
					return [
						'LTree-Name',
						{
							'LTree-Name-check': item._selected
						}
					]
				}
			}
		},
		methods: {
			open(item, index) {
				this.$emit('open', item, index)
			},
			selectItem(item, index) {
				this.$emit('selectItem', item, index)
			},
			checkMore(item, index) {
				this.$emit('checkMore', item, index)
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
			.LTree-Icon-nocheck{
				width: 13px;
				height: 13px;
				background: url('../../assets/img/vueTreeStandard.png');
				background-position: 0px 0px;
			}
			.LTree-Icon-check{
				width: 13px;
				height: 13px;
				background: url('../../assets/img/vueTreeStandard.png');
				background-position: -14px 0px;
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