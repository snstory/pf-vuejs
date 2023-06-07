<template>
	<div></div>
</template>

<script>
import { inject } from 'vue'

export default {
	setup() {
		const notFind = inject('notFind')

		return {
			notFind
		}
	},
	data() {
		return {
			sound: require('src/assets/all_success.mp3')
		}
	},
	methods: {
		soundPlay () {
			const audio = new Audio( this.sound )
			audio.play()
		}
	},
	watch: {
		notFind (value) {
			// console.log('notFind', value)
			if (value) {
				this.soundPlay()
			}
		}
	}
}
</script>

<style lang="scss" scoped>
div {
	position: absolute;
	left: -9999rem;
	top: -9999rem;
	width: 1px !important;
	height: 1px !important;
	overflow: hidden;
	z-index: -9999;
	visibility: hidden !important;
}
</style>
