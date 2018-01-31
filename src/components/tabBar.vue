<template>
	<div id="tabBar">

		<el-tabs 
		v-model="routesss" 
		type="card" 
		closable 
		@tab-remove="removeTab"
		@tab-click='tabActive'>
		  <el-tab-pane
		    v-for="(item, index) in tabData"
		    :key="item.name"
		    :label="item.title"
		    :name="item.name"
		  >
		    {{item.content}}
		  </el-tab-pane>
		</el-tabs>


	</div>
</template>

<script type="">
	import {mapGetters,mapActions} from 'vuex'
	export default{
		name:'tabBar',
		data() {
	      return {
	      }
	    },
	    computed:{
	    	...mapGetters(['newTabName','tabData']),
	    	routesss: {
			    get: function () {
			      return this.newTabName
			    },
			    set: function () {
			    	
			    }
			}
	    },
	    methods: {
	    	...mapActions(['delTab','changeActiveTabName']),
	    	tabActive(tab){
		      this.$router.push('/'+tab.name)
		      this.changeActiveTabName(tab.name)
		    },
		    removeTab(targetName) {

		        let tabData = this.tabData
		        let activeName = this.newTabName

		        // 当只有一个tab时候，跳转到welcome
		        if (tabData.length == 1) {
		        	this.$router.push('/welcome')
		        	tabData = []
		        }else {
		        	for(let i in tabData){
		        		// 本条active
		        		if(targetName == activeName){
		        			if(tabData[i].name == targetName){
		        				// 顺序排第一，显示后一个
		        				if (i==0) {
		        					this.tabActive(tabData[1])
		        				}else{
		        				// 顺序不是第一，显示前一个
		        					this.tabActive(tabData[i-1])
		        				}
		        				// 删除本条
		        				tabData.splice(i,1)
		        				break
		        			}

				        }else{
				        // 非active，直接删除
				        	// 删除本条
		        			tabData.splice(i,1)
		        			break
				        }
			        }
		        }
		        // 提交componentName
		        this.delTab(tabData)
		    }
	    }
	}
</script>

<style scoped="scoped">
	#tabBar{
		position: relative;
		z-index: 998;
	}
</style>