import AddStudentsView from "@/view/AddStudentsView.vue";
import EditStudentView from "@/view/EditStudentView.vue";
import GroupSettingsView from "@/view/GroupSettingsView.vue";
import GroupsView from "@/view/GroupsView.vue";
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
		{
			path: "/group-settings/:students+",
			name: "groupSettings",
			component: GroupSettingsView,
		},
		{
			path: "/groups/:groups",
			name: "groups",
			component: GroupsView,
		},
	],
});

export default router;
