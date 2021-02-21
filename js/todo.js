const toDoForm = document.querySelector(".js-toDoForm"),   
    toDoInput = toDoForm.querySelector("input") ,
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS='toDos';

let idNumbers=1;
let toDos = [];


function delToDo(event){
    const btn = event.target; // 어떤 이벤트가 선택 됬는지 알려준다.
    const li = btn.parentNode; // 선택된 버튼의 부모 노드를 알려준다.
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
      });

    toDos = cleanToDos;
    saveToDos();
}

function loadToDos(){
    const loadedToDos=localStorage.getItem(TODOS_LS);

    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        // JSON.parse 자바 스크립트 string을 obj로 전환하는 것.
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
        // 해당 array에 들어간 모든 것 원소들을 다룬다.
    } 
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value=""; // input의 값을 입력 후 초기화.
}

function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
    // JSON.stringify 자바 스크립트 obj를 string으로 전환하는 것.
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const newId = idNumbers;
    idNumbers += 1;

    delBtn.innerText = text;
    delBtn.addEventListener("click", delToDo);
    li.appendChild(delBtn);
    li.id = newId;

    toDoList.appendChild(li);
    const toDoObj={
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
    
}


function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);
}

init();