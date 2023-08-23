<script setup lang="ts">
import { loadStudents } from "@/fun/loadStudents";
import { renameStudent } from "@/fun/renameStudent";
import { saveStudents } from "@/fun/saveStudents";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import arrowLeftIcon from "../asset/ArrowLeft.svg?raw";
import checkIcon from "../asset/Check.svg?raw";
import binIcon from "bootstrap-icons/icons/trash.svg?raw";
import { removeStudent } from "@/fun/removeStudent";

/**
 * ideteleportáljuk a routert, hogy navigálhassunk az oldalak között
 */
const router = useRouter();
const route = useRoute();

function goBack() {
	router.back();
}
let originalName = route.params.name + "";
let studentName = ref(originalName);
function save() {
	let students = loadStudents();
	let updatedStudents = renameStudent(
		students,
		originalName,
		studentName.value
	);
	saveStudents(updatedStudents);
	goBack();
}
function remove() {
	if (confirm("Biztosan törli a tanulót?")) {
		let students = loadStudents();
		let updatedStudents = removeStudent(students, originalName);
		saveStudents(updatedStudents);
		goBack();
	}
}
</script>

<template>
	<div class="header">
		<button class="header-button" @click="goBack">
			<span class="icon" v-html="arrowLeftIcon"></span>
		</button>
		<div class="header-label">Tanuló szerkesztése</div>
		<div class="header-buttons">
			<button class="header-button" @click="remove">
				<span class="icon" v-html="binIcon"></span>
			</button>
		</div>
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
