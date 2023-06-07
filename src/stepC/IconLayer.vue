<template>
	<div ref="stepMain" v-show="mounted_chkr" :style="BgLayerStyle"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import pObj from 'src/inc/js/onLoadEvt.js'

// 처음 로드되는 화면 제어
const stepMain = ref(null)
const mounted_chkr = ref(false)
onMounted(() => pObj.playInStepB(stepMain.value, mounted_chkr, .1, .3, .2))

const iconsImgs = ref([
	require('src/assets/icon-1.png'),
	require('src/assets/icon-2.png'),
	require('src/assets/icon-3.png'),
	require('src/assets/icon-4.png'),
	require('src/assets/icon-5.png'),
	require('src/assets/icon-6.png'),
	require('src/assets/icon-7.png'),
	require('src/assets/icon-8.png'),
	require('src/assets/icon-9.png'),
	require('src/assets/icon-10.png'),
	require('src/assets/icon-12.png'),
	require('src/assets/icon-13.png'),
	require('src/assets/icon-14.png'),
])
// 퍼블 배경 레이어 랜덤스타일 정의
const ranNum = _.random(0, _.size(iconsImgs.value) - 1)
const BgLayerStyle = {
	backgroundImage: `url(${iconsImgs.value[ranNum]})`,
	backgroundPosition: 'center',
	backgroundSize: 'cover',
	borderRadius: '.5rem'
}
</script>