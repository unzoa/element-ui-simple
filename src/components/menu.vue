<template>
	<div id="Menu">

		<img :src="logo" class="logo" :style="{'height':logoHeight+'px','left':'calc(50% - '+logoHeight/2+'px)'}">

		<el-button size="mini" type="warning" icon="el-icon-d-caret" class="btnMenu" @click="emitWidth">{{isCollapse?'展开':'收起'}}</el-button>

		<el-menu 
			router 
			unique-opened
			:default-active="routesss"
			class="el-menu-vertical-demo" 
			background-color="#545c64"
		    text-color="#fff"
		    active-text-color="#ffd04b"
		    @select="onRouter"
			:collapse="isCollapse">

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
	import logo from '@/assets/logo.png'
	import {mapGetters,mapActions} from 'vuex'
	export default{
		name:'Menu',
		data(){
			return{
				logo:logo,
				logoHeight:'90',
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
							},
							{
								title:'2-3',
								component:'2-3'
							},
							{
								title:'2-4',
								component:'2-4'
							},
							{
								title:'2-5',
								component:'2-5'
							},
							{
								title:'2-6',
								component:'2-6'
							},
							{
								title:'2-7',
								component:'2-7'
							},
							{
								title:'2-8',
								component:'2-8'
							}
						]
					}
				],
			}
		},
		mounted(){

		},
		computed:{
	    	...mapGetters(['newTabName']),
	    	routesss: {
			    get: function () {
			      return this.newTabName
			    },
			    set: function () {
			    	
			    }
			}
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
			},
			emitWidth(){
				this.isCollapse = !this.isCollapse
				this.$emit('menuWidth',this.isCollapse?'64px':'200px')
				this.logoHeight = this.isCollapse?'40':'90'
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

  	.btnMenu{
  		position: absolute;
	    top: 10px;
	    right: -80px
  	}
  	.logo{
	    position: relative;
	    margin: 15px 0;
  	}
</style>