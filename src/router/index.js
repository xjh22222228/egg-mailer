import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const routes =  new Router({
	mode: 'history',
	routes: [
		{	// 登录
			name: 'login',
			path: '/login',
			alias: '',
			component: resolve => require(['../components/login/login.vue'], resolve),
			meta: {
				title: '登录'
			},
		},
		{	// 家首页
			name: 'home',
			path: '/home',
			component: resolve => require(['../components/home/index.vue'], resolve),
			meta: {
				title: '后台管理系统',
				requireAuth: true,
			},
			children: [
				{	// 用户登录记录
					name: 'userLogin',
					path: 'user',
					alias: '',
					component: resolve => require(['../components/home/user_login.vue'], resolve),
					meta: {
						title: '用户登录记录'
					}
				},
				{	// 网站信息
					name: 'websiteInfo',
					path: 'website',
					component: resolve => require(['../components/home/website_info.vue'], resolve),
					meta: {
						title: '网站信息',
					}
				},
				{	// 留言信息
					name: 'comments',
					path: 'comments',
					component: resolve => require(['../components/home/comments.vue'], resolve),
					meta: {
						title: '留言信息'
					}
				},
				{	// 添加用户角色
					name: 'addUser',
					path: 'add',
					component: resolve => require(['../components/home/add_user.vue'], resolve),
					meta: {
						title: '添加用户角色'
					}
				},
				{	// 登录记录图表
					name: 'recordChart',
					path: 'chart',
					component: resolve => require(['../components/home/record_chart.vue'], resolve),
					meta: {
						title: '用户登录图表'
					}
				},
				{	// 添加文章分类
					name: 'addTag',
					path: 'tag',
					component: resolve => require(['../components/home/add_tag.vue'], resolve),
					meta: {
						title: '添加文章分类'
					}
				},
				{	// 管理文章
					name: 'manageArticels',
					path: 'articles',
					component: resolve => require(['../components/home/manage_articles.vue'], resolve),
					meta: {
						title: '管理文章'
					}
				},
				{	// 发布文章
					name: 'releaseArticle',
					path: 'release',
					component: resolve => require(['../components/home/release_article.vue'], resolve),
					meta: {
						title: '发布文章'
					}
				},
				{	// 修改信息
					name: 'modify',
					path: 'modify',
					component: resolve => require(['../components/home/modify.vue'], resolve),
					meta: {
						title: '修改资料'
					}
				},
			],
		},
		{	// 所有不存在的页面返回404页面
			name: 'error',
			path: '*',
			component: resolve => require(['../components/error/404.vue'], resolve),
			meta: {
				title: '404 - Not Found'
			},
		},
	]
})

// 导航钩子
routes.beforeEach((to, form, next) => {
	// 设置网页标题
	if( to.meta.title ) {
		document.title = to.meta.title;
	}
	next();
})



export default routes
















