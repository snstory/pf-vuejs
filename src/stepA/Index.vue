<template>
	<div id="step-main" ref="stepMain">
		<section>
			<h1>
				<strong>술래잡기</strong>
			</h1>
			<p>
				<QmButton
					title="게임시작"
					size="36px"
					padding=".9rem 2rem .3rem"
					:sound="require('src/assets/main_start.mp3')"
					:fn="nextGame"
				/>
			</p>
		</section>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import pObj from 'src/inc/js/onLoadEvt.js'
import QmButton from 'src/stepA/QmButton.vue'

const store = useStore()
const stepMain = ref(null)
onMounted(() => pObj.playIn(stepMain.value))
const nextGame = () => pObj.playOut(stepMain.value, store, 'B')
</script>

<style lang="scss" scoped>
div#step-main {
	@include setPos($zIndex: 100);
	width: 100%;
	height: 100vh;
	font-family: $bhs-font;
	display: flex;
	justify-content: center;
	align-items: center;
	h1 {
		> * {
			display: block;
			line-height: .3;
		}
		strong {
			font-size: 5rem;
         font-weight: normal;
		}
		span {
			font-size: 2.5rem;
			margin-top: -3.3rem;
		}
		strong:last-of-type {
			margin-top: -1.3rem;
			font-size: 10rem;
			letter-spacing: -0.5rem;
			word-spacing: -1rem;
			@include dtxt-shadow($color: $warning, $effect: .2rem);
		}
		color: #f9f9f9;
		text-align: center;
		// @include dtxt-shadow($color: $warning, $effect: 5px);
	}
	p {
		text-align: center;
	}
	&::after {
		@include after-bg($bg-src: 'src/assets/fd-2.jpg');
	}
}
</style>