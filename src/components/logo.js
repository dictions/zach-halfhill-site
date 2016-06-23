export default ({logoSelector, interval}) => {
	let logoIndex = 0;
	let $logos = [].slice.call(document.querySelectorAll(logoSelector));

	setInterval(() => {
		// Toggle classes
		$logos.forEach($l => {
			$l.classList.remove('visible');
		});
		$logos[logoIndex].classList.add('visible');

		// Iterate index
		if (logoIndex < $logos.length - 1) {
			logoIndex++;
		} else {
			logoIndex = 0;
		}
	}, interval);
};