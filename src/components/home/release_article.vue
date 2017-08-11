<!-- 
Author: XieJiaHe
Concat: 8316687
 -->
 <!-- 发布文章 -->

 <template>
 	<transition enter-active-class="animated bounceInDown">
		<section class="release-article">
			<el-title-header :title="$route.meta.title"></el-title-header>

			<div class="radio">
				<div v-for="n of 8" @click="index = n" :class="{active: index == n}">JavaScript</div>
			</div>

			<markdown-editor v-model="content" :configs="configs"></markdown-editor>

			<div class="release-btn">发布文章</div>
		</section>
 	</transition>
 </template>

 <script>
 export default {
 	name: 'releaseArticle',
 	data () {
 		return {
 			flag: true,
 			index: -1,
 			options: [
 				{
 					
 				}
 			],
 			content: '',
 			configs: {
 				status: false,
 				spellChecker: false,
 				renderingConfig: {
 					codeSyntaxHighlighting: true,
 					highlightingTheme: 'atom-one-light'
 				}
 			}
 		}
 	},
 }
 </script>














