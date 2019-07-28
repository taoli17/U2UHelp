import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        /**
         * 是否需要强制登录
         */
        forcedLogin: false,
        hasLogin: false,
        userName: "",
		avatarUrl:""
    },
    mutations: {
        login(state, userInfo) {
			console.log('state='+JSON.stringify(state)+' userName='+userInfo.nickName+' avatarUrl='+userInfo.avatarUrl)
            state.userName = userInfo.nickName || '新用户';
            state.hasLogin = true;
			state.avatarUrl = userInfo.avatarUrl;
        },
        logout(state) {
            state.userName = "";
            state.hasLogin = false;
        }
    }
})

export default store
