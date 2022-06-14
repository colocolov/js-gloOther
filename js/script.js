"use strict";

const todoControl = document.querySelector(".todo-control");
const headerInput = document.querySelector(".header-input");
const todoList = document.querySelector(".todo-list");
const todoCompleted = document.querySelector(".todo-completed");

console.log(todoControl);
console.log(headerInput);
console.log(todoList);
console.log(todoCompleted);

// массив задач
const toDoData = [
  // {
  //   text: "Сварить кофе",
  //   completed: false,
  // },
  // {
  //   text: "Помыть посуду",
  //   completed: true,
  // },
];

// отрисовывает все задачи
const render = function () {
  todoList.innerHTML = "";
  todoCompleted.innerHTML = "";

  toDoData.forEach(function (item) {
    // создание структуры html для задачи
    const li = document.createElement("li");
    li.classList.add("todo-item");
    li.innerHTML =
      '<span class="text-todo">' +
      item.text +
      "</span>" +
      '<div class="todo-buttons">' +
      '<button class="todo-remove"></button>' +
      '<button class="todo-complete"></button>' +
      "</div>";

    // проверка на выплненность задачи
    if (item.completed) {
      todoCompleted.append(li);
    } else {
      todoList.append(li);
    }

    // перемещение задачи при ее выполнении
    li.querySelector(".todo-comlete").addEventListener("click", function () {
      item.completed = !item.completed;
      render();
    });
  });
};

todoControl.addEventListener("submit", function (event) {
  // отмена стандартной функции перезагрузки страницы по клику на +
  event.preventDefault();

  // новая задача
  const newTodDo = {
    text: headerInput.value,
    completed: false,
  };

  // добавление в массив новой задачи
  toDoData.push(newTodDo);
  headerInput.value = "";

  render();
});
