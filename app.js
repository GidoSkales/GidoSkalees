// A program to convert underscore variables to camelCase
const container = document.querySelector("#cont");
const button = document.querySelector(".btn");
const display = document.querySelector(".show");



button.addEventListener("click", function () {
	const camelCase = (variable) => {
		const splitted = variable.split('_');
		const camelCase = splitted.map((word, index) => {
			if (index === 0) {
				return word;
			}
			
			return !word[0] ? '' : word[0].toUpperCase() + word.slice(1);
		}   ).join('');
		
		return camelCase;
	}
	display.textContent = camelCase;
	
	document
	.querySelector(".btn-clear")
	.addEventListener("click", function () {
		display.textContent = "";
	});
	
});

