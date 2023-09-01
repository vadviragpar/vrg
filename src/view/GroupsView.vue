<script setup lang="ts">
import HeaderComp from "@/comp/HeaderComp.vue";
import { useRoute } from "vue-router";

const route = useRoute();
let groups = JSON.parse(route.params.groups + "") as string[][];
</script>

<template>
	<HeaderComp>
		<template v-slot:title>Csoportok</template>
	</HeaderComp>
	<div class="form big">
		<div class="group" v-for="(group, groupIndex) of groups">
			<div>{{ groupIndex + 1 }}. csoport</div>
			<div class="student" v-for="student of group">{{ student }}</div>
		</div>
	</div>
</template>

<style scoped>
.group {
	display: flex;
	flex-flow: column;
	gap: 5px;
	text-align: center;
}
.student {
	background-color: #ff7d2d;
	color: black;
	padding: 10px;
	border-radius: 5px;
}
</style>
