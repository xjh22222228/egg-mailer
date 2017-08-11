import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


var store = new Vuex.Store({
	state: {
		open: true,			// 是否展开侧边栏
	},
	mutations: {
		// 触发切换侧边栏
		open (state) {
			state.open = !state.open;
		}
	},
})



export default store;