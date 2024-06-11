const inputbox=document.querySelector("#input-box");
const itemContainer=document.querySelector("#item-Container");

function addtask (){
     if(inputbox.value=== '')
        alert("you must Write Something");
    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        itemContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputbox.value="";
}

itemContainer.addEventListener("click",function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
    }
},false);
