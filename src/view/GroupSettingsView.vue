<script setup lang="ts">
import HeaderComp from "@/comp/HeaderComp.vue";
import { ref } from "vue";
import checkIcon from "bootstrap-icons/icons/check-lg.svg?raw";

let groupCount = ref(1);
let studentsPerGroup = ref(1);
</script>

<template>
	<HeaderComp>
		<template v-slot:title>Csoportosítás</template>
	</HeaderComp>

	<div class="form big">
		<div class="input-wrapper">
			<input class="input short-input" v-model="groupCount" />
			<div>csoport létrehozása</div>
		</div>
		<div class="input-wrapper">
			<input class="input short-input" v-model="studentsPerGroup" />
			<div>fős csoportokba rendezés</div>
		</div>
		<div class="small info">
			X N fős csoport és<br />
			Y N+1 fős csoport
		</div>
	</div>
	<button class="action-button">
		<span class="icon large" v-html="checkIcon"></span>
	</button>
</template>

<style scoped>
.short-input {
	width: calc(3ex + 2 * 10px);
	text-align: center;
}
.input-wrapper {
	display: flex;
	align-items: baseline;
	gap: 1ex;
}
</style>
