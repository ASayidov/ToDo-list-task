let input = document.querySelector('input');
let wrap = document.getElementsByClassName('wrap')[0]
let todoAll= document.getElementsByClassName('toDoWrap')[0]
let todos = []


const addTodo = () => {

let div = document.createElement('div')
div.setAttribute('id','div')
let time = new Date()
let date = time.getDate(),month = time.getMonth(), year = time.getFullYear(),hour = time.getHours(), minute=time.getMinutes();
const todo = {
  id: todos.length,
  title: input.value,
  completed: false,
  date: `${date<10 ? "0"+date :date}.${month<10 ? "0"+month :month}.${year} ${hour<10 ? "0"+hour:hour}:${minute<10 ? "0"+minute :minute}`
}
todos.push(todo)
div.id = todo.id


if(input.value !=='') {div.innerHTML=`
<div class="addedTodo">
      <div class="todo__content">
      <h4 id="todoText">${input.value}</h4>
      </div>
       <div class="buttons">
        <button id="edit">EDIT</button>
        <button id="del" onclick="del(${todo.id})">DELETE</button>
        <button id="compl">COMPLETE</button>
        <p class="time">Inserted ${date<10 ? "0"+date :date}.${month<10 ? "0"+month :month}.${year} ${hour<10 ? "0"+hour:hour}:${minute<10 ? "0"+minute :minute}</p>
      </div>
    </div>
`;

todoAll.append(div)
document.querySelector(".empty").style.display='none'
document.querySelector("#delAll").style.display='inline-block'
input.value =""
  }
};

const del = (id)=> {
  for (let i = 0; i < todoAll.children.length; i++) {
    console.log('ishal');

  }

  console.log(todoAll.children);
}

const deleteAll = () => {
  todoAll.innerHTML=""

}