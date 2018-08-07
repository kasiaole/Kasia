// Dodatkowe rozwiązanie

/*1*/
var sampleClassElements = document.querySelectorAll('.sample_class');
 function getTag(elements){
    var classArray = [];
     for (var i=0; i<elements.length; i++){
        classArray.push(elements[i]);
    }
     return classArray;
}
 getTag(sampleClassElements);
 /*2*/
var sample = document.getElementById('sample_id');
 function getClass(element){
    var classArray = [];
    var elementClasses = element.classList;
     for (var i=0; i<elementClasses.length; i++){
        classArray.push(elementClasses[i]);
    }
     return classArray;
}
 getClass(sample);
 /*3*/
var sampleClass2Elements = document.querySelectorAll('.sample_class_2 li');
 function getInnerText(elements){
    var innerTextArray = [];
     for(var i=0; i<elements.length; i++){
        innerTextArray.push(elements[i].innerText);
    }
     return innerTextArray;
}
 getInnerText(sampleClass2Elements);
 /*4*/
var links = document.querySelectorAll('a');
 function getAddress(elements){
    var linksURLS = [];
     for(var i=0; i<elements.length; i++){
        if (elements[i].hasAttribute('href')){
            linksURLS.push(elements[i].getAttribute('href'));
        }
    }
     return linksURLS;
}
 getAddress(links);
 /*5*/
var sampleClass3Children = document.querySelectorAll('.sample_class_3 > *');
getTag(sampleClass3Children); 




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
