<script setup lang="ts">
import checkAllIcon from "../asset/Check2All.svg?raw";
import plusIcon from "../asset/Plus.svg?raw";
import checkIcon from "../asset/checked=yes.svg?raw";
import uncheckIcon from "../asset/checked=no.svg?raw";
import { contains } from "@/fun/contains";
import { removeStudent } from "@/fun/removeStudent";
import { ref } from "vue";

let students = [
	"Uzumaki Naruto",
	"Terry Pratchett",
	"Budha",
	"Cecil",
	"Don Bastiano João Coimbra de la Coronilla y Azevedo",
];
/**
 * a jelenlévő tanulók listája
 */
let studentsPresent = ref(students.slice());

/**
 * megnézi, hogy jelen van e a diák
 * @param student a diák
 */

function studentIsPresent(student: string): boolean {
	return contains(studentsPresent.value, student);
}
/**
 * átállítja a diák állapotát jelenlévőről hiányzóra, vagy vissza
 * @param student a diák
 */
function toggleStudent(student: string): void {
	let isPresent = studentIsPresent(student);
	if (isPresent) {
		studentsPresent.value = removeStudent(studentsPresent.value, student);
	} else {
		studentsPresent.value.push(student);
	}
}
</script>

<template>
	<div class="header">
		<div class="header-label">Tanulók listája</div>
		<div class="header-buttons">
			<button class="header-button">
				<span v-html="checkAllIcon"></span>
			</button>
			<button class="header-button">
				<span v-html="plusIcon"></span>
			</button>
		</div>
	</div>
	<div class="list">
		<div class="student" v-for="student of students">
			<button class="student-name">{{ student }}</button>
			<button class="student-check" @click="toggleStudent(student)">
				<span v-html="checkIcon" v-if="studentIsPresent(student)"></span>
				<span v-html="uncheckIcon" v-else></span>
			</button>
		</div>
	</div>
</template>

<style scoped>
.header {
	background-color: #010520;
	color: white;
	display: flex;
	align-items: center;
	flex-flow: row wrap;
}

.header-label {
	/* text-overflow: ellipsis;
	white-space: nowrap; */
	overflow-wrap: break-word;
	overflow: hidden;
	padding: 9.8px;
}

.header-buttons {
	margin-left: auto;
	display: flex;
	flex-flow: row wrap;
}
.header-button {
	background-color: #010520;
	color: white;
	font-family: inherit;
	font-size: inherit;
	border: 0;
	padding: 5px;
}
.header-button:hover {
	background-color: #010a3e;
}
.header-button:active {
	background-color: #040f61;
}
.student {
	background-color: #ff7d2d;
	color: black;
	border-bottom: 1px solid rgba(0, 0, 0, 0.2);
	display: flex;
}

.student-name {
	flex: 1;
	background-color: #ff7d2d;
	font-size: inherit;
	font-family: inherit;
	border: 0;
	padding: 9.8px;
	overflow-wrap: break-word;
	overflow: hidden;
}
@media (hover: hover) {
	.student-name:hover {
		background-color: #fb9555;
	}
}

.student-name:active {
	background-color: #e05d0b;
}

.student-check {
	background-color: #ff7d2d;
	border: 0;
	padding: 5px;
	color: #2d211a;
}
.student-check:hover {
	color: #000000;
}
.student-check:active {
	color: #900022;
}
</style>
