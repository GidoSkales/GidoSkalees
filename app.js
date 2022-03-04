// A program to convert underscore variables to camelCase
const container = document.querySelector("#cont");
const button = document.querySelector(".btn");
const display = document.querySelector(".show");

function camelCase(variable) {
	const text = variable.toLowerCase().trim().split(" ");
	// console.log(text);
	
	for (const [y, x] of text.entries()) {
		if (x.includes("_")) {
			const [c, v] = x.split("_");
			const result = `${c}${v.replace(v[0], v[0].toUpperCase())}${"!".repeat(
				y + 1
			)}`;
			console.log(result);
			return result;
		}
	}
}

button.addEventListener("click", function () {
	const text = container.value.toLowerCase().trim().split(" ");
	// console.log(text);
	
	for (const [y, x] of text.entries()) {
		if (x.includes("_")) {
			const [c, v] = x.split("_");
			const result = `${c}${v.replace(v[0], v[0].toUpperCase())}`;
			// console.log(result);
			display.textContent = result;
			
			document
			.querySelector(".btn-clear")
			.addEventListener("click", function () {
				display.textContent = "";
			});
			return result;
		}
	}
});
