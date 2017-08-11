<!-- 
Author: XieJiaHe
Concat: 8316687
 -->
<template>
	<transition enter-active-class="animated bounceInUp">
		<section class="comments">
			<el-title-header :title="$route.meta.title"></el-title-header>
			<el-confirm-cancel :show.sync="show" @confirm="confirm">确定要删除吗</el-confirm-cancel>

			<div class="square">
				<div>
					<i class="blue"></i>
					<span>今天</span>
				</div>
				<div>
					<i class="warn"></i>
					<span>举报</span>
				</div>
			</div>
			
			<!-- 评论表格 begin -->
			<div class="table">
				<div class="common head">
					<span>ID</span>
					<span>日期</span>
					<span>用户名</span>
					<span>内容</span>
					<span>IP</span>
					<span>操作</span>
				</div>

				<div class="common list" v-for="n in 10">
					<span>01</span>
					<span>1970-01-01</span>
					<span>Admin</span>
					<span>这是一个博客系统，希望喜欢的同学Github点个赞。感谢！</span>
					<span>192.168.0.1</span>
					<span class="operation">
						<a href="#" class="open" target="_blank">打开</a>
						<i class="del" @click="del()">删除</i>
					</span>
				</div>
			</div>
			<!-- 评论表格 end -->
		</section>
	</transition>
</template>

<script>
export default {
	name: 'comments',
	data () {
		return {
			show: false,
			cache: [],		// 已经缓存的数据。
			comments: [		// 用户评论
				{

				}
			]
		}
	},
	methods: {
		// 确定删除
		confirm () {
			
		},
		// 点击删除按钮, 传一个id过来
		del (id) {
			this.show = true;
		},
	}
}
</script>












