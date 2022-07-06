/*
    - Get each element with the class name of "question"
    - Loop through each element returned
    - Add a click event to each element
    - Once clicked, close any open tabs and get the next element sibling (the answer)
    - Toggle the "active" state
    - If the answer is shown, hide. / If the answer is hidden, show.
*/

const questions = document.getElementsByClassName("question");

for (i = 0; i < questions.length; i++) {
	questions[i].addEventListener("click", function () {
		// Close any already open tabs
		for (let j = 0; j < questions.length; j++) {
			if (questions[j].nextElementSibling.style.maxHeight) {
				questions[j].nextElementSibling.style.maxHeight = null;
				questions[j].classList.remove("active");
			}
		}

		this.classList.toggle("active");
		var answer = this.nextElementSibling;
		if (answer.style.maxHeight) {
			answer.style.maxHeight = null;
		} else {
			answer.style.maxHeight = answer.scrollHeight + "px";
		}
	});
}
