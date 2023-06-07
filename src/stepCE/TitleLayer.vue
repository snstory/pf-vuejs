<template>
	<div ref="stepMain" v-show="mounted_chkr">
		<strong>'{{ nowPlayer }}'<span>님</span></strong>
		<q-btn
			v-if="check_tggr"
			size="1.5rem"
			class="q-px-xl q-py-xs"
			color="yellow-12"
			label="현재술래"
			padding=".5rem 2rem"
			disable
			rounded
		/>
	</div>
</template>

<script setup>
import { inject, onMounted, ref } from 'vue'
import pObj from 'src/inc/js/onLoadEvt.js'

const nowPlayer = inject('nowPlayer')
const check_tggr = inject('check_tggr')

// 처음 로드되는 화면 제어
const stepMain = ref(null)
const mounted_chkr = ref(false)
onMounted(() => pObj.playInStepB(stepMain.value, mounted_chkr))
</script>

<style lang="scss" scoped>
div {
	button {
		margin-left: 1rem;
		font-weight: 800;
		color: $dark !important;
	}
	span {
		font-size: 2.5rem;
	}
}
</style>