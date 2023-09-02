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
import HeaderComp from "@/comp/HeaderComp.vue";

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
function onKeyUp(event: KeyboardEvent) {
	if (event.key == "Enter") {
		save();
	}
}
</script>

<template>
	<HeaderComp>
		<template v-slot:title>Tanuló szerkesztése</template>
		<template v-slot:right-buttons>
			<button class="header-button" @click="remove">
				<span class="icon" v-html="binIcon"></span>
			</button>
		</template>
	</HeaderComp>
	<div class="form">
		<div class="form-label">Tanuló neve</div>
		<input class="input" v-model="studentName" @keyup="onKeyUp" />
	</div>
	<button class="action-button" @click="save">
		<span class="icon large" v-html="checkIcon"></span>
	</button>
</template>

<style scoped></style>
