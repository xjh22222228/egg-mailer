<template>
	<div class="confirm-cancel" v-show="show">
		<transition enter-active-class="animated fadeInDown">
			<div class="confirm-cancel-box" v-show="show">
				<div class="logout">
					<slot></slot>
				</div>
				<div class="bottom">
					<div @click="confirm">确定</div>
					<div @click="cancel">取消</div>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	name: 'confirm_cancel',
	props: {
		show: {
			default: false,
			type: Boolean,
		}
	},
	methods: {
		// 取消按钮
		cancel () {
			this.$emit('update:show', false);
		},
		// 确定按钮
		confirm () {
			this.$emit('update:show', false);
			this.$emit('confirm');
		}
	}
}
</script>


<style lang="scss" type="text/css">
@import '../../../static/scss/_variable.scss';
.confirm-cancel {
    z-index: 99999999;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, .4);
    @include center;
    
    .confirm-cancel-box {
        width: 250px;
        padding: 25px 0;
        background: #fff;
        border-radius: 7px;
        box-shadow: 0 0 10px rgba(255, 255, 255, .7);
        @include prefix(animation-duration, .2s !important);
    }

    .logout {
        font-size: 20px;
        text-align: center;
        padding-bottom: 10px;
        border-bottom: 1px solid #f9f9f9;
    }

    .bottom {
        margin-top: 10px;
        @include display(flex);

        div {
            @include prefix(flex, 1);
            font-size: 18px;
            text-align: center;
            color: #2d97f8;
            cursor: pointer;

            &:hover {
                color: rgba(45, 155, 248, .8);
            }
        }
    }
}
</style>
















