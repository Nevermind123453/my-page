window.onload=function(){
let btn = document.querySelector("#contact");
let hide=document.querySelector("#contact-block")
let pn=document.querySelector("#phone");
let ht=document.querySelector("#html1")
let btn2=document.querySelector("#dropdown-button btn2")
   hide.hidden=true;
btn.onclick = function(){
   /*  alert("Привет Ты на страничке Прокопцева Александра"); */
    hide.hidden=false;
}
pn.onclick=function(){
    alert("+779787145023")
}
function viewDiv(){
    ht.style.display = "block";
  };

}
