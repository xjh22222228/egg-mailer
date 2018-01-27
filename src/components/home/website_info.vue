<template>
	<transition enter-active-class="animated bounceInUp">
		<section class="website-info">
			<el-title-header :title="$route.meta.title"></el-title-header>
			
			<div class="info">
				<table>
					<tbody>
						<tr>
							<td class="name">
								<em>系统环境：</em>
							</td>
							<td>
								<span>production</span>
							</td>
						</tr>
						<tr>
							<td class="name">
								<em>当前用户IP：</em>
							</td>
							<td>
								<span>192.168.0.1</span>
							</td>
						</tr>
						<tr>
							<td class="name">
								<em>系统版本：</em>
							</td>
							<td>
								<span>8.11.2</span>
							</td>
						</tr>
						<tr>
							<td class="name">
								<em>服务器时间：</em>
							</td>
							<td>
								<span>1997-01-01 28:28</span>
							</td>
						</tr>
						<tr>
							<td class="name">
								<em>域名：</em>
							</td>
							<td>
								<span>www.xxx.com</span>
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
	name: 'websiteInfo',
	data () {
		return {
			wbInfo: {		// 存储网站信息从后台获取

			}
		}
	},
	created () {
		
	}
}
</script>










