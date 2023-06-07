import { gsap } from 'gsap'

export default function anig (obj) {
	const scale = obj.scale || 'scale'
	const scaleval = obj.scaleval || 1
	const posXY = obj.pos || 'x'
	const posval = obj.posval || 0

	gsap[obj.toFrom](obj.target, { // 선택기 텍스트, 배열 또는 개체
		[posXY]: posval, // x or y, 모든 속성(CSS에 국한되지 않음)
		[obj.css]: obj.cssval, // camelCase
		[scale]: scaleval,
		backgroundColor: obj.backgroundColor || 'transparent', // camelCase
		duration: obj.duration || 1, // seconds
		delay: 0,
		ease: obj.ease || 'power2.inOut',
		stagger: 0, // 시차 시작 시간
		// paused: true, // default is false
		overwrite: 'auto', // default is false
		repeat: obj.repeat || 0, // 반복 횟수(무한의 경우 -1)
		repeatDelay: 0, // 반복 사이의 초
		repeatRefresh: true, // 각 반복에서 무효화
		yoyo: true, // true이면 > ABBA, false이면 > ABAB
		yoyoEase: true, // 또는 "power2"와 같은 용이성
		immediateRender: false, // 즉시 렌더링
		onStart: obj.onStart,
		onComplete: obj.onComplete,
		// 다른 콜백:
		// 	onStart, onUpdate, onRepeat, onReverseComplete
		// 	각 콜백에는 params 속성도 있습니다.
		// 	즉, onUpdateParams(배열) 
	})
}
