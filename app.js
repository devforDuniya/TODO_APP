const form = document.querySelector('#todo-form');
const input = document.querySelector('input');
const ul = document.querySelector('#todo-list');

let todos = [];

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const text = input.value.trim();
  if (text !== '') {
    todos.push({ text: text, completed: false });
    updateList();
    input.value = '';
  }
});

function updateList() {
  ul.innerHTML = '';
  for (let i = 0; i < todos.length; i++) {
    const li = document.createElement('li');
    li.innerHTML = `
      <span class="${todos[i].completed ? 'completed' : ''}">${todos[i].text}</span>
      <button class="delete">Delete</button>
    `;
    ul.appendChild(li);
    const deleteBtn = li.querySelector('.delete');
    deleteBtn.addEventListener('click', function() {
      todos.splice(i, 1);
      updateList();
    });
    const textSpan = li.querySelector('span');
    textSpan.addEventListener('click', function() {
      todos[i].completed = !todos[i].completed;
      updateList();
    });
  }
}
