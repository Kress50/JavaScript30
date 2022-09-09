function date() {
	const date = new Date();
	const seconds = date.getSeconds();
	const minutes = date.getMinutes();
	const hours = date.getHours();
	document.querySelector(".second-hand").style.transform = `rotate(${
		(seconds * 360) / 60 + 90
	}deg)`;
	document.querySelector(".min-hand").style.transform = `rotate(${
		(minutes * 360) / 60 + 90
	}deg)`;
	document.querySelector(".hour-hand").style.transform = `rotate(${
		(hours * 360) / 12 + 90
	}deg)`;
}

setInterval(date, 1000);
