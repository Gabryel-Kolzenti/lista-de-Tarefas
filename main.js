const button = document.querySelector('button');

button.addEventListener('click', () => {
    addTask(); 
});

function addTask(params) {
    var taskInput = document.getElementById('taskInput');
    var taskText = taskInput.value.trim(); //trim() -> retira os caracteres vazios
    if (taskText !== '') {
        var taskList = document.getElementById('taskList');
        var li = document.createElement('li');
        li.className = 'taskItem';
        li.innerHTML = taskText + '<button onclick="removeTask(this)">Remover</button>';
        taskList.appendChild(li);
        taskInput.value = "";
    } else { alert ('Por favor, insira uma tarefa válida')};
}


function removeTask(button) {
    var li = button.parentNode; //parentNode -> referencia o elemento pai, nesse caso do que vier de parametro para essa funcao
    var ul = li.parentNode; //parentNode -> referencia o elemento pai ou seja pai do elemento li
    ul.removeChild(li);
}

function borracha(params) {
    var li = button.parentNode; //parentNode -> referencia o elemento pai, nesse caso do que vier de parametro para essa funcao
    var ul = li.parentNode; //parentNode -> referencia o elemento pai ou seja pai do elemento li
    ul.removeChild(li);
}

document.getElementById('taskInput').addEventListener ('keypress', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});