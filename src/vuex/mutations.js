export const addTab = (state,obj) =>{
	// tab为空
	if (state.tabData.length==0) {
		state.tabData.push(obj)
	}else if (JSON.stringify(state.tabData).indexOf(JSON.stringify(obj))==-1) {
		// 不为空，检察是否含有了
		state.tabData.push(obj)
	}
	// 存储 newTabName
	state.newTabName = obj.name
}

export const delTab = (state,obj) =>{
	state.tabData = obj
}

export const changeActiveTabName = (state,val) =>{
	state.newTabName = val
}