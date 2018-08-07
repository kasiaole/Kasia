// Dodatkowe rozwiązanie

document.addEventListener("DOMContentLoaded", function(event)
{
    var button1=document.querySelector("#button-1");
    var button2=document.querySelector("#button-2");
    var button3=document.querySelector("#button-3");
    var listAll =document.querySelector("ul");


    button1.addEventListener("click",function(){
        var newLi =document.createElement("li");
        listAll.appendChild(newLi);
        newLi.innerText="chleb";
    });

    button2.addEventListener("click",function(){
        var lastEl =document.querySelector("ul li:last-child");
        lastEl.parentElement.removeChild(lastEl);
    });

    button3.addEventListener("click",function(){
        var toClone=document.querySelector("ul").children[1];
        var newEl=toClone.cloneNode(true);
        listAll.appendChild(newEl);
    });

});



document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelector('#buttons');
    var shoppingList = document.querySelector('#shopping-list');

    // jeszcze mozna dodac ifa zeby to nie działało
    // gdy nie ma wystarczajacej ilosci produktow
    // czy cos w tym stylu
    buttons.addEventListener('click', function (event) {
        var button = event.target;
            if (button.id === 'button-1') {
                // ewentualnie insertadjacenthtml
                html = document.createElement('li');
                html.textContent = 'chleb';
                shoppingList.appendChild(html);
            } else if (button.id === 'button-2') {
                // to skasowaloby tekst (child node)
                //shoppingList.removeChild(shoppingList.lastChild);
                shoppingList.removeChild(shoppingList.querySelector('li:last-of-type'));
            } else if (button.id === 'button-3') {
                html = shoppingList.children[1].cloneNode(true);
                shoppingList.appendChild(html);
            }
        
    });
});

