<!-- 管理文章 -->
<template>
	<transition enter-active-class="animated bounceInUp">
		<section class="manage-articles">
			<el-title-header :title="$route.meta.title"></el-title-header>
			<el-confirm-cancel :show.sync="show" @confirm="confirm">真的真的要删除吗?</el-confirm-cancel>

			<!-- 管理文章表格 begin -->
			<div class="table">
				<div class="common head">
					<span>编号</span>
					<span>日期</span>
					<span>用户名</span>
					<span>标题</span>
					<span>分类</span>
					<span>操作</span>
				</div>

				<div class="common list" v-for="n in 10">
					<span>01</span>
					<span>1970-01-01</span>
					<span>Admin</span>
					<span class="link">
						<a href="#" target="_blank">带你玩转ES6</a>
					</span>
					<span>ES6</span>
					<span class="operation">
						<em class="edit">编辑</em>
						<i class="del" @click="del()">删除</i>
					</span>
				</div>
			</div>
			<!-- 管理文章表格 end -->
		</section>
	</transition>
</template>


<script>
export default {
	name: 'manageArticles',
	data () {
		return {
			show: false,
		}
	},
	methods: {
		del (id) {
			this.show = true;
		},
		confirm () {

		}
	},
}
</script>










