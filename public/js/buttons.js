//false buttons
const falseBtns = document.querySelectorAll('#false');

falseBtns.forEach((btn) => {
	btn.addEventListener('click', () => {
		event.preventDefault();
	});
});

//Navigation
const navBtns = document.querySelectorAll('#navlink');

navBtns.forEach((btn) => {
	btn.addEventListener('click', () => {
		//close out navigation with animation
		const checkbox = document.querySelector('#navi-toggle');
		checkbox.checked = false;
	});
});
