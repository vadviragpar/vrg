<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import arrowLeftIcon from "../asset/ArrowLeft.svg?raw";
import checkIcon from "../asset/Check.svg?raw";
import { addStudents } from "@/fun/addStudents";
import { splitToLines } from "@/fun/splitToLines";
import { saveStudents } from "@/fun/saveStudents";
import { loadStudents } from "@/fun/loadStudents";
import { ref } from "vue";
import { renameStudent } from "@/fun/renameStudent";

/**
 * ideteleportáljuk a routert, hogy navigálhassunk az oldalak között
 */
const router = useRouter();
const route = useRoute();

function goBack() {
	router.back();
}
let studentName = ref(route.params.name + "");
function save() {
	let students = loadStudents();
	let updatedStudents = renameStudent(
		students,
		route.params.name + "",
		studentName.value
	);
	saveStudents(updatedStudents);
	goBack();
}
</script>

<template>
	<div class="header">
		<button class="header-button" @click="goBack">
			<span class="icon" v-html="arrowLeftIcon"></span>
		</button>
		<div class="header-label">Tanuló szerkesztése</div>
	</div>
	<div class="form">
		<div class="form-label">Tanuló neve</div>
		<input class="name-input" v-model="studentName" />
	</div>
	<button class="action-button" @click="save">
		<span class="icon large" v-html="checkIcon"></span>
	</button>
</template>

<style scoped>
.name-input {
	font-family: inherit;
	font-size: inherit;
	line-height: inherit;
	background-color: #35363f;
	color: white;
	border: 0;
	border-radius: 5px;
	width: 100%;
	padding: 10px;
}
</style>
