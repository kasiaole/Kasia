/*Zadanie5*/


var button =document.querySelectorAll("button");
var container =document.querySelector("#container");

for (var i=0;i<button.length;i++){
    button[i].addEventListener("click",function(){
        container.innerText=this.dataset.text;
    });
}

/************************************************************
 **** Rozwiązanie pierwsze (przypisanie poprzez tablice)****
 ************************************************************/

 var buttons = document.querySelectorAll('button');
 var container = document.querySelector('#container');

// aktualnie uzywa sie do celow iteracyjnych innych narzedzi
// niz petla for ;P
//  for( var i = 0; i < buttons.length ; i++) {
//      buttons[i].addEventListener('click', showButtonAtt);
//  }

//  function showButtonAtt() {
//      //czesto mozna spotkac sie z self = this
//     var button = this;
//     var buttonText = button.dataset.text;
//     container.innerHTML = buttonText;
//  }


 /************************************************************
  **** Rozwiązanie drugie (event bubbling)****
  ************************************************************/
document.addEventListener('click', function(event){
    if (event.target.tagName === 'BUTTON') {
        container.textContent = event.target.dataset.text;
    }
});
