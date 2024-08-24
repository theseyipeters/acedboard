export const scrollToElement = (containerRef, start, end, duration) => {
	const startTime = performance.now();

	const animateScroll = (currentTime) => {
		const timeElapsed = currentTime - startTime;
		const progress = Math.min(timeElapsed / duration, 1);
		const easeInOutQuad = (t) =>
			t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

		const amountScrolled = easeInOutQuad(progress) * (end - start);
		containerRef.current.scrollTop = start + amountScrolled;

		if (progress < 1) {
			requestAnimationFrame(animateScroll);
		}
	};

	requestAnimationFrame(animateScroll);
};
