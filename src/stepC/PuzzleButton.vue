<template>
	<li
		@click="buttonSound(fnVal, { normal: require('src/assets/pzz_open.mp3'), find: require('src/assets/find_caleb.mp3') })"
		:style="{ backgroundColor: randColor.bgColor, color: randColor.txtColor }"
		:class="{ clickDone: fnB(fnVal) && pzVal !== fnVal }"
	>
		<strong>{{ fnVal }}</strong>
		<IconLayer v-if="fnB(fnVal) && pzVal !== fnVal" />
	</li>
</template>

<script>
import IconLayer from 'src/stepC/IconLayer.vue'
import rdObj from 'src/inc/js/randomColor.js'

export default {
	components: { IconLayer },
	setup() {
		const randColor = rdObj.randomColor()
		return {
			randColor
		}
	},
	props: {
		fnA: { type: Function, default: () => console.log('Empty Function!') },
		fnB: { type: Function, default: () => console.log('Empty Function!') },
		fnVal: { type: Number, default: -1 },
		pzVal: { type: Number, default: -1 },
	},
	data() {
		return {
			dbl_sheild: false,
		}
	},
	methods: {
		buttonSound (val, opt) {
			if (this.fnB(this.fnVal) && this.pzVal !== this.fnVal) return

			let audio = null
			// console.log(`${val} : ${this.pzVal}`)
			if (val === this.pzVal) { // 주니를 찾은 경우
				audio = new Audio(opt.find)
			} else { // 기본
				audio = new Audio(opt.normal)
			}
			audio.play()
			this.fnA(val)
		}
	},
	// mounted() {
	// 	console.log(this.pzVal)
	// },
}
</script>

<style lang="scss" scoped>
li {
	position: relative;
	display: flex;
	justify-content: space-around;
	align-items: center;
	align-content: center;
	gap: .5rem;
	min-height: 8rem;
	padding: .5rem !important;
	line-height: 100%;
	background-color: $light-blue-8;
	border-radius: .5rem;
	box-shadow: 1px 1px 5px rgba(0, 0, 0, .8);
	color: #fff;
	font-size: 7rem !important;
	font-family: 'Luckiest Guy', cursive !important;
	cursor: pointer;
	overflow: hidden;
	opacity: .9;
	&.clickDone {
		opacity: 1 !important;
		cursor: inherit !important;
	}
	&:hover {
		background-color: #AE30BF !important;
		color: #fff !important;
		opacity: 1;
	}
	> div {
		position: absolute;
		left: 0;
		top: 0;
		z-index: 100;
		width: 100%;
		height: 100%;
	}
}
</style>