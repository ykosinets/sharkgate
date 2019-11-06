
const cnt = document.getElementById("count");
const water = document.getElementById("water");

if(water) {
	let percent = parseInt(cnt.innerText);
	let interval = 0;
	let i = 0;

	interval = setInterval(function () {
		i++;
		cnt.innerHTML = i;
		water.style.transform = 'translate(0' + ',' + (100 - i) + '%)';
		if (percent <= i) {
			clearInterval(interval);
		}
	}, 60);
}
