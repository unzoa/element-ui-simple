<template>
	<div id="home">
		<Menu class="_fl"></Menu>

		<TabBar/>

		<keep-alive>
          <router-view v-if="$route.meta.keepAlive"/>
        </keep-alive>

        <!-- 这里是不被缓存的视图组件，比如 page3 -->
        <router-view v-if="!$route.meta.keepAlive"/>

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

			}
		},
		components:{
			Menu:Menu,
			TabBar:tabBar
		},
		computed:{
		},
		methods:{
			
		},
		mounted(){

		}
	}
</script>