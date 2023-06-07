import anig from 'src/inc/js/anig.js'

export default {
	playIn: (target) => {
		anig({
			toFrom: 'from',
			pos: 'y',
			posval: 0,
			scale: 'scale',
			scaleval: 0.1,
			target: target,
			onComplete: () => {
			}
		})
	},
	playOut: (target, store, step) => {
		anig({
			toFrom: 'to',
			pos: 'y',
			posval: 0,
			scale: 'scale',
			scaleval: 0.1,
			duration: .5,
			target: target,
			onComplete: () => {
				store.dispatch('dbs/changeStep', step)
			}
		})
	},
	playInStepB: (target, checker, duraA = 0.1, duraB = 0, scaleA = 0.1, scaleB = 1) => {
		anig({
			toFrom: 'to',
			pos: 'y',
			posval: 0,
			scale: 'scale',
			scaleval: scaleA,
			target: target,
			duration: duraA,
			onComplete: () => {
				checker.value = true
	
				anig({
					toFrom: 'to',
					pos: 'y',
					posval: 0,
					scale: 'scale',
					scaleval: scaleB,
					target: target,
					duration: duraB,
					onComplete: () => {
					}
				})
			}
		})
	}
}
