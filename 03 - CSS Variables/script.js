// const root = document.querySelector(":root");
// const colorPicker = document.querySelector("#base");
// const blurSlider = document.querySelector("#blur");
// const spacing = document.querySelector("#spacing");

// colorPicker.addEventListener("change", () => {
// 	root.style.setProperty("--color", colorPicker.value);
// });

// blurSlider.addEventListener("change", () => {
// 	root.style.setProperty("--blur", `${blurSlider.value}px`);
// });

// spacing.addEventListener("change", () => {
// 	root.style.setProperty("--padding", `${spacing.value}px`);
// });

const inputs = document.querySelectorAll("input");

function change() {
	const suffix = this.dataset.sizing || "";
	document.documentElement.style.setProperty(
		`--${this.name}`,
		this.value + suffix
	);
}

inputs.forEach((input) => input.addEventListener("change", change));
inputs.forEach((input) => input.addEventListener("mousemove", change));
