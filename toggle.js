var change = document.querySelector("i")

change.onclick = function(){
    if(change.className==="fa-regular fa-sun"){
       change.className="fa-regular fa-moon"
        document.body.style.backgroundColor="black"
        document.body.style.color="white"
    }else{
        change.className="fa-regular fa-sun"
        document.body.style.backgroundColor="white"
        document.body.style.color="black"
    }
}