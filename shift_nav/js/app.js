let items = document.getElementsByClassName('nav-link');
let shiftBar = document.getElementById('shift-bar');

Array.from(items).forEach(function shift(elem) {
	let activeElem;
	elem.addEventListener('mouseover', event => {
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
			console.log(activeElem);
		}
	});
});