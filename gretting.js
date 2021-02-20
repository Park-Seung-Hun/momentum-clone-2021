const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting =document.querySelector(".js-greetings"),
    visibleForm = document.querySelector(".js-toDoForm");

const USER_LS="currentUser",
SHOWING_CN="showing";
const currentUser=localStorage.getItem(USER_LS);


function loadName(){
    if(currentUser===null){
        askForName();
        visibleForm.style.visibility = "hidden";
    }
    else{
        paintGreeting(currentUser);
    }
}            
function saveName(text){
    localStorage.setItem(USER_LS, text); // ���� ����ҿ� ����
}
function handleSubmit(event){
    event.preventDefault(); // �⺻������ ���µ� �ʿ��� ���� 

    const currentValue = input.value; // �Է¹��� text
    paintGreeting(currentValue);
    saveName(currentValue);
    visibleForm.setAttribute(style,"visibility: visible;");
}
function askForName(){ 
    form.classList.add(SHOWING_CN); // form �±׿� class �� Shwing-cn �߰�
    form.addEventListener("submit",handleSubmit);
}
function paintGreeting(text){
    form.classList.remove(SHOWING_CN); // form �±׿� class �� Shwing-cn ����
    greeting.classList.add(SHOWING_CN); // greeting �±׿� class �� Shwing-cn �߰�
    greeting.innerText=`hello ${text}`;

}



function init(){
    loadName();
}
init();
