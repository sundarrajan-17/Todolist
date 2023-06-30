// localstorage.setItem(key,value)
// localstorage.getItem()
// const score=[100,20,10,20];
// const s=JSON.stringify(score);
// localstorage.setItem('score',s);
// DOM:Document Object Model         getelementbyid(),getelementbyclassname(),getelementbytagname().
// querySelector() --> used to select the selector using css.
//queryselectorall()
//createElement --> is used to add the element
//removechild --> is used to remove the element
//onClick,pageload,mouseout,mouseover
// addeventListener() -->used to add events in webpage.
// function add(num1,num2){
//    return num1+num2;
// }
//       (or)
// const res=(num1,num2) => {return num1+num2};
// preventDefault() --> used to prevent the default browser settings

const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUL = document.getElementById('todos');
const todos = JSON.parse(localStorage.getItem('todos'));
if(todos){
    todos.forEach(todo => addTodo(todo))
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    addTodo()
})

function addTodo(todo){
    let todoText = input.value
    if (todo) {
        todoText = todo.text
    }

    if (todoText) {
        const todoE1 = document.createElement('li');

        if (todo && todo.completed) {
            todoE1.classList.add('completed')
        }
        todoE1.innerText = todoText
        todoE1.addEventListener('click', () => {
            todoE1.classList.toggle('completed')
            updateLS()
        })
        todoE1.addEventListener('contextmenu', (e) => {
            e.preventDefault()
            todoE1.remove()
            updateLS()
        })
        todosUL.appendChild(todoE1)
        input.value = ''

        updateLS()
    }
}
function updateLS(){
    todoE1=document.querySelectorAll('li')

    const t=[]

    todoE1.forEach(todoE1 =>{
        t.push({
            text:todoE1.innerText,
            completed:todoE1.classList.contains('completed')
        })
    })

    localStorage.setItem('todos',JSON.stringify(t))
}