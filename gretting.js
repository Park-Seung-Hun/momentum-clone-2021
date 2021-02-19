const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting =document.querySelector(".js-greetings");

const USER_LS="currentUser",
SHOWING_CN="showing";


function loadName(){
    const currentUser=localStorage.getItem(USER_LS);
    if(currentUser===null){
        askForName();
    }
    else{
        paintGreeting(currentUser);
    }
}            
function saveName(text){
    localStorage.setItem(USER_LS, text); // 로컬 저장소에 저장
}
function handleSubmit(event){
    event.preventDefault(); // 기본동작을 막는데 필요한 과정 

    const currentValue = input.value; // 입력받은 text
    paintGreeting(currentValue);
    saveName(currentValue);
}
function askForName(){ 
    form.classList.add(SHOWING_CN); // form 태그에 class 명에 Shwing-cn 추가
    form.addEventListener("submit",handleSubmit);
}
function paintGreeting(text){
    form.classList.remove(SHOWING_CN); // form 태그에 class 명에 Shwing-cn 제거
    greeting.classList.add(SHOWING_CN); // greeting 태그에 class 명에 Shwing-cn 추가
    greeting.innerText=`hello ${text}`;

}






function init(){
    loadName();

}
init();
