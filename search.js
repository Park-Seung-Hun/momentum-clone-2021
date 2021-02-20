const searching = searchBar.prototype;

function searchBar(){
    this.keyword = document.querySelector(".keyword");
    this.engine = document.querySelector(".selectSearch");
    this.button = document.querySelector(".img-button");
    this.form = document.querySelector(".search");

    this.Engine();
}

searching.Engine = function(){
    this.form.addEventListener("submit",e => {
        e.preventDefault();
        var newWindow = window.open("about:blank");

        let engine = this.engine.value;  
        let keyword = this.keyword.value;

        if(engine === "google"){
            newWindow.location.href = "https://www.google.co.kr/search?q=" + keyword;
        }
        else if(engine === " naver"){
            newWindow.location.href = "https://search.naver.com/search.naver?query=" + keyword;
        }
    });
}
new searchBar();