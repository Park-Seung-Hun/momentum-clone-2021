/* 
  clockContainer = div의 클래스명을 받아오는 변수
  cloclTitle = div의 자식 h1의 클래스 명을 받아오는 변수
*/
const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");
  
// 시간을 구하는 함수 - 새로고침해야 시간 갱신 
function getTime(){
  const date=new Date(),
    minutes=date.getMinutes(),
    hours=date.getHours(),
    seconds=date.getSeconds();
    // 삼항 연산자 - ? if, :는 else
    clockTitle.innerText=`${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds<10 ? `0${seconds}`: seconds }`;
}
function init(){
  getTime();
  setInterval(getTime,1000);

}

init();