<script setup lang="ts">
import HeaderComp from "@/comp/HeaderComp.vue";
import { computed, ref } from "vue";
import checkIcon from "bootstrap-icons/icons/check-lg.svg?raw";
import { useRoute, useRouter } from "vue-router";
import { studentsPerGroupToGroupCount } from "@/fun/studentsPerGroupToGroupCount";
import { groupCountToStudentsPerGroup } from "@/fun/groupCountToStudentsPerGroup";
import { groupStudents } from "@/fun/groupStudents";

let router = useRouter();
let route = useRoute();

// abban az esetben, ha a jelenlévő diákok száma 1, akkor itt nem arrayt kapunk, hanem stringet, de akkor a programunknak semmi értelme, szóval visszatérünk az előző képernyőre
if (!Array.isArray(route.params.students)) {
	router.back();
}

let students = route.params.students as string[];
// csoportok száma
let groupCount = ref(1);
// amit a felhasználó a csoportok száma c. mezőbe gépel
let groupCountInput = ref(groupCount.value + "");
// a fenti javított értéke
let groupCountInputSanitized = computed(() => {
	let valueAsString = groupCountInput.value;
	// a string értéket számmá alakítjuk, ha ez nem lehetséges, az eredmény NaN lesz
	let valueAsNumber = parseInt(valueAsString, 10);
	// a számot csak akkor tesszük be a studentPerGroup-ba, ha az nem nan
	if (!isNaN(valueAsNumber)) {
		// korlátozzuk a studentsPerGroup értékét 1 és a diákok száma közé
		if (valueAsNumber < 1) {
			return 1;
		} else if (valueAsNumber > students.length) {
			return students.length;
		} else {
			return valueAsNumber;
		}
	}
	return groupCount.value;
});

function onGroupCountInput() {
	// ez az esemény minden gombnyomáskor bekövetkezik, és ennek hatására minden más mező értékét hozzáigazítjuk ennek a mezőnek az értékéhez
	studentsPerGroup.value = groupCountToStudentsPerGroup({
		students: students.length,
		groupCount: groupCountInputSanitized.value,
	}).bigStudentsPerGroup;
	studentsPerGroupInput.value = studentsPerGroup.value + "";
}

function onGroupCountChange() {
	// ez az esemény akkor következik be, ha a felhasználó módosította ennek a mezőnek az értékét és kikattintott a mezőből, ennek hatására kijavítjuk amit beírt
	groupCount.value = groupCountInputSanitized.value;
	groupCountInput.value = groupCount.value + "";
}

// hány diák legyen egy csoportban
let studentsPerGroup = ref(students.length);
// mi van az inputban
let studentsPerGroupInput = ref(studentsPerGroup.value + "");
// az input javított értéke
let studentsPerGroupInputSanitized = computed(() => {
	let valueAsString = studentsPerGroupInput.value;
	// a string értéket számmá alakítjuk, ha ez nem lehetséges, az eredmény NaN lesz
	let valueAsNumber = parseInt(valueAsString, 10);
	// a számot csak akkor tesszük be a studentPerGroup-ba, ha az nem nan
	if (!isNaN(valueAsNumber)) {
		// korlátozzuk a studentsPerGroup értékét 1 és a diákok száma közé
		if (valueAsNumber < 1) {
			return 1;
		} else if (valueAsNumber > students.length) {
			return students.length;
		} else {
			return valueAsNumber;
		}
	}
	return studentsPerGroup.value;
});

function onStudentsPerGroupInput() {
	// ez az esemény minden gombnyomáskor bekövetkezik, és ennek hatására minden más mező értékét hozzáigazítjuk ennek a mezőnek az értékéhez
	groupCount.value = studentsPerGroupToGroupCount({
		students: students.length,
		studentsPerGroup: studentsPerGroupInputSanitized.value,
	});
	groupCountInput.value = groupCount.value + "";
}

function onStudentsPerGroupChange(event: Event) {
	// ez az esemény akkor következik be, ha a felhasználó megváltoztatta az input értékét és aztán kikattintott az inputból
	// A studentsPerGroup értékét beállítjuk, a kijavított értékre
	studentsPerGroup.value = studentsPerGroupInputSanitized.value;
	// visszaállítjuk az input tartalmát az utolsó szabályos értékre
	studentsPerGroupInput.value = studentsPerGroup.value + "";
}

let info = computed(() =>
	groupCountToStudentsPerGroup({
		students: students.length,
		groupCount: groupCountInputSanitized.value,
	})
);

function submit() {
	let groups = groupStudents(students, groupCount.value);
	router.push({ name: "groups", params: { groups: JSON.stringify(groups) } });
}
</script>

<template>
	<HeaderComp>
		<template v-slot:title>Csoportosítás</template>
	</HeaderComp>

	<div class="form big">
		<div class="input-wrapper">
			<input
				class="input short-input"
				v-model="groupCountInput"
				@change="onGroupCountChange"
				@input="onGroupCountInput"
			/>
			<div>csoport létrehozása</div>
		</div>
		<div class="input-wrapper">
			<input
				class="input short-input"
				v-model="studentsPerGroupInput"
				@change="onStudentsPerGroupChange"
				@input="onStudentsPerGroupInput"
			/>
			<div>fős csoportokba rendezés</div>
		</div>
		<div class="small info">
			{{ info.bigGroupCount }} csoport {{ info.bigStudentsPerGroup }} fővel
			<template v-if="info.smallGroupCount > 0">
				és<br />
				{{ info.smallGroupCount }} csoport
				{{ info.smallStudentsPerGroup }} fővel
			</template>
		</div>
	</div>
	<button class="action-button" @click="submit">
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
