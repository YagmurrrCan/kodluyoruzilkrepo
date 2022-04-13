
const buttons = document.querySelector("#liveToast");  //Butonların id'si liveToast
const listDOM = document.querySelector("#list")       //Yapılacaklar listesinin altındaki list
var liDOM = document.querySelectorAll("li");    //li'ler
let taskDOM = document.querySelector("#task");
const addButtonDOM = document.querySelector('#liveToastBtn');

let todos = [];    // localStorage'ta todo'lar icin bir liste olusur.

liDOM.forEach( (item) => {
  todos.push(item.innerHTML);
  item.innerHTML += `<button style="padding-right: 5px; padding-top:5px;" class="close">&times</button>`;
});
localStorage.setItem("todos", JSON.stringify(todos));


addButtonDOM.addEventListener('onclick', newElement);

function newElement() {
  if (taskDOM.value.length > 0) {
    addItem(taskDOM.value);
    showToastSuccess();
  } else {
      showToastError();
  }
  taskDOM.value = "";
}

const addItem = (newTodo) => {
  listDOM.innerHTML += `<li>${newTodo}<button style="padding-right: 5px; padding-top:5px;" class="close">&times</button></li>`;
  todos.push(newTodo);
  localStorage.setItem('todos', JSON.stringify(todos));   
}

// TOAST trigger functions
function showToastSuccess() {
  const toastSuccess = document.querySelector('#liveToast.success');
  var toast = new bootstrap.Toast(toastSuccess);
  toast.show();
}

function showToastError() {
  const toastError = document.querySelector('#liveToast.error');
  var toast = new bootstrap.Toast(toastError);
  toast.show();
}

// todo done checked or remove
listDOM.addEventListener('click', clickEvent);
function clickEvent(event) {
  if (event.target.className == 'close') {
      event.target.parentElement.remove();

      let removeTodo = ((event.target.parentElement.textContent).slice(0, -1));
      for (let i = 0; i < todos.length; i++) {
          if (todos[i] == removeTodo) {
              todos.splice(i, 1);
          }
      }
      localStorage.setItem('todos', JSON.stringify(todos));
  }
  else { event.target.classList.toggle('checked'); }
}