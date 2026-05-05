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
    habitCard.classList.add("habit-card");

    if (habit.completed === true) {
      habitCard.classList.add("completed");
    }

    habitCard.innerHTML = `
      <h3>${habit.name}</h3>
      <p><span class="badge">${habit.category}</span></p>
      <p>Frequency: ${habit.frequency}</p>
      <p>Priority: <span class="priority-badge">${habit.priority}</span></p>
      <p>Goal: ${habit.goal}</p>
      <p>Created: ${habit.dateCreated}</p>
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

    const habitName = document.querySelector("#habitName").value.trim();
    const habitCategory = document.querySelector("#habitCategory").value;
    const habitFrequency = document.querySelector("#habitFrequency").value;
    const habitPriority = document.querySelector("#habitPriority").value;
    const habitGoal = document.querySelector("#habitGoal").value.trim();

    if (
      habitName === "" ||
      habitCategory === "" ||
      habitFrequency === "" ||
      habitPriority === "" ||
      habitGoal === ""
    ) {
      formMessage.textContent = "Please fill in all fields.";
      formMessage.className = "error-message";
      return;
    }

    const habit = {
      name: habitName,
      category: habitCategory,
      frequency: habitFrequency,
      priority: habitPriority,
      goal: habitGoal,
      completed: false,
      dateCreated: new Date().toLocaleDateString(),
    };

    let habits = JSON.parse(localStorage.getItem("habits")) || [];

    habits.push(habit);

    localStorage.setItem("habits", JSON.stringify(habits));

    formMessage.textContent = "Habit saved successfully!";
    formMessage.className = "success-message";

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
const progressBar = document.querySelector("#progressBar");
const progressText = document.querySelector("#progressText");

if (totalHabits && completedHabits && progressBar && progressText) {
  let habits = JSON.parse(localStorage.getItem("habits")) || [];

  totalHabits.textContent = "Total habits: " + habits.length;

  let completed = habits.filter(function (habit) {
    return habit.completed === true;
  });

  completedHabits.textContent = "Completed habits: " + completed.length;

  let percentage =
    habits.length === 0
      ? 0
      : Math.round((completed.length / habits.length) * 100);

  progressBar.style.width = percentage + "%";
  progressText.textContent = percentage + "% complete";
}

const tipButton = document.querySelector("#tipButton");
const dailyTip = document.querySelector("#dailyTip");

if (tipButton && dailyTip) {
  tipButton.addEventListener("click", function () {
    const tips = [
      "Small daily actions become big results over time.",
      "Consistency matters more than perfection.",
      "Track progress, not just results.",
      "Missing one day is not failure. Just return the next day.",
    ];

    const randomTip = tips[Math.floor(Math.random() * tips.length)];

    dailyTip.textContent = randomTip;
  });
}

const clearHabitsBtn = document.querySelector("#clearHabitsBtn");

if (clearHabitsBtn) {
  clearHabitsBtn.addEventListener("click", function () {
    const confirmClear = confirm("Are you sure you want to clear all habits?");

    if (confirmClear === true) {
      localStorage.removeItem("habits");
      displayHabits();
    }
  });
}

const welcomeMessage = document.querySelector("#welcomeMessage");

if (welcomeMessage) {
  welcomeMessage.textContent =
    "Today is a fresh chance to build the habits your future self will thank you for.";
}

