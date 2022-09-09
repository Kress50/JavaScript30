const root = document.querySelector(":root");
const colorPicker = document.querySelector("#base");
const blurSlider = document.querySelector("#blur");
const spacing = document.querySelector("#spacing");

colorPicker.addEventListener("change", () => {
	root.style.setProperty("--color", colorPicker.value);
});

blurSlider.addEventListener("change", () => {
	root.style.setProperty("--blur", `${blurSlider.value}px`);
});

spacing.addEventListener("change", () => {
	root.style.setProperty("--padding", `${spacing.value}px`);
});
