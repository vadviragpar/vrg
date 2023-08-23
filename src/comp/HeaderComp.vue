<script setup lang="ts">
import { useRouter } from "vue-router";
import arrowLeftIcon from "bootstrap-icons/icons/arrow-left.svg?raw";

defineProps<{
	hideBack?: boolean;
}>();

const router = useRouter();

function goBack() {
	router.back();
}
</script>

<template>
	<div class="header">
		<button class="header-button" @click="goBack" v-if="!hideBack">
			<span class="icon" v-html="arrowLeftIcon"></span>
		</button>
		<div class="header-label"><slot name="title"></slot></div>
		<div class="header-buttons">
			<slot name="right-buttons"></slot>
		</div>
	</div>
</template>

<style scoped>
.header {
	background-color: lch(10 50 260);
	color: white;
	display: flex;
	align-items: center;
	flex-flow: row wrap;
	position: sticky;
	top: 0;
	box-shadow: 0 2px 10px black;
}

.header-label {
	/* text-overflow: ellipsis;
	white-space: nowrap; */
	overflow-wrap: break-word;
	overflow: hidden;
	padding: 10px;
}

.header-buttons {
	margin-left: auto;
	display: flex;
	flex-flow: row wrap;
}
</style>
