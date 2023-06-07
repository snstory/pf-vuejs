const _ = require('lodash')

// 게임순서
export function g_gameStep (state) {
	return state.gameStep
}

export function g_players (state) {
	return state.players
}

export function g_taggers (state) {
	return state.taggers
}

export function g_fst_players (state) {
	return state.players[0]
}


/* 
	======================== 아래는 현재 사용 보류 ========================
*/
// 기쁨으로 여호와께 노래하라
export function g_sojJ (state) {
	return state.sojJ
}

// 오리지널송
export function g_Gsongs (state) {
	return state.Gsongs
}

// 오리지널송 (어린이)
export function g_GsKids (state) {
	return state.GsKids
}

// 혹은 랜덤으로 선택하는 getter 함수 생성
export function g_allSongs (state) {
	return [state.sojJ, state.Gsongs, state.GsKids]
}
