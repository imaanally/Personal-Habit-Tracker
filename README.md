# Pink Habits

## Live Site
https://imaanally.github.io/Personal-Habit-Tracker/

## Repository
https://github.com/imaanally/Personal-Habit-Tracker

---

## Project Overview
Pink Habits is a web-based habit tracking application designed to help users build and maintain consistent daily routines. The application provides a simple and structured way for users to create habits, monitor their progress, and stay accountable over time. It focuses on clarity, ease of use, and persistence of data within the browser.

---

## Problem Statement
Many students struggle to maintain consistency with their daily habits due to a lack of simple and accessible tracking systems. Without a clear method to record and monitor progress, it becomes difficult to stay disciplined and achieve long-term goals.

---

## Solution
Pink Habits addresses this problem by offering a straightforward habit tracking system. Users are able to add habits, categorize them, define frequency and priority levels, and track their completion status. The application uses browser storage to retain data, allowing users to continue tracking their habits even after refreshing the page or revisiting the application.

---

## Features
- Create new habits with name, category, frequency, priority, and goal
- Validate user input before adding habits
- Store and retrieve data using localStorage
- Display all saved habits dynamically
- Mark habits as completed or undo completion
- Delete individual habits
- Clear all habits with a confirmation prompt
- Display total habits and completed habits on the homepage
- Visual progress tracking using a progress bar
- Generate random motivational tips on the about page
- Responsive layout for different screen sizes

---

## Technologies Used
- HTML for semantic structure and content
- CSS for styling and responsive design
- JavaScript for interactivity and application logic
- localStorage for client-side data persistence
- Git and GitHub for version control and project hosting

---

## Application Structure
The application is organized into three main pages:

- index.html: Displays an overview of the application, including total habits, completed habits, and a progress bar.
- habits.html: Contains the form for adding new habits and the list of all saved habits.
- about.html: Provides information about the application and includes a dynamic motivational tip feature.

---

## How It Works
When a user submits the habit form, the input is validated to ensure all required fields are completed. A habit object is then created and stored in localStorage. The application retrieves this data and dynamically updates the interface to display the list of habits.

Users can interact with each habit by marking it as complete, undoing completion, or deleting it. All updates are immediately reflected in the interface and saved in localStorage. The homepage reads the stored data to calculate and display progress metrics.

---

## Known Bugs
No known bugs at the moment.

---

## Author
Imaan