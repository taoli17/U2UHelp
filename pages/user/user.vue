<template>
    <view class="content">
		<template v-if="hasLogin">
			<view class="u-f user-info">
				<image :src="avatarUrl" mode="widthFix" lazy-load></image>
				<view class="u-f-ajc">欢迎,{{userName}}！</view>
			</view>
		</template>
		
        <view class="btn-row login-btn">
            <button v-if="!hasLogin" type="primary" class="primary" @tap="bindLogin">登录</button>
            <button v-if="hasLogin" type="default" @tap="bindLogout">退出登录</button>
        </view>
    </view>
</template>

<script>
    import {
        mapState,
        mapMutations
    } from 'vuex'

    export default {
        computed: {
            ...mapState(['hasLogin', 'forcedLogin', 'avatarUrl', 'userName'])
        },
        methods: {
            ...mapMutations(['logout']),
            bindLogin() {
                uni.navigateTo({
                    url: '../login/login',
                });
            },
            bindLogout() {
                this.logout();
                /**
                 * 如果需要强制登录跳转回登录页面
                 */
                if (this.forcedLogin) {
                    uni.reLaunch({
                        url: '../login/login',
                    });
                }
            }
        }
    }
</script>

<style>
.login-btn{
	margin-top:60%;
}
.user-info{
	padding: 20upx;
}
.user-info>image{
	width: 100upx;
	border-radius: 100%;
	margin-right: 10upx;
}
</style>
