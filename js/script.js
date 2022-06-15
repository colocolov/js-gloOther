"use strict";

const todoControl = document.querySelector(".todo-control");
const headerInput = document.querySelector(".header-input");
const todoList = document.querySelector(".todo-list");
const todoCompleted = document.querySelector(".todo-completed");

// массив задач
const toDoData = [];

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
    li.querySelector(".todo-complete").addEventListener("click", function () {
      item.completed = !item.completed;
      render();
    });

    // удаление задачи
    li.querySelector(".todo-remove").addEventListener("click", function () {
      li.remove();
    });

    //добавлние и localStorage
    localStorage.setItem("toDoList", JSON.stringify(toDoData));
  });
};

todoControl.addEventListener("submit", function (event) {
  // отмена стандартной функции перезагрузки страницы по клику на +
  event.preventDefault();

  // проверка на заполненность поля ввода
  if (headerInput.value != "") {
    // новая задача
    const newTodDo = {
      text: headerInput.value,
      completed: false,
    };

    console.log(newTodDo);

    // добавление в массив новой задачи
    toDoData.push(newTodDo);
    headerInput.value = "";

    render();
  } else {
    alert("Введите задачу!");
  }
});

// получение данных из localStorage
const loadToDo = function () {
  const toDoList = JSON.parse(localStorage.getItem("toDoList"));

  if (localStorage.getItem("toDoList") !== null) {
    toDoList.forEach(function (item) {
      toDoData.push(item);
      render();
    });
  }
};
loadToDo();
