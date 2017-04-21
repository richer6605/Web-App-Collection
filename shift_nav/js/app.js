let items = document.getElementsByClassName('nav-link');
let shiftBar = document.getElementById('shift-bar');
let activeElem;

window.addEventListener('resize', () => {
	console.log('hi');
	let itemOffset = activeElem.offsetLeft;
	let shiftBarOffset = shiftBar.offsetLeft;
	let itemWidth = activeElem.offsetWidth;
	let shiftBarWidth = shiftBar.offsetWidth;
	shiftBar.animate([
	{ "left": `${shiftBarOffset}px`, "width": `${shiftBarWidth}px`},
	{ "left": `${itemOffset}px`, "width": `${itemWidth}px`}
		], {
			duration: 100,
			easing: "ease-in-out"
		});
	shiftBar.style.left = `${itemOffset}px`;
	shiftBar.style.width = `${itemWidth}px`;
});

Array.from(items).forEach(function shift(elem) {
	console.log('hi');
	elem.addEventListener('mouseover', () => {
		if (elem != activeElem) {
			let itemOffset = elem.offsetLeft;
			let shiftBarOffset = shiftBar.offsetLeft;
			let itemWidth = elem.offsetWidth;
			let shiftBarWidth = shiftBar.offsetWidth;
			let shiftBarColor = window.getComputedStyle(shiftBar, null).getPropertyValue('background-color');
			let r = Math.floor(Math.random() * 255);
			let g = Math.floor(Math.random() * 255);
			let b = Math.floor(Math.random() * 255);

			shiftBar.animate([
			{ "left": `${shiftBarOffset}px`, "width": `${shiftBarWidth}px`, "background": `${shiftBarColor}`},
			{ "left": `${itemOffset}px`, "width": `${itemWidth}px`, "background": `rgb(${r}, ${g}, ${b})`}
				], {
					duration: 400,
					easing: "ease-in-out"
				});
			shiftBar.style.left = `${itemOffset}px`;
			shiftBar.style.width = `${itemWidth}px`;
			shiftBar.style.background = `rgb(${r}, ${g}, ${b})`;
			activeElem = elem;
		}
	});
});