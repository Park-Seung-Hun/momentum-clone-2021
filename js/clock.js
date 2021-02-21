/* 
  clockContainer = div�� Ŭ�������� �޾ƿ��� ����
  cloclTitle = div�� �ڽ� h1�� Ŭ���� ���� �޾ƿ��� ����
*/
const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");
  
// �ð��� ���ϴ� �Լ� - ���ΰ�ħ�ؾ� �ð� ���� 
function getTime(){
  const date=new Date(),
    minutes=date.getMinutes(),
    hours=date.getHours(),
    seconds=date.getSeconds();
    // ���� ������ - ? if, :�� else
    clockTitle.innerText=`${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds<10 ? `0${seconds}`: seconds }`;
}
function init(){
  getTime();
  setInterval(getTime,1000);

}

init();