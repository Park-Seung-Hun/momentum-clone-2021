# momentum_clone-2021
 
### 📖 momentum_clone
> 크롬 확장 프로그램중 하나인 Momentum을 클론 코딩해보았다. <br>

[`momentum clone 결과물`](https://park-seung-hun.github.io/momentum_clone-2021/)<br>

### ✅ 사용 Skills
  1. HTML
  2. CSS
  3. Vanilla JS

### 📒 페이지 구조
> 페이지 구조는 Header와 MainContainer, 그리고 Sidebar로 이루어져 있다. [전체 HTML 코드](https://github.com/Park-Seung-Hun/momentum_clone-2021/blob/main/index.html)
```html
<body>
  <header>
     <search bar> <sidebar button>
  </header>
      
  <main>
   
   <main contents>
     <clock>
     <greeting>
     <toDoList>
   </main contents>
     
   <side bar>
     <weather>
     <calendar>
   </side bar>
  </main>
   
</body>
```

### 📕 주요 기능 
#### `header`
1. Search bar  
```html
<form class="search">
 <!--Search icon-->
 <button class="img-button" type="submit" name="click" value="">
  <i class="fas fa-search"></i>
 </button>

 <!--검색어 입력 창-->
 <input type="text" class="keyword" name="search" maxlength="255" value="" autocomplete="off">
  <select name="whichSearch" class="selectSearch">
    <option id="google" value="google">Google</option>
    <option id="naver" value="naver">Naver</option>
  </select>
</form>
```
   - CSS hover를 이용하여 마우스를 올려 놓을때만 검색 창이 나타나게 설정. [코드 보러가기](https://github.com/Park-Seung-Hun/momentum_clone-2021/blob/main/css/contents/search.css)
   - JS를 이용하여 검색창 기능 구현(Engine 함수) [코드 보러가기](https://github.com/Park-Seung-Hun/momentum_clone-2021/blob/main/js/search.js)

2. Sidebar button
```html
<label for="menuicon" class="menubtn">
 <span></span>
 <span></span>
 <span></span>
</label>
```
  - CSS와 HTML을 이용하여 Sidebar button 구현. 이떄 3개의 span을 정렬하여 메뉴 버튼을 구현했고,checked 변화 값을 이용해 sidebar를 나타나게 해주었다. <br>
  [메뉴 버튼 코드 보러가기](https://github.com/Park-Seung-Hun/momentum_clone-2021/blob/main/css/contents/header.css)<br>
  [Sidebar 효과 코드 보러가기](https://github.com/Park-Seung-Hun/momentum_clone-2021/blob/main/css/contents/header.css#L55)

#### `Main contents`

1. 시계
```html
<div class="js-clock">
 <h1>00:00</h1>
</div>
```
  - JS의 Date객체를 이용해 현재 시각을 나타내는 시계 구현 [시계 코드 보러가기](https://github.com/Park-Seung-Hun/momentum_clone-2021/blob/main/js/clock.js)
  
2. Greeting
```html
<form action="" class="js-form form">
 <input type="text" placeholder="What is your name?" />
</form>
<h4 class="js-greetings greetings"></h4>
```
  - 브라우저의 로컬저장소를 이용해 사용자 이름을 저장하고 greeting 문구를 띄우는 기능 [greeting 코드 보러가기](https://github.com/Park-Seung-Hun/momentum_clone-2021/blob/main/js/gretting.js)
  
3. toDoList
```html
<form class="js-toDoForm toDoForm">
  <input type="text" placeholder="Wirte a todo" class="form"/>
</form>

<ul class="js-toDoList toDoList"></ul>
```
  - 브라우저의 로컬저장소를 이용해 toDolist를 저장하고, html의 ul에 item을 추가하여 todolist 구현 [todolist 코드 보러가기](https://github.com/Park-Seung-Hun/momentum_clone-2021/blob/main/js/todo.js)
  
#### `Sidebar`
1. 날씨
```html
<div class="sidebar__weather">
 <div>
  <span class="js-weather__place"></span>
  <div class="js-weather__info">
  <span></span>
  <span class="js-weather__temp"></span></div>
 </div>
</div>
```

 - OpenWeatherMap에서 제공하는 오픈 API를 이용해 내 위치에서의 날씨 정보를 나타내는 기능 구현 [날씨 코드 보러가기](https://github.com/Park-Seung-Hun/momentum_clone-2021/blob/main/js/weather.js)
   1. 날씨에 맞는 Icon 출력
   2. 기온에 맞는 온도계 색깔 변화 (0도를 기준으로 영하: 파란색, 영상: 빨간색)

2. 달력
```html
<div class="calendar">
 <div class="calendar__header">
   <div class="calendar__year-month"></div>
     <div class="calendar__nav">
       <button class="calendar__nav-btn " onclick="prevMonth()">&lt;</button>
       <button class="calendar__nav-btn " onclick="goToday()">Today</button>
       <button class="calendar__nav-btn " onclick="nextMonth()">&gt;</button>
     </div>
 </div>
 <div class="calendar__main">
   <div class="calendar__days">
     <div class="calendar__day">일</div>
      <div class="calendar__day">월</div>
      <div class="calendar__day">화</div>
      <div class="calendar__day">수</div>
      <div class="calendar__day">목</div>
      <div class="calendar__day">금</div>
      <div class="calendar__day">토</div>
   </div>
   <div class="calendar__dates">
   </div>
 </div>
</div>
```
 - JS와 CSS를 이용해 Calendar를 구현 (Date 객체를 이용해 현재 날짜를 받아와 표시)<br>
   [JS 코드 보러가기](https://github.com/Park-Seung-Hun/momentum_clone-2021/blob/main/js/calendar.js)<br>
   [CSS 코드 보러가기](https://github.com/Park-Seung-Hun/momentum_clone-2021/blob/main/css/contents/calendar.css)

#### `Background`
 - JS의 Math.random() 함수를 이용해 미리 저장된 배경을 랜덤하게 나타나게 하는 기능 
 [코드 보러가기](https://github.com/Park-Seung-Hun/momentum_clone-2021/blob/main/js/bg.js) 
 
### 📘 추가할 기능


### 📙 출처
[노마드 코더](https://nomadcoders.co/)<br>



