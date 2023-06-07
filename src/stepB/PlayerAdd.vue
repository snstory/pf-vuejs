<template>
	<div>
		<div class="q-pa-md all-add-wrap">
			<section>
				<q-input
					v-model="playerList"
					filled
					type="textarea"
					autofocus
					placeholder="참가자를 쉼표로 구분하여 추가해 주세요 (예: 홍길동, 김철수, 김유신)"
				/>

				<div class="btns-part">
					<QmButton
						title="확인"
						:sound="require('src/assets/normal_02.mp3')"
						:fn="addPlayer"
						:disable="playerListLen <= 0"
					/>
					<QmButton
						title="취소"
						:sound="require('src/assets/cancle_02.mp3')"
						color="negative"
						:fn="canclePlayerAdd"
					/>
				</div>
			</section>
		</div>
	</div>
</template>

<script setup>
import { computed, inject, ref } from 'vue'
import { useStore } from 'vuex'
import QmButton from 'src/stepA/QmButton.vue'

const store = useStore()
const _ = require('lodash')

// 현재 레이어 출력 제어
const playerAddShow = inject('playerAddShow')
const canclePlayerAdd = () => {
	playerAddShow.value = false
}

// 플레이어 목록 제어
const playerList = ref(null)
playerList.value = store.getters['dbs/g_players'].join(',')
const playerListLen = computed(() => _.size(playerList.value))
const addPlayer = () => {
	store.commit(
		'dbs/m_playersUpdate',
		_.uniq(
			_.map(playerList.value.split(','), _.trim)
			.filter(val => val !== '')
		),
		{ root: true }
	)
	playerAddShow.value = false
}
</script>

<style lang="scss" scoped>
.all-add-wrap {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
	> section {
		width: 80%;
		height: 50vh;
		background-color: white;
		padding: 2rem;
		border-radius: 1rem;
		border: 1px solid #ddd;
		box-shadow: .1rem .1rem .5rem rgb(138, 111, 4);
		overflow: hidden;
		> div.btns-part {
			display: flex;
			justify-content: center;
			gap: 1.5rem;
			padding: 2rem 0;
		}
	}
}
</style>