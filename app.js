let input = document.querySelector('input');
let wrap = document.getElementsByClassName('wrap')[0]


const add = () => {

let div = document.createElement('div')
let time = new Date()
let date = time.getDate(),month = time.getMonth(), year = time.getFullYear(),hour = time.getHours(), minute=time.getMinutes();

if(input.value !=='') {div.innerHTML=`
<div class="addedTodo">
      <div class="todo__content">
      <h4 id="todoText">${input.value}</h4>
      </div>
       <div class="buttons">
        <button id="edit">EDIT</button>
        <button id="del" onclick="del()">DELETE</button>
        <button id="compl">COMPLETE</button>
        <p class="time">Inserted ${date<10 ? "0"+date :date}.${month<10 ? "0"+month :month}.${year} ${hour<10 ? "0"+hour:hour}:${minute<10 ? "0"+minute :minute}</p>
      </div>
    </div>
`}
wrap.append(div)
input.value =""
}

const del = ()=> {
  console.log("ishlaid");
}