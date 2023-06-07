<template>
	<div id="step-main">
		<section>
			<h1 class="text-h1">아무개님, 종류를 선택해 주세요</h1>
			<p>
				<q-btn
					@click="g_sojJ()"
					size="36px"
					class="q-px-xl q-py-xs"
					color="warning"
					label="오리지널 송"
				/>
				<q-btn
					@click="g_sojJ()"
					size="36px"
					class="q-px-xl q-py-xs"
					color="primary"
					label="기쁨으로 노래하라"
				/>
				<q-btn
					@click="g_sojJ()"
					size="36px"
					class="q-px-xl q-py-xs"
					color="accent"
					label="어린이 노래"
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
	@include setPos($zIndex: 5);
	width: 100%;
	height: 100vh;
	font-family: $bhs-font;
	display: flex;
	justify-content: center;
	align-items: center;
	h1 {
		font-size: 5rem;
		letter-spacing: -0.5rem;
		color: #f9f9f9;
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