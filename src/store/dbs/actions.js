const _ = require('lodash')

export function changeStep (context, nowStep) {
	context.commit('m_gameStep', nowStep)
}

export function a_playerInfo(context, key) {
	if (key >= _.size(context.state.players)) return false
	return context.state.players[key]
}
