
/*Zadanie 4*/

/*1*/

var allClass =document.querySelectorAll(".sample_class");

function getTag(elements){
    var tab=[];

    for (var i=0;i<elements.length;i++){
        tab.push(elements[i].tagName);
    }

    return tab;
}

getTag(allClass);

/*2*/

var sampleId =document.querySelector("#sample_id");

function getClass(element){
    var tab=[];

    for (var i=0;i<element.classList.length;i++){
        tab.push(element.classList[i]);
    }

    return tab;
}

getClass(sampleId);

/*3*/

var listEl =document.querySelectorAll(".sample_class_2 ul li");

function getInnerText(elements){
    var tab=[];

    for (var i=0;i<elements.length;i++){
        tab.push(elements[i].innerText);
    }

    return tab;
}

getInnerText(listEl);

/*4*/

var linksAll =document.querySelectorAll("[href]");

function getAddress(elements){
    var tab=[];

    for (var i=0;i<elements.length;i++){
        tab.push(elements[i].href);
    }
    return tab;
}

getAddress(linksAll);

/*5*/

var sampleClass3 =document.querySelector(".sample_class_3").children;

getTag(sampleClass3);


console.log('1. Szukanie nazw tagów');
console.log('a)');


/*********************************************
 ***** Rozwiązanie pierwsze (starego typu)*****
 **********************************************/


var sampleClassElements = document.getElementsByClassName('sample_class');

function getTag(elements) {
    var tagsList = [];
    for(var i = 0; i < elements.length; i++) {
        tagsList.push(elements[i].tagName);
    }
    console.log(tagsList);
    return tagsList;
}

getTag(sampleClassElements);

/*********************************************
 ***** Rozwiązanie drugie (nowego typu)*****
 **********************************************/
console.log('1. Szukanie nazw tagów');
console.log('b)');


getTagES6 = elements => {
    let tagsList = [];

   tagsList.push(Array.from(elements).map( el => el.tagName));
   console.log(tagsList);
   return tagsList;
}

getTagES6(sampleClassElements);

console.log('-------------------------------------');







console.log('2. Szukanie nazw klas:');

var elementId = document.getElementById('sample_id');

function getClass(element) {

    var nodeClassList = element.classList;
    var array = [];

    for (var i = nodeClassList.length >>> 0; i--;) {
        // inny rodzaj przypisywania elementow arraya
        // do kolejnego arraya
        array[i] = nodeClassList[i];
    }
    
    console.log(array);
    return array;
}

getClass(elementId);

console.log('-------------------------------------');







console.log('2. Szukanie tekstu:');

var listOfSampleClassElement = document.querySelectorAll('.sample_class_2 > ul > li');

//ROZWIAZANIE ES6

function getInnerText(elements) {
    // przeksztalcanie nodelist na array z 
    // wykorzystaniem spread operatora
   return [...elements].map(el => el.textContent);
}
console.log(getInnerText(listOfSampleClassElement));


console.log('-------------------------------------');







console.log('4. Szukanie adresów linków:');

var allLinks = document.querySelectorAll('a');


function getAddress(elements) {
    let emptyArray = [];
    let arr = [];
    
    let arrOfLinks = [...elements].map(el => el.getAttribute('href'));
    arr = emptyArray.concat(arrOfLinks);
    return arr;
}

console.log(getAddress(allLinks));

console.log('-------------------------------------');







console.log('5. Szukanie tagów dzieci:');

var sampleClass3Element = document.querySelector('.sample_class_3');


//roznica miedzy children a childnodes
var sampleClass3Children = sampleClass3Element.children;
//var sampleClass3ChilNodes = sampleClass3Element.childNodes;
//console.log(sampleClass3ChilNodes);

getTag(sampleClass3Children);
