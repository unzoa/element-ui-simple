<template>
	<div id="oneFirst">
		oneFirst
		<el-button @click="addTabTest">addTabTest</el-button>
	</div>
</template>

<script type="">
	import {mapActions} from 'vuex'
	export default{
		name:'oneFirst',
		methods:{
			...mapActions(['addTab','changeActiveTabName']),
			addTabTest(){
				let addTabItem = {
					title:'1-2',
					name:'oneTwice'
				}
				this.addTab(addTabItem)
				this.changeActiveTabName('oneTwice')
				this.$router.push('/oneTwice')
			}
		}
	}
</script>