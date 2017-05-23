const scrollBar = document.getElementById('scrollBar');
const gallery = document.getElementById('timeline1');
let IsMousedown = false;
let windowWidth = window.innerWidth
let galleryWidth = gallery.offsetWidth;
let	galleryLeft = parseFloat(window.getComputedStyle(gallery, null).getPropertyValue('left'));
let scrollBarWidth = scrollBar.offsetWidth;
let scrollBarLeft = parseFloat(window.getComputedStyle(scrollBar, null).getPropertyValue('left'));
let scrollBarX;

scrollBar.addEventListener('mousedown', e => {
	IsMousedown = true;
	// Calculate the partial width of scrollBar
	scrollBarX = e.clientX - scrollBarLeft;
	// Prevent mousemove-event stuck bug
	e.preventDefault();
});

window.addEventListener('mouseup', () => {
	IsMousedown = false;
});

// Extra Boundary Bug 
window.addEventListener('resize', () => {
	let galleryNewWidth = gallery.offsetWidth;
	let windowNewWidth = window.innerWidth;
	galleryLeft = parseFloat(window.getComputedStyle(gallery, null).getPropertyValue('left'));
	scrollBarLeft = parseFloat(window.getComputedStyle(scrollBar, null).getPropertyValue('left'));
	if (galleryNewWidth != galleryWidth && windowNewWidth == windowWidth) {
		gallery.style.left = `${galleryLeft * (galleryNewWidth - windowNewWidth) / (galleryWidth - windowWidth)}px`;
	} else if (galleryNewWidth == galleryWidth && windowNewWidth != windowWidth && galleryLeft < 0) {
		gallery.style.left = `${galleryLeft + windowNewWidth - windowWidth}px`;
		scrollBar.style.left = `${scrollBarLeft * (windowNewWidth - scrollBarWidth) / (windowWidth - scrollBarWidth)}px`;
	}
	console.log(scrollBarLeft, galleryLeft);
	galleryWidth = galleryNewWidth;
	windowWidth = windowNewWidth;
});

window.addEventListener('mousemove', e => {
	let mousePosition = e.clientX;
	if (IsMousedown && e.buttons == 1 && mousePosition - scrollBarX >= 0 && mousePosition - scrollBarX <= windowWidth - scrollBarWidth) {
		scrollBar.style.left = `${mousePosition - scrollBarX}px`;
		gallery.style.left = `${(scrollBarX - mousePosition) * (galleryWidth - windowWidth) / (windowWidth - scrollBarWidth)}px`;
		galleryLeft = parseInt(window.getComputedStyle(scrollBar, null).getPropertyValue('left')); 
		scrollBarLeft = parseInt(window.getComputedStyle(scrollBar, null).getPropertyValue('left'));
	}
});

