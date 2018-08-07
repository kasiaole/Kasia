// Dodatkowe rozwiązanie


function bigestSumOfTwoElements(array){
    var result = 0;
     var sortedArray = array.sort(function(a,b){
        return b-a
    });
     if (sortedArray.length === 1){
        result = sortedArray[0];
    } else if (sortedArray.length === 0) {
        result = false;
    } else {
        result = sortedArray[0]+sortedArray[1];
    }
     return result;
}






/*********************************************
***** Rozwiązanie pierwsze (starego typu)*****
**********************************************/
function bigestSumOfTwoElements(array) {

    var returnedValue;
    var largestFirst = 0;
    var largestSecond = 0;

    if (array.length === 0 ) {
        returnedValue = false;          
    } else if (array.length === 1) {
        returnedValue = array[0];
    } else {
        for ( var i = 0; i < array.length; i++ ){
            if( array[i] > largestFirst ) {
                largestSecond = largestFirst;
                largestFirst = array[i];
            } else if ( array[i] > largestSecond) {
                largestSecond = array[i];
            }
        }
        returnedValue = largestFirst + largestSecond;
    }

    console.log(returnedValue);
    return returnedValue;
}

bigestSumOfTwoElements([1, 2, 3, 4]) // => 7
bigestSumOfTwoElements([]) // => false
bigestSumOfTwoElements([76]) // => 76
bigestSumOfTwoElements([23, 45, 17, 12]) // => 68


console.log('------------------------------------');

/**********************************************
 ***** Rozwiązanie drugie (nowego typu)********
 **********************************************/

function bigestSumOfTwoElementsES6(array) {

    let returnedValue;

    if (array.length === 0) {
        returnedValue = false;
    } else if (array.length === 1) {
        returnedValue = array[0];
    } else {
        array.sort();
        let largestFirst = array[array.length - 1];
        let largestSecond = array[array.length - 2];
        returnedValue = largestFirst + largestSecond;
    }

    console.log(returnedValue);
    return returnedValue;
}

bigestSumOfTwoElements([1, 2, 3, 4]) // => 7
bigestSumOfTwoElementsES6([]) // => false
bigestSumOfTwoElementsES6([76]) // => 76
bigestSumOfTwoElementsES6([23, 45, 17, 12]) // => 68

