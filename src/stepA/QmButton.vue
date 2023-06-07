<template>
	<q-btn
		@click="sPlay(sound)"
		:size="size"
		:class="classString"
		:color="color"
		:padding="padding"
		:label="title"
		:rounded="rounded"
		:disable="disable"
		:dense="dense"
	/>
</template>

<script>
export default {
	props: {
		size: { type: String, default: '1.5rem' },
		classString: { type: String, default: 'q-px-xl q-py-xs' },
		color: { type: String, default: 'primary' },
		padding: { type: String, default: '.5rem 2rem' },
		title: { type: String, default: '확인' },
		sound: { type: String, default: 'src/assets/normal_02.mp3' },
		rounded: { type: Boolean, default: true },
		disable: { type: Boolean, default: false },
		dense: { type: Boolean, default: false },
		fn: { type: Function, default: () => console.log('Empty!') }
	},
	data() {
		return {
			
		}
	},
	methods: {
		sPlay (mp3) {
			const audio = new Audio(mp3)
			audio.play()
			this.fn()
		}
	},
}
</script>

<style lang="scss" scoped>

</style>
