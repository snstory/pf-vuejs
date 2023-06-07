<template>
	<div v-show="mounted_chkr">
		<div class="q-pa-md explain-wrap" ref="stepMain">
			<section>
				<h1>축하합니다! <span>하실 수 있는 것들 <q-icon name="sentiment_very_satisfied"></q-icon></span></h1>

				<q-list class="shadow-2 rounded-borders j-exp-list" style="width: 100%;">
					<q-item>
						<q-item-section avatar><q-avatar size="2.5rem"><img :src="require('src/assets/icon-6.png')"></q-avatar></q-item-section>
						<q-item-section style="text-align: left;" class="j-exp-txt">노래 부르기 <b>(왕국노래, 오리지널송, 어린이노래 등)</b></q-item-section>
					</q-item>
					<q-item>
						<q-item-section avatar><q-avatar size="2.5rem"><img :src="require('src/assets/icon-10.png')"></q-avatar></q-item-section>
						<q-item-section style="text-align: left" class="j-exp-txt">경험담</q-item-section>
					</q-item>
					<q-item>
						<q-item-section avatar><q-avatar size="2.5rem"><img :src="require('src/assets/icon-13.png')"></q-avatar></q-item-section>
						<q-item-section style="text-align: left" class="j-exp-txt">성경에서 찾은 보물 <b>(집회 때 기회가 없으셨던 것도)</b></q-item-section>
					</q-item>
					<q-item>
						<q-item-section avatar><q-avatar size="2.5rem"><img :src="require('src/assets/icon-8.png')"></q-avatar></q-item-section>
						<q-item-section style="text-align: left" class="j-exp-txt">그외 격려가 되는 모든 것</q-item-section>
					</q-item>
				</q-list>

				<QmButton
					title="확인"
					:sound="require('src/assets/normal_02.mp3')"
					color="accent"
					:fn="closeLayer"
				/>
			</section>
		</div>
	</div>
</template>

<script setup>
import { inject, ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import QmButton from 'src/stepA/QmButton.vue'
import pObj from 'src/inc/js/onLoadEvt.js'

const store = useStore()
const expIsOpen = inject('expIsOpen')

const closeLayer = () => {
	// 설명 닫기
	expIsOpen.value = false
}

// 처음 로드되는 화면 제어
const stepMain = ref(null)
const mounted_chkr = ref(false)
onMounted(() => pObj.playInStepB(stepMain.value, mounted_chkr, .1, .6))
</script>

<style lang="scss" scoped>
.explain-wrap {
	position: absolute;
	z-index: 100;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
	> section {
		position: relative;
		width: 90%;
		height: 80vh;
		// background-color: white;
		padding: 0 0 2rem;
		border-radius: 1rem;
		border: 1px solid #ddd;
		box-shadow: .1rem .1rem .5rem rgb(138, 111, 4);
		overflow: hidden;
		text-align: center;
		h1 {
			@include font-nago($wg: 800, $size: 5rem);
			@include dtxt-shadow;
			line-height: 110%;
			color: $warning;
			text-align: center;
			padding: 2rem 0 2rem 2rem;
			margin: 0;
			font-size: 4rem;
			> span {
				font-size: 2rem;
				color: $primary;
			}
		}
		.j-exp-list {
			width: 80% !important;
			margin: 0 auto 2rem;
			padding: 1rem;
			color: $primary;
			border-radius: 1.5rem !important;
			background: $blue-grey-2;
			@include font-nago($wg: 800, $size: 1.7rem);
			@include dtxt-shadow;
			.j-exp-txt {
				display: block !important;
				color: $blue-grey-9 !important;
				> b {
					display: inline !important;
					font-size: 1.4rem;
				}
			}
		}
		&::after {
			@include after-bg($bg-src: 'src/assets/fd-2.jpg', $position: absolute);
			background-position: 0 -8rem;
			left: 0;
			top: 0;
		}
	}
	&.after-change, &.check-tggr {
		> section {
			&::after {
				background-image: url('src/assets/fd-1.jpg') !important;
			}
		}
	}
}
</style>