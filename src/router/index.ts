import AddStudentsView from "@/view/AddStudentsView.vue";
import EditStudentView from "@/view/EditStudentView.vue";
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
		{
			path: "/edit-student/:name",
			name: "editStudent",
			component: EditStudentView,
		},
	],
});

export default router;
