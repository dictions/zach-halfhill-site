// Compile styles
import './styles/main.scss';

// Pick a random logo
const placeholder = document.querySelector('.header__logotype-placeholder');
const logos = document.querySelectorAll('.header__logotype-img');
let index = Math.floor(Math.random() * logos.length);
let previousIndex;

if (logos.length > 0) {
	// Try to load previous logo to prevent defaults
	try {
		previousIndex = Number(localStorage.getItem('previousIndex'));
	} catch (e) {
		throw new Error(e);
	}

	// Pick a different logo if duplicate found
	while (index === previousIndex) {
		index = Math.floor(Math.random() * logos.length);
	}

	// Set previous logo to prevent defaults
	try {
		localStorage.setItem('previousIndex', index);
	} catch (e) {
		throw new Error(e);
	}

	const currentLogo = logos[index];

	currentLogo.onload = () => {
		currentLogo.classList.add('visible');
		placeholder.classList.remove('visible');
	};

	currentLogo.src = currentLogo.dataset.src;
}

// Mobile social classes
if ('ontouchstart' in document.documentElement) {
	document.body.classList.add('touch-browser');
}