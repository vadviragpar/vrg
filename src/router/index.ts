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
	],
});

export default router;
