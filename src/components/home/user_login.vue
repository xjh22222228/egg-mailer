<template>
	<transition enter-active-class="animated bounceInDown">
		<section class="user-login">
			<el-title-header :title="$route.meta.title"></el-title-header>
			
			<div class="square">
				<div>
					<i class="blue"></i>
					<span>今天</span>
				</div>
			</div>

			<!-- 表格 begin -->
			<div class="table">
				<div class="common head">
					<span v-for="item of head">{{ item }}</span>
				</div>

				<div class="common list" v-for="n in 10" :class="{today: n % 3 == 0}">
					<span>01</span>
					<span>1970-01-01</span>
					<span>Admin</span>
					<span>192.168.0.1</span>
				</div>
			</div>
			<!-- 表格 end -->
		</section>
	</transition>
</template>


<script>
export default {
	name: 'userLogin',
	data () {
		return {
			head: ['ID', '日期', '用户名', 'IP'],
			loginRecord: [
				{

				}
			]
		}
	}
}
</script>
