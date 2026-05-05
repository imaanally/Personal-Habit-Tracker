// Get the form from the habits page
const habitForm = document.querySelector("#habitForm");

// Get the message paragraph
const formMessage = document.querySelector("#formMessage");

// Only run this code if the form exists on the page
if (habitForm) {
  habitForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const habitName = document.querySelector("#habitName").value;
    const habitCategory = document.querySelector("#habitCategory").value;
    const habitGoal = document.querySelector("#habitGoal").value;

    if (habitName === "" || habitCategory === "" || habitGoal === "") {
      formMessage.textContent = "Please fill in all fields.";
      return;
    }

    formMessage.textContent = "Habit added successfully!";
  });
}
