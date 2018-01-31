<template>
	<div id="Menu">

		<el-menu 
			router 
			unique-opened
			class="el-menu-vertical-demo" 
			background-color="#545c64"
		    text-color="#fff"
		    active-text-color="#ffd04b"
		    @select="onRouter"
			:collapse="isCollapse">

			<el-button size="mini" @click="isCollapse = !isCollapse">{{isCollapse?'展开':'收起'}}</el-button>


			<el-submenu v-for="(i,j) in menuData" :key="j" :index="j.toString()">

				<template slot="title">
				  	<i :class="i.className"></i>
					<span slot="title">{{i.title}}</span>
				</template>

				<el-menu-item-group>
				  <el-menu-item 
				  v-for="(m,n) in i.children" 
				  :key="n" 
				  :index="m.component">{{m.title}}</el-menu-item>
				</el-menu-item-group>

			</el-submenu>

		</el-menu>

	</div>
</template>

<script type="">
	import {mapActions} from 'vuex'
	export default{
		name:'Menu',
		data(){
			return{
				isCollapse: false,
				menuData:[
					{
						className:'el-icon-location',
						title:'导航一',
						children:[
							{
								title:'1-1',
								component:'oneFirst'
							},
							{
								title:'1-2',
								component:'oneTwice'
							},
							{
								title:'1-3',
								component:'oneThird'
							}
						]
					},
					{
						className:'el-icon-menu',
						title:'导航二',
						children:[
							{
								title:'2-1',
								component:'twoFirst'
							},
							{
								title:'2-2',
								component:'twoTwice'
							}
						]
					}
				]
			}
		},
		mounted(){

		},
		methods:{
			...mapActions(['addTab']),
			onRouter(val){
				let componentName = val
				let componentTitle = ''
				// 取到componentName,Title
				let menuData = this.menuData
				for(let i of menuData){
					for(let j of i.children){
						if (j.component == val) {
							componentTitle = j.title
							break
						}

					}
				}
				// 增加tabBar，唤醒vuex actions addTab
				// 提交componentName,componentTitle
				let addTabItem = {
					title:componentTitle,
					name:componentName
				}
				this.addTab(addTabItem)
			}
		}
	}
</script>

<style>
	#Menu{
		position: relative;
		z-index: 999;
		background-color: rgb(84, 92, 100);
	}
	.el-menu {
		border-right: 0;
	}
  	.el-menu-vertical-demo:not(.el-menu--collapse) {
	    width: 200px;
	    min-height: 400px;
  	}
</style>