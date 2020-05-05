/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import Todo from './todo';
import Project from './project';
import todoList from './todoList';

const dom = (() => {
  function displayTodo() {
    const listContainer = document.querySelector('.list-container');
    const todo = todoList.todos;
    const li = document.createElement('li');
    li.id = 'todo-item';
    todo.forEach(fetch);
    function fetch(todo) {
      li.innerHTML = `
    <h2>${todo.title}</h2>
    <strong id="project-name">${todo.projects()[0].name}</strong>
    <strong id="status" style="background-color: rgb(245, 106, 106);"
      >in progress</strong
    >
    <strong id="date">${todo.date}</strong>`;
      listContainer.appendChild(li);
    }
  }

  function displayProject() {
    let projDisplay = document.querySelector('.project');
    projDisplay.innerHTML = '';
    const proj = todoList.projects;
    proj.forEach(getProjects);
    function getProjects(p) {
      const option = document.createElement('option');
      option.innerHTML = `<option>${p.name}</option>`;
      projDisplay.appendChild(option);
    }
  }

  function createTodo(title, date, desc, project) {
    const todo = new Todo(title, date, desc, project);
    displayTodo();
  }

  function createProject(name) {
    const project = new Project(name);
    displayProject();
    console.log(project);
    console.log(todoList.projects);
  }

  function clearDom() {
    document.getElementById('todo-title').value = '';
    document.getElementById('todo-desc').value = '';
    document.getElementById('todo-date').value = '';
    document.getElementById('project-name').value = '';
  }

  function listentToDom() {
    const formTodo = document.getElementById('form-todo');
    const formProject = document.getElementById('form-project');

    formTodo.addEventListener('submit', (n) => {
      n.preventDefault();
      const title = document.getElementById('todo-title').value;
      const desc = document.getElementById('todo-desc').value;
      const date = document.getElementById('todo-date').value;
      createTodo(title, date, desc);
      clearDom();
    });


    formProject.addEventListener('submit', (p) => {
      p.preventDefault();
      const name = document.getElementById('project-name').value;
      createProject(name);
      clearDom();
    });
  }

  function displaySingleTodo() {}
  return {
    displayTodo,
    displaySingleTodo,
    createProject,
    createTodo,
    listentToDom,
    displayProject,
  };
})();

export default dom;
