<template>
	<div id="step-main" ref="stepMain" v-show="mounted_chkr">
		<section>
			<h1>참가자 목록</h1>
			<div class="j-cover">
				<q-scroll-area class="j-cover-scroll">
					<ul v-if="playerCount <= 0">
						<li class="ment"></li>
					</ul>
					<ul v-else>
						<li v-for="player, i in playerList" :key="i">
							<strong>{{ player }}</strong>
							<q-btn
								@click="playerLogOut(i)"
								size=".5rem"
								class="q-px-xl q-py-xs"
								color="dark"
								label="삭제"
								dense
								padding=".5rem"
							/>
						</li>
					</ul>
				</q-scroll-area>
			</div>

			<div>
				<QmButton
					title="홈으로"
					:sound="require('src/assets/normal_02.mp3')"
					color="negative"
					:fn="gotoHome"
				/>
				<QmButton
					title="참가자 관리"
					:sound="require('src/assets/normal_02.mp3')"
					color="accent"
					:fn="playerASCtrl"
				/>
				<!-- 1명이상 있을 경우 보임 -->
				<QmButton
					v-if="playerCount > 0"
					title="게임시작"
					:sound="require('src/assets/next_step.mp3')"
					:fn="nextGame"
				/>
			</div>
		</section>
	</div>

	<PlayerAdd class="style-add" v-if="playerAddShow" />
</template>

<script setup>
import { ref, provide, onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import PlayerAdd from 'src/stepB/PlayerAdd.vue'
import QmButton from 'src/stepA/QmButton.vue'
import pObj from 'src/inc/js/onLoadEvt.js'

const _ = require('lodash')
const store = useStore()

// 플레이어 목록관련
const playerList = computed(() => store.getters['dbs/g_players'])
const playerCount = computed(() => _.size(store.getters['dbs/g_players']))
const playerLogOut = (index) => store.commit('dbs/playerLogOut', index, { root: true })

// 플레이어 추가화면 제어
const playerAddShow = ref(false)
provide('playerAddShow', playerAddShow)
const playerASCtrl = () => {
	playerAddShow.value = true
	return false
}

// 처음 로드되는 화면 제어
const stepMain = ref(null)
const mounted_chkr = ref(false)
onMounted(() => pObj.playInStepB(stepMain.value, mounted_chkr))
// const nextGame = () => pObj.playOut(stepMain.value, store, 'C')
const nextGame = () => pObj.playOut(stepMain.value, store, 'G')
const gotoHome = () => pObj.playOut(stepMain.value, store, 'A')
</script>

<style lang="scss" scoped>
div#step-main {
	@include setPos($zIndex: 2);
	width: 100%;
	height: 100vh;
	@include font-nago($wg: 800, $size: 1rem);
	display: flex;
	justify-content: center;
	align-items: center;
	background: $dark !important;
	h1 {
		letter-spacing: -1rem;
		color: #f9f9f9;
		@include dtxt-shadow($color: $warning, $effect: 5px);
	}
	p {
		text-align: center;
	}
	&::after {
		@include after-bg($bg-src: 'src/assets/fd-3.png');
	}
	> section {
		width: 80%;
		@include font-nago;
		> h1 {
			font-weight: 700;
			letter-spacing: 0rem;
			text-align: center;
			line-height: 100%;
			margin: 0 0 2rem;
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
				grid-template-columns: repeat(auto-fill, minmax(140px, auto));
				grid-auto-rows: minmax(1rem, auto);
				gap: 1rem;
				list-style: none;
				padding: 0 0 2rem;
				margin: 0;
				li {
					display: flex;
					justify-content: space-around;
					align-items: center;
					align-content: center;
					gap: .5rem;
					padding: .5rem 1rem;
					background-color: $positive;
					color: white;
					border-radius: .5rem;
					border: 1px solid $light-green-9;
					font-size: 1.3rem;
					font-weight: 800;
					box-shadow: .1rem .1rem .3rem $green-10;
				}
				li.ment {
					background: transparent !important;
					border: none !important;
					box-shadow: none !important;
				}
			}
			&+div {
				display: flex;
				justify-content: center;
				gap: 1rem;
				padding: 1rem 0;
				> button {
					font-weight: 700;
				}
			}
		}
	}
}

.style-add {
	@include common-style-add;
}
</style>