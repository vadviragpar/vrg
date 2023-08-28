<script setup lang="ts">
import HeaderComp from "@/comp/HeaderComp.vue";
import { computed, ref } from "vue";
import checkIcon from "bootstrap-icons/icons/check-lg.svg?raw";
import { useRoute, useRouter } from "vue-router";

let router = useRouter();
let route = useRoute();

// abban az esetben, ha a jelenlévő diákok száma 1, akkor itt nem arrayt kapunk, hanem stringet, de akkor a programunknak semmi értelme, szóval visszatérünk az előző képernyőre
if (!Array.isArray(route.params.students)) {
	router.back();
}

let students = route.params.students as string[];
let groupCount = ref(1);

// hány diák legyen egy csoportban
let studentsPerGroup = ref(1);
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

function onStudentsPerGroupChange(event: Event) {
	// ez az esemény akkor következik be, ha a felhasználó megváltoztatta az input értékét és aztán kikattintott az inputból
	// visszaállítjuk az input tartalmát az utolsó szabályos értékre
	studentsPerGroupInput.value = studentsPerGroupInputSanitized.value + "";
}
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
			<input
				class="input short-input"
				v-model="studentsPerGroupInput"
				@change="onStudentsPerGroupChange"
			/>
			<div>fős csoportokba rendezés</div>
		</div>
		<div class="small info">
			X {{ studentsPerGroupInputSanitized }} fős csoport és<br />
			Y {{ studentsPerGroup - 1 }} fős csoport
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
