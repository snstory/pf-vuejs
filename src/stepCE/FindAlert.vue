<template>
	<div>
		<div class="q-pa-md find-alert-wrap" :class="{ 'after-change': notFind, 'check-tggr': check_tggr }" ref="stepMain">
			<section>
				<h1 v-if="notFind===true">모두 성공!</h1>
				<h1 v-else>
					<template v-if="check_tggr">'{{ nowPlayer }}'님,<br>술래탈출 성공!</template>
					<template v-else>'{{ nowPlayer }}'님 술래<q-icon name="sentiment_very_satisfied"></q-icon></template>
				</h1>
				<QmButton
					title="확인"
					:sound="require('src/assets/find_alert_01.mp3')"
					color="accent"
					:fn="checkNext"
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
const notFind = inject('notFind')
const FindAlertShow = inject('FindAlertShow')
const nextGame = inject('nextGame')
const nowPlayer = inject('nowPlayer')
const check_tggr = inject('check_tggr') // 현재 술래인지 여부

const checkNext = () => {
	// 술래 처리
	if (notFind.value !== true) store.commit('dbs/m_taggers', nowPlayer, { root: true })
	FindAlertShow.value = false
	nextGame()
}

// 처음 로드되는 화면 제어
const stepMain = ref(null)
const mounted_chkr = ref(false)
onMounted(() => pObj.playInStepB(stepMain.value, mounted_chkr))
</script>

<style lang="scss" scoped>
.find-alert-wrap {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
	> section {
		display: flex;
		justify-content: space-around;
		align-items: flex-end;
		gap: 2rem;
		position: relative;
		width: 80%;
		height: 50vh;
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
			padding: 0;
			margin: 0;
		}
		&::after {
			@include after-bg($bg-src: 'src/assets/fd-7.png', $position: absolute);
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