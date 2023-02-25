console.log('todo');

const form = document.querySelector('form');
const input = form.querySelector('input');
const ul = document.querySelector('.todo_list');

let todos = [];

function saveTodo() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

function removeTodo(e) {
  console.log(e);
  const li = e.target.parentNode;
  li.remove();
  const newTodos = todos.filter(todo => todo.id !== parseInt(li.id));
  todos = newTodos;
  console.log(newTodos);
  saveTodo();
}

function paintTodo(text) {
  console.log(text);

  const li = document.createElement('li');
  const span = document.createElement('span');

  li.innerText = text;
  li.id = todos.length + 1;
  span.innerText = '🙅‍♀️';
  span.addEventListener('click', removeTodo);

  li.appendChild(span);
  ul.appendChild(li);
  todos.push({ id: todos.length + 1, text: text }); //key와 value가 같으면 하나만 적어도 됨
  saveTodo();

  console.log(todos);
}

function handleSubmit(e) {
  e.preventDefault();
  //   console.log(input.value);
  if (input.value === '') {
    return;
  }
  paintTodo(input.value);
  input.value = '';
}

function loadTodo() {
  const localTodos = localStorage.getItem('todos');
  if (localTodos !== null) {
    const parseTodo = JSON.parse(localTodos);
    parseTodo.forEach(todo => paintTodo(todo.text));
  }
}

function init() {
  loadTodo();
  form.addEventListener('submit', handleSubmit);
}

init();
