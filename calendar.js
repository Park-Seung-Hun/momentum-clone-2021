let date = new Date();

function renderCalendar(){
const viewYear = date.getFullYear(),
    viewMonth = date.getMonth();

const prevLast = new Date(viewYear, viewMonth, 0),
    thisLast = new Date(viewYear, viewMonth + 1, 0);

const PLDate = prevLast.getDate(), // 지난달 마지막 날짜
    PLDay = prevLast.getDay(); // 지난달 마지막 요일

const TLDate = thisLast.getDate(), // 이번달 마지막 날짜
    TLDay = thisLast.getDay(); // 이번달 마지막 요일

const prevDates =[],
    thisDates = [...Array(TLDate + 1).keys()].slice(1),
    nextDates = [];
    document.querySelector(".calendar__year-month").textContent=`${viewYear}년 ${viewMonth + 1}월`;

    if(PLDay !== 6){
        for(let i = 0; i < PLDay + 1; i++){
            prevDates.unshift(PLDate - i);
        }
    } // 이전 달을 표현할 날짜 생성 , 토요일(6) 일때는 굳이 그릴 필요가 없음

    for(let i = 1; i < 7 - TLDay; i++){
        nextDates.push(i);
    }// 다음 달을 표현할 날짜 생성

    const dates = prevDates.concat(thisDates, nextDates);
// Dates 정리
    const firstDateIndex = dates.indexOf(1);
    const lastDateIndex = dates.lastIndexOf(TLDate);

    dates.forEach((date,i) => {
        const condition = i >= firstDateIndex && i < lastDateIndex + 1
        ? 'this'
        : 'other';

        dates[i] = `<div class="calendar__date"><span class="${condition}">${date}</span></div>`;
    })

    document.querySelector(`.calendar__dates`).innerHTML = dates.join(``);

    // 오늘 날짜 그리기
    const today = new Date();
    if (viewMonth === today.getMonth() && viewYear === today.getFullYear()){
        
        var check = document.querySelectorAll(".this");
        for(var i=0; i<check.length;i++){
            if (+check[i].innerText === today.getDate()) {
                check[i].classList.add("today");
                break;
            }
        }
    }

    
}

// 이동 
const prevMonth = () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
  }
  
  const nextMonth = () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
  }
  
  const goToday = () => {
    date = new Date();
    renderCalendar();
}

renderCalendar();