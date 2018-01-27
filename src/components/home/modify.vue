<!-- 修改信息 -->
 <template>
 	<transition enter-active-class="animated bounceInDown">
 		<section class="modify">
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
 									readonly="readonly"
 									class="readonly">
 							</td>
 						</tr>
 						<tr>
 							<td class="name">
 								<em>新密码：</em>
 							</td>
 							<td>
 								<input 
 									type="password" 
 									maxlength="20"
 									v-model="newPwd"
 									@keyup.enter="modify">
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
 									@keyup.enter="modify">
 							</td>
 						</tr>
 						<tr>
 							<td class="btn" colspan="2">
 								<div @click="modify">确认修改</div>
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
	name: 'modify',
	data () {
		return {
			username: 'admin',
			newPwd: '',
			confirmPwd: '',
		}
	},
	methods: {
		modify () {

		}
	},
}
</script>

















