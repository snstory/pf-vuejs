<template>
	<div id="game-home">
		<stepA v-if="nowStep==='A'" />
		<stepB v-if="nowStep==='B'" />
		<stepC v-if="nowStep==='C'" />
		<stepCE v-if="nowStep==='CE'" />
		<stepD v-if="nowStep==='D'" />
		<stepE v-if="nowStep==='E'" />
		<stepF v-if="nowStep==='F'" />
		<stepG v-if="nowStep==='G'" />
	</div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

import stepA from 'src/stepA/Index.vue'
import stepB from 'src/stepB/Index.vue'
import stepC from 'src/stepC/Index.vue'
import stepCE from 'src/stepCE/Index.vue'
import stepD from 'src/stepD/Index.vue'
import stepE from 'src/stepE/Index.vue'
import stepF from 'src/stepF/Index.vue'
import stepG from 'src/stepG/Index.vue'

const store = useStore()
const nowStep = computed(() => store.getters['dbs/g_gameStep'])
</script>

<style lang="scss">
#game-home {
	@include after-bg($position: relative, $z-index: 1);
}
</style>