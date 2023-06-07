<template>
	<div id="step-main" ref="stepMain" v-show="mounted_chkr">
		<section>
			<h1 class="text-h1">게임 타입을 선택하세요</h1>
			<div>
				<QmButton
					title="기본모드"
					size="36px"
					color="primary"
					:sound="require('src/assets/next_step.mp3')"
					:fn="nextGame"
				/>
				<QmButton
					title="탈출모드"
					size="36px"
					color="negative"
					:sound="require('src/assets/next_step.mp3')"
					:fn="escapeGame"
				/>
				<QmButton
					title="홈으로"
					size="36px"
					:sound="require('src/assets/normal_02.mp3')"
					color="warning"
					:fn="gotoHome"
				/>
			</div>
		</section>
	</div>
</template>

<script setup>
import { ref, provide, onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import QmButton from 'src/stepA/QmButton.vue'
import pObj from 'src/inc/js/onLoadEvt.js'

const store = useStore()
const age = ref(0)

// 처음 로드되는 화면 제어
const stepMain = ref(null)
const mounted_chkr = ref(false)
onMounted(() => pObj.playInStepB(stepMain.value, mounted_chkr))

const nextGame = () => pObj.playOut(stepMain.value, store, 'C') // 기본모드
const escapeGame = () => pObj.playOut(stepMain.value, store, 'CE') // 탈출모드
const g_sojJ = () => {
	age.value++
	return false
}
</script>

<style lang="scss" scoped>
div#step-main {
	@include setPos($zIndex: 7);
	width: 100%;
	height: 100vh;
	font-family: $bhs-font;
	display: flex;
	justify-content: center;
	align-items: center;
	h1 {
		font-size: 6.5rem;
		letter-spacing: -0.5rem;
		color: #f9f9f9;
		text-align: center;
		@include dtxt-shadow($color: $warning, $effect: 5px);
	}
	div {
		display: flex;
		justify-content: center;
		gap: 1rem;
	}
	&::after {
		@include after-bg(/* $bg-src: 'src/assets/step-a.jpg', */);
	}
}
</style>