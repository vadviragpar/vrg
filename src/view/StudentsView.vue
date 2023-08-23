<script setup lang="ts">
import checkAllIcon from "../asset/Check2All.svg?raw";
import plusIcon from "../asset/Plus.svg?raw";
import checkIcon from "../asset/checked=yes.svg?raw";
import uncheckIcon from "../asset/checked=no.svg?raw";
import { contains } from "@/fun/contains";
import { removeStudent } from "@/fun/removeStudent";
import { ref } from "vue";
import peopleIcon from "../asset/People.svg?raw";
import { range } from "@/fun/range";
import { useRouter } from "vue-router";
import { loadStudents } from "@/fun/loadStudents";
import HeaderComp from "@/comp/HeaderComp.vue";

/**
 * ideteleportáljuk a routert, hogy navigálhassunk az oldalak között
 */
const router = useRouter();

let students = loadStudents();
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

/**
 * átállítja az összes diák állapotát jelenlévőre, ha volt hiányzó. egyéb esetben pedig hiányzóra */

function toggleAllStudents() {
	if (studentsPresent.value.length < students.length) {
		studentsPresent.value = students.slice();
	} else {
		studentsPresent.value = [];
	}
}
/**
 * átmegyünk az addStudents oldalra úgy, hogy a visszagomb is működjön
 */
function goToAddStudents() {
	router.push({
		name: "addStudents",
	});
}

function goToEditStudent(student: string) {
	router.push({
		name: "editStudent",
		params: {
			name: student,
		},
	});
}
</script>

<template>
	<HeaderComp hide-back>
		<template v-slot:title>Tanulók listája</template>
		<template v-slot:right-buttons>
			<button class="header-button" @click="toggleAllStudents">
				<span class="icon" v-html="checkAllIcon"></span>
			</button>
			<button class="header-button" @click="goToAddStudents">
				<span class="icon" v-html="plusIcon"></span>
			</button>
		</template>
	</HeaderComp>
	<div class="info">
		összes tanuló: {{ students.length }} <br />jelenlévő tanulók:
		{{ studentsPresent.length }} <br />hiányzók:
		{{ students.length - studentsPresent.length }}
	</div>
	<div class="list">
		<div class="student" v-for="student of students">
			<button class="student-name" @click="goToEditStudent(student)">
				{{ student }}
			</button>
			<button class="student-check" @click="toggleStudent(student)">
				<span
					class="icon small"
					v-html="checkIcon"
					v-if="studentIsPresent(student)"
				></span>
				<span class="icon small" v-html="uncheckIcon" v-else></span>
			</button>
		</div>
	</div>
	<button class="action-button">
		<span class="icon large" v-html="peopleIcon"></span>
	</button>
</template>

<style scoped>
.info {
	background-color: #2d211a;
	color: white;
	font-size: 18px;
	padding: 10px;
}

.list {
	padding-bottom: 78px;
	background-color: #ff7d2d;
	flex: 1;
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
	padding: 10px;
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
	padding: 10px;
	color: #2d211a;
}
.student-check:hover {
	color: #000000;
}
.student-check:active {
	color: #900022;
}
</style>
