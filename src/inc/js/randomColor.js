const _ = require('lodash')

const colorArr = [
	// { bgColor: '#AE30BF', txtColor: '#fff' }, // primary
	// { bgColor: '#D73D2D', txtColor: '#fff' }, // accent
	{ bgColor: '#638C26', txtColor: '#fff' }, // dark
	// { bgColor: '#EDF257', txtColor: '#222' }, // positive
	// { bgColor: '#F2EA79', txtColor: '#111' }, // negative
	// { bgColor: '#31CCEC', txtColor: '#fff' }, // info
	// { bgColor: '#F2C037', txtColor: '#fff' }, // warning
	// { bgColor: '#FA5201', txtColor: '#fff' }, // warning
]

export default {
	randomColor: () => colorArr[_.random(0, _.size(colorArr) - 1)]
}