// Step 1: Get DOM Elements
const input = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

// Step 2: Add Button Click Event
addBtn.addEventListener("click", () => {
  const taskText = input.value.trim();

  if (taskText !== "") {
    // Step 3: Create Task Item
    const li = document.createElement("li");
    li.className = "task-item";

    li.innerHTML = `
      <span class="task-text">${taskText}</span>
      <div class="task-buttons">
        <button class="complete-btn">✓</button>
        <button class="delete-btn">✗</button>
      </div>
    `;

    // Step 4: Add to List
    taskList.appendChild(li);

    // Step 5: Clear input
    input.value = "";

    // Step 6: Add Complete & Delete Functionality
    const completeBtn = li.querySelector(".complete-btn");
    const deleteBtn = li.querySelector(".delete-btn");

    completeBtn.addEventListener("click", () => {
      li.classList.toggle("completed");
    });

    deleteBtn.addEventListener("click", () => {
      li.remove();
    });
  }
});
