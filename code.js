const habitForm = document.querySelector("#habitForm");
const formMessage = document.querySelector("#formMessage");

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

    const habit = {
      name: habitName,
      category: habitCategory,
      goal: habitGoal,
      completed: false,
    };

    let habits = JSON.parse(localStorage.getItem("habits")) || [];

    habits.push(habit);

    localStorage.setItem("habits", JSON.stringify(habits));

    formMessage.textContent = "Habit saved successfully!";

    habitForm.reset();
  });
}


