<template>
	<section class="sidebar">
		<!-- 导航 Begin -->
		<nav class="nav">
			<div 
				class="nav-list" 
				:class="{active: item.open}"
				v-for="(item, index) of nav" 
				:key="item.id">

				<!-- 父菜单 begin -->
				<div class="nav-title" @click="nav[index].open = !nav[index].open">
					<i class="iconfont icon" v-html="item.icon"></i>
					<span>{{ item.name }}</span>
					<i class="iconfont arrow">&#xe600;</i>
				</div>
				<!-- 父菜单 end -->

				<!-- 子菜单 begin -->
				<div class="nav-children">
					<router-link 
						:to="a.to" 
						tag="div" 
						v-for="(a, b) of item.children" :key="a.name">{{ a.name }}
					</router-link>
				</div>
				<!-- 子菜单 end -->
			</div>
		</nav>
		<!-- 导航 End -->
	</section>
</template>

<script>
export default {
	name: 'sidebar',
	data () {
		return {
			nav: [						// 导航
				
				{
					id: 0,							// 唯一id
					open: true,						// 是否暂开
					name: '用户管理',					// 标题
					icon: '&#xe710;',				// 左边的icon
					children: [						// 展开下面的菜单
						{
							name: '用户登录记录',		// 标题
							to: '/home/user',		// 导航路由
						},
						{
							name: '登录记录图表',
							to: '/home/chart',
						},
						{
							name: '添加用户角色',
							to: '/home/add',
						},
						{
							name: '用户留言信息',
							to: '/home/comments',
						},
					],
				},
				{
					id: 1,
					open: true,
					name: '文章管理',
					icon: '&#xe601;',
					children: [
						{
							name: '发布文章',
							to: '/home/release',
						},
						{
							name: '管理文章',
							to: '/home/articles',
						},
						{
							name: '添加分类',
							to: '/home/tag',
						},
					],
				},
				{
					id: 2,
					open: true,
					name: '其他',
					icon: '&#xe603;',
					children: [
						{
							name: '网站信息',
							to: '/home/website',
						},
						{
							name: '修改资料',
							to: '/home/modify',
						},
					],
				},
			]
		}
	},
}

</script>















