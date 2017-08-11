<template>
    <div id="app">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
export default {
    name: 'app',
    created () {
    	// 拦截器
    	var loading = null;
    	this.$axios.interceptors.request.use(config => {
    		loading = this.$loading({
    			text: '请求中...'
    		});
    		return config;
    	}, e => {
			this.$message({
				message: '请求接口失败...',
				type: 'warning',
				duration: 1333,
	        });
    		return Promise.reject(e);
    	})

    	this.$axios.interceptors.response.use(res => {
    		loading.close();
    		return res;
    	}, e => {
    		loading.close();
    		return Promise.reject(e);
    	})
    },
}
</script>












