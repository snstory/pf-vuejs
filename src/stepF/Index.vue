<template>
	<div id="step-main">
		<section>
			<h1 class="text-h1">노래를 선택하는 중입니다</h1>
			<p>
				<!-- 선택한 노래의 버튼이 보임 -->
				<q-spinner-cube color="indigo" size="lg" />
				<q-btn
					@click="g_sojJ()"
					size="36px"
					class="q-px-xl q-py-xs"
					color="warning"
					label="오리지널 송 중에서"
					loading
				/>
				<q-btn
					@click="g_sojJ()"
					size="36px"
					class="q-px-xl q-py-xs"
					color="primary"
					label="기쁨으로 노래하라 중에서"
				/>
				<q-btn
					@click="g_sojJ()"
					size="36px"
					class="q-px-xl q-py-xs"
					color="accent"
					label="어린이 노래 중에서"
				/>
			</p>
		</section>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const age = ref(0)
const g_sojJ = () => {
	age.value++
	return false
}
</script>

<style lang="scss" scoped>
div#step-main {
	@include setPos($zIndex: 6);
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
	p {
		display: flex;
		justify-content: center;
		gap: 1rem;
	}
	&::after {
		@include after-bg(/* $bg-src: 'src/assets/step-a.jpg', */);
	}
}
</style>