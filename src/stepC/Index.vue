<template>
	<div id="step-main" ref="stepMain" v-show="mounted_chkr">
		<div class="stop-t-game">
			<QmButton
				title="OUT"
				size="1rem"
				:sound="require('src/assets/escape_01.mp3')"
				color="positive"
				padding=".5rem 1rem"
				:fn="nextGame"
			/>
		</div>
		<AllSSound :checker="notFind" />
		<section>
			<h1><TitleLayer v-if="nPShower" /></h1>
			<div class="j-cover">
				<q-scroll-area class="j-cover-scroll">
					<ul>
						<template v-for="i in puzzleCount.size" :key="i">
							<PuzzleButton
								:fnA="findASCtrl"
								:fnB="puzzleDoneNo"
								:fnVal="i"
								:pzVal="puzzleWithCALEB"
							/>
						</template>
					</ul>
				</q-scroll-area>
			</div>
		</section>
	</div>

	<FindAlert class="style-add" v-if="FindAlertShow" />
</template>

<script setup>
import { ref, provide, onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import FindAlert from 'src/stepC/FindAlert.vue'
import IconLayer from 'src/stepC/IconLayer.vue'
import TitleLayer from 'src/stepC/TitleLayer.vue'
import PuzzleButton from 'src/stepC/PuzzleButton.vue'
import AllSSound from 'src/stepC/AllSSound.vue'
import QmButton from 'src/stepA/QmButton.vue'
import pObj from 'src/inc/js/onLoadEvt.js'

const store = useStore()

// 퍼즐갯수 결정
const puzzleCount = ref(null)
puzzleCount.value = {
	size: _.size(store.getters['dbs/g_players']) + 1,
	doneNo: []
}

// 퍼즐 클릭여부 결정
const puzzleDoneNo = (no) => {
	return _.includes(puzzleCount.value.doneNo, no)
}

// 주니가 숨어있는 퍼즐 결정
const puzzleWithCALEB = _.random(1, puzzleCount.value.size)

const playerKey = ref(0)
// 플레이어 순서 제어
store.commit('dbs/shufflePlayers', null, { root: true }) // 섞기
const nowPlayer = ref(null)
nowPlayer.value = store.getters['dbs/g_fst_players']
const nPShower = ref(true)
provide('nowPlayer', nowPlayer)

// 현재 술래여부 체크
const check_tggr = computed(() => {
	return _.includes(store.getters['dbs/g_taggers'], nowPlayer.value)
})

store.dispatch('dbs/a_playerInfo', playerKey.value).then(res => nowPlayer.value = res)
const nextPlayerCtrl = () => {
	playerKey.value ++
	nPShower.value = false
	store.dispatch('dbs/a_playerInfo', playerKey.value).then(res => {
		if (!res) {
			notFind.value = true // 모두 성공
			FindAlertShow.value = true
		} else {
			nowPlayer.value = res
		}
		nPShower.value = true
	})
}

// 퍼즐 클릭시 이벤트 제어
const FindAlertShow = ref(false)
const notFind = ref(false)
provide('FindAlertShow', FindAlertShow)
provide('notFind', notFind) // 모두 성공했을 경우
provide('nowPlayer', nowPlayer) // 현재 플레이어
provide('check_tggr', check_tggr) // 현재 술래인지 여부
const findASCtrl = (no) => {
	if (no === puzzleWithCALEB) {
		return FindAlertShow.value = true
	} else {
		puzzleCount.value.doneNo.push(no)
	}
	nextPlayerCtrl()
	return false
}

// 처음 로드되는 화면 제어
const stepMain = ref(null)
const mounted_chkr = ref(false)
onMounted(() => pObj.playInStepB(stepMain.value, mounted_chkr))

// 다음화면으로 이동함수 전달
const nextGame = () => pObj.playOut(stepMain.value, store, 'D')
provide('nextGame', nextGame)
</script>

<style lang="scss" scoped>
div#step-main {
	@include setPos($zIndex: 3);
	width: 100%;
	height: 100vh;
	@include font-nago($wg: 800, $size: 1rem);
	display: flex;
	justify-content: center;
	align-items: flex-start;
	.stop-t-game {
		position: absolute;
		right: 1rem;
		top: 1rem;
		z-index: 100;
		button {
			font-weight: 800;
			opacity: .5;
			&:hover {
				opacity: 1;
			}
		}
	}
	h1 {
		min-height: 5.5rem;
		font-size: 4.5rem;
		letter-spacing: -1rem;
		color: #f9f9f9;
		@include dtxt-shadow($color: $warning, $effect: 5px);
		button {
			color: $dark !important;
		}
	}
	p {
		text-align: center;
	}
	&::after {
		@include after-bg($bg-src: 'src/assets/fd-5.jpg');
	}
	> section {
		width: 80%;
		@include font-nago;
		> h1 {
			font-weight: 700;
			letter-spacing: 0rem;
			text-align: center;
			line-height: 100%;
			margin: 5rem 2rem 4rem 0;
			> button {
				margin-left: 1.5rem;
				font-weight: 800;
			}
		}
		> .j-cover {
			width: 100%;
			height: 60vh;
			.j-cover-scroll {
				width: 100%;
				height: 100%;
			}
			ul {
				display: grid;
				grid-template-columns: repeat(auto-fill, minmax(120px, auto));
				grid-auto-rows: minmax(1rem, auto);
				gap: 1rem;
				list-style: none;
				padding: 0 1rem 2rem;
				margin: 0;
				li {
					position: relative;
					display: flex;
					justify-content: space-around;
					align-items: center;
					align-content: center;
					gap: .5rem;
					padding: .5rem 1rem;
					background-color: $light-blue-8;
					border-radius: .5rem;
					box-shadow: .1rem .1rem .3rem rgb(0, 0, 0, .8);
					color: #fff;
					font-weight: 800;
					font-size: 3.5rem;
					cursor: pointer;
					overflow: hidden;
					&:hover {
						background-color: $light-green-7;
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
			}
		}
	}
}

.style-add {
	@include common-style-add;
}
</style>