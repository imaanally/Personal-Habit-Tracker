const habitForm = document.querySelector("#habitForm");
const formMessage = document.querySelector("#formMessage");
const habitList = document.querySelector("#habitList");

function displayHabits() {
  if (!habitList) {
    return;
  }

  let habits = JSON.parse(localStorage.getItem("habits")) || [];

  habitList.innerHTML = "";
  if (habits.length === 0) {
    habitList.innerHTML =
      "<p>No habits added yet. Start by adding your first habit.</p>";
    return;
  }

  habits.forEach(function (habit, index) {
    const habitCard = document.createElement("div");

    habitCard.innerHTML = `
        <h3>${habit.name}</h3>
        <p>Category: ${habit.category}</p>
        <p>Goal: ${habit.goal}</p>
        <p>Status: ${habit.completed ? "Completed" : "Not completed"}</p>
        <button onclick="completeHabit(${index})">Complete</button>
        <button onclick="deleteHabit(${index})">Delete</button>
    `;

    habitList.appendChild(habitCard);
  });
}

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

    displayHabits();
  });
}

displayHabits();

function completeHabit(index) {
  let habits = JSON.parse(localStorage.getItem("habits")) || [];

  habits[index].completed = true;

  localStorage.setItem("habits", JSON.stringify(habits));

  displayHabits();
}

function deleteHabit(index) {
  let habits = JSON.parse(localStorage.getItem("habits")) || [];

  habits.splice(index, 1);

  localStorage.setItem("habits", JSON.stringify(habits));

  displayHabits();
}

const totalHabits = document.querySelector("#totalHabits");
const completedHabits = document.querySelector("#completedHabits");

if (totalHabits && completedHabits) {
  let habits = JSON.parse(localStorage.getItem("habits")) || [];

  totalHabits.textContent = "Total habits: " + habits.length;

  let completed = habits.filter(function (habit) {
    return habit.completed === true;
  });

  completedHabits.textContent = "Completed habits: " + completed.length;
}

const tipButton = document.querySelector("#tipButton");
const dailyTip = document.querySelector("#dailyTip");

if (tipButton && dailyTip) {
  tipButton.addEventListener("click", function () {
    dailyTip.textContent = "Small daily actions become big results over time.";
  });
}


