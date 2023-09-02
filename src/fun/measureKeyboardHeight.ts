export function measureKeyboardHeight() {
	if (window.visualViewport) {
		let pendingUpdate = false;
		function handler(event: Event) {
			if (pendingUpdate) return;
			pendingUpdate = true;

			requestAnimationFrame(() => {
				pendingUpdate = false;

				const viewport = event.target as VisualViewport;

				let keyboardHeight =
					window.innerHeight - viewport.height - viewport.offsetTop;
				document.documentElement.style.setProperty(
					"--keyboard-height",
					keyboardHeight + "px"
				);
			});
		}
		window.visualViewport.addEventListener("resize", handler);
		window.visualViewport.addEventListener("scroll", handler);
	}
}
