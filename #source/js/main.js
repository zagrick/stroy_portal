let ibg = document.querySelector(".ibg");
let btn = document.querySelector(".btn-burger");
let span = btn.querySelectorAll("span");
let flug = true;
btn.onclick = () => {
	for(s of span) {
		flug ? s.classList.add('active') : 
		s.classList.remove('active');
	}
	flug = !flug;
}