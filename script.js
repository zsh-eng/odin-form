function validityMessage(el) {
	if (el.checkValidity()) {
		el.parentElement.classList = "valid"
	} else {
		el.parentElement.classList = "invalid"
	}
}

function passwordMatch(el) {
	const password = document.querySelector("#password").value
	if (el.value !== password) {
		el.setCustomValidity("invalid")
	} else {
		el.setCustomValidity("")
	}
	validityMessage(el)
}

const inputs = document.querySelectorAll("input")
inputs.forEach((el) => {
	el.addEventListener("focusout", () => validityMessage(el))
	el.addEventListener("input", () => validityMessage(el))
})

const confirmPassword = document.querySelector("#confirm-password")
confirmPassword.addEventListener("input", () => passwordMatch(confirmPassword))
