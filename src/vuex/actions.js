import api from '../api/api.js'

export const addTab = ({commit} , obj) =>{
	commit('addTab',obj)
}

export const delTab = ({commit},obj) =>{
	commit('delTab',obj)
}

export const changeActiveTabName = ({commit},val)=>{
	commit('changeActiveTabName',val)
}
