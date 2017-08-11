<!-- 
Author: XieJiaHe
Concat: 8316687
 -->
<!-- 添加分类 -->

<template>
	<transition enter-active-class="animated bounceInDown">
		<section class="add-tag">
			<el-title-header :title="$route.meta.title"></el-title-header>

			<div class="tag">
				<div v-for="n of 10">
					JavaScript
					<i class="iconfont" @click="del">&#xe629;</i>
				</div>
			</div>
			
			<div class="tag-title">请在下面输入添加分类</div>

			<div class="input">
				<div>
					<input 
						type="text" 
						maxlength="18"
						v-model.trim="tagInput"
						@keyup.enter="add"
						placeholder="不要超过18个字符哦">
				</div>
				<div class="btn" @click="add">添加</div>
			</div>
		</section>
	</transition>
</template>

<script>
export default {
	name: 'addTag',
	data () {
		return {
			tagInput: '',
		}
	},
	methods: {
		del (id) {

		},
		add () {

		},
	}
}
</script>

















