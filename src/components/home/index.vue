<template>
	<transition enter-active-class="animated zoomInDown">
		<section class="home">
			<el-header></el-header>
			<el-sidebar></el-sidebar>

			<!-- 右侧 begin -->
			<div class="route-right" :class="{active: !open}">
				<router-view></router-view>
				<el-footer></el-footer>
			</div>
			<!-- 右侧 end -->
		</section>
	</transition>
</template>

<script>
import { mapState } from 'vuex'
import elHeader from './header'
import elFooter from './footer'
export default {
	name: 'home',
	components: {
		elHeader,
		elFooter
	},
	computed: {
		...mapState(['open'])
	}
}
</script>






