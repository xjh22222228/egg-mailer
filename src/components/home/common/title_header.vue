<!-- 
Author: XieJiaHe
Concat: 8316687
 -->
 <template>
 	<div class="title-header">
 		<i class="iconfont" @click="$store.commit('open')" :class="{active: open}">&#xe677;</i>
 		<em>{{ title }}</em>
 	</div>
 </template>

 <script>
 import { mapState } from 'vuex'
 export default {
 	name: 'titleHeader',
 	props: {
 		title: {
 			type: String,
 			default: '-'
 		}
 	},
 	computed: {
 		...mapState(['open'])
 	}
 }
 </script>