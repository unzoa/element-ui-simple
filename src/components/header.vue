<template>
	<div id="Header" class="_text-right">
		<div class="_fr">
			
			<el-dropdown class="userName" trigger="click">
			  <span class="el-dropdown-link">
			    userName<i class="el-icon-arrow-down el-icon--right"></i>
			  </span>
			  <el-dropdown-menu slot="dropdown">
			    <el-dropdown-item >Logout</el-dropdown-item>
			  </el-dropdown-menu>
			</el-dropdown>

		</div>
	</div>
</template>

<script type="">
	export default{
		name:'Header',
	}
</script>

<style scoped="scoped">
	#Header{
		background-color: #409EFF;
	}
	.userName{
		top: -2px;
		right: 20px;
		color: #fff;
		height: 50px;
		line-height: 50px;
	}
</style>