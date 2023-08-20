import AddStudentsView from "@/view/AddStudentsView.vue";
import StudentsView from "@/view/StudentsView.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: "/",
			name: "students",
			component: StudentsView,
		},
		{
			path: "/add-students",
			name: "addStudents",
			component: AddStudentsView,
		},
	],
});

export default router;
