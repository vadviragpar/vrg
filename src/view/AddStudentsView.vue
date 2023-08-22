<script setup lang="ts">
import { useRouter } from "vue-router";
import arrowLeftIcon from "../asset/ArrowLeft.svg?raw";
import checkIcon from "../asset/Check.svg?raw";
import { addStudents } from "@/fun/addStudents";
import { splitToLines } from "@/fun/splitToLines";
import { saveStudents } from "@/fun/saveStudents";
import { loadStudents } from "@/fun/loadStudents";
import { ref } from "vue";

/**
 * ideteleportáljuk a routert, hogy navigálhassunk az oldalak között
 */
const router = useRouter();

function goBack() {
	router.back();
}
let studentsString = ref("");
function save() {
	let students = loadStudents();
	let newStudents = splitToLines(studentsString.value);
	let studentsToSave = addStudents(students, newStudents);
	saveStudents(studentsToSave);
	goBack();
}
</script>

<template>
	<div class="header">
		<button class="header-button" @click="goBack">
			<span class="icon" v-html="arrowLeftIcon"></span>
		</button>
		<div class="header-label">Felvétel</div>
	</div>
	<div class="form">
		<div class="form-label">Tanulók neve</div>
		<textarea
			class="students-input"
			rows="10"
			v-model="studentsString"
		></textarea>
	</div>
	<button class="action-button" @click="save">
		<span class="icon large" v-html="checkIcon"></span>
	</button>
</template>

<style scoped>
.students-input {
	font-family: inherit;
	font-size: inherit;
	line-height: inherit;
	background-color: #35363f;
	color: white;
	border: 0;
	border-radius: 5px;
	resize: vertical;
	width: 100%;
	padding: 10px;
}

.form {
	padding: 10px;
	display: flex;
	flex-flow: column;
	gap: 5px;
}

.form-label {
	font-size: 20px;
}
</style>
