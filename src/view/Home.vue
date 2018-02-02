<template>
	<div id="home">

		<Menu class="_fl" @menuWidth="menuWidth"/>

		<TabBar/>

		<div class="_fl mainBody" :style="{'width':bodyWidth}">
			<keep-alive>
	          <router-view v-if="$route.meta.keepAlive"/>
	        </keep-alive>

	        <!-- 这里是不被缓存的视图组件，比如 page3 -->
	        <router-view v-if="!$route.meta.keepAlive"/>

        </div>

	</div>
</template>

<script type="">
	import { mapGetters, mapActions} from 'vuex'
	import Menu from "@/components/menu"
	import tabBar from "@/components/tabBar"
	export default{
		name:'home',
		data(){
			return {
				bodyWidth:'calc(100% - 200px)',
			}
		},
		components:{
			Menu:Menu,
			TabBar:tabBar
		},
		methods:{
			// menu传过来的width，计算mainBody的width
			menuWidth(val){
				this.bodyWidth = 'calc(100% - '+val+')'
			}
		},
	}
</script>

<style>
	#home,#Menu{
		height: 100%;
	}
	.mainBody{
		height: calc(100% - 41px - 50px);
		overflow: scroll;
	}
	#Header{
		height: 50px;
	}
</style>