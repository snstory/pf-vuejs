const _ = require('lodash')

export function m_gameStep (state, nowStep) {
	state.gameStep = nowStep
}

export function m_playersUpdate(state, newList) {
	state.players = newList
}

export function playerLogOut(state, index) {
	_.remove(state.players, (value, idx) => {
		return index === idx
	})
}

// 플레이어 순서 섞기
export function shufflePlayers(state) {
	state.players = _.shuffle(state.players)
}

// 술래 추가, 제거 하기
export function m_taggers(state, tagger) {
	if (_.includes(state.taggers, tagger.value)) {
		// 이미 술래인 경우 탈출
		_.pull(state.taggers, tagger.value)
	} else {
		// 아닌 경우 추가
		state.taggers.push(tagger.value)
	}
}

// 술래모두탈출!
export function resetGame(state) {
	state.taggers = []
}