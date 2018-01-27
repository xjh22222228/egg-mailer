<!-- 添加用户角色 -->
<template>
	<transition enter-active-class="animated bounceInDown">
		<section class="add-user">
			<el-title-header :title="$route.meta.title"></el-title-header>

			<div class="add">
				<table>
					<tbody>
						<tr>
							<td class="name">
								<em>用户名：</em>
							</td>
							<td>
								<input 
									type="text" 
									maxlength="20"
									v-model.trim="username"
									autocomplete="off"
									@keyup.enter="add">
							</td>
						</tr>
						<tr>
							<td class="name">
								<em>密码：</em>
							</td>
							<td>
								<input 
									type="password" 
									maxlength="20"
									v-model="password"
									@keyup.enter="add">
							</td>
						</tr>
						<tr>
							<td class="name">
								<em>确认密码：</em>
							</td>
							<td>
								<input 
									type="password" 
									maxlength="20"
									v-model.trim="confirmPwd"
									@keyup.enter="add">
							</td>
						</tr>
						<tr>
							<td class="btn" colspan="2">
								<div @click="add">添加</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>
	</transition>
</template>


<script>
export default {
	name: 'addUser',
	data () {
		return {	
			username: '',
			password: '',
			confirmPwd: '',
		}
	},
	methods: {
		add () {
			this.$message({
				message: 'fail',
				type: 'warning',
				duration: 1333,
	        });
		}
	}
}
</script>












