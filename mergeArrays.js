
const firstInputElement = document.querySelector('#firstInput');
// console.log("firstInputElement", firstInputElement)
const secondInputElement = document.querySelector('#secondInput');
// console.log("secondInputElement", secondInputElement)
const firstInputButton = document.querySelector('#firstInputButton');
const secondInputButton = document.querySelector('#secondInputButton');
const concatInputButton = document.querySelector('#concatInputButton');
const resetButton = document.querySelector('#resetAllButton');
const firstArrayText = document.querySelector('#firstArrayText');
const secondArrayText = document.querySelector('#secondArrayText');
const mergedArrayText = document.querySelector('#mergedArrayText');



let firstArray = [];
let secondArray = [];

function addToFirst(){
    if(firstInputElement.value != ''){
        firstArray.push(firstInputElement.value);
        firstInputElement.value = "";
        firstArrayText.innerText = `FirstArray=> : ${firstArray.join(' ')}`;
    }
    firstInputElement.focus();
}
function addToSecond(){
    if(secondInputElement.value != ''){
        secondArray.push(secondInputElement.value);
        secondInputElement.value = "";
        secondArrayText.innerText = `SecondArray=> : ${secondArray.join(' ')}`;
    }
    secondInputElement.focus();
}


firstInputButton.addEventListener('click', (addToFirst));
firstInputElement.addEventListener('keyup', (e) =>{
    if(e.keyCode == 13){
        addToFirst();
    }
})
secondInputButton.addEventListener('click',(addToSecond))
secondInputElement.addEventListener('keyup', (e) =>{
    if(e.keyCode == 13){
        addToSecond();
    }
})

//TODO : Reset button add
resetButton.addEventListener('click',()=>{
    firstArray = [];
    firstArrayText.innerText = "First Array =>"
    console.log("firstArray", firstArray)
    secondArray = [];
    secondArrayText.innerText = "Second Array =>"
    console.log("secondArray", secondArray)
    mergedArray = []
    mergedArrayText.innerText = "Merged Array => "
})



concatInputButton.addEventListener('click', () =>{
    const mergedArray =(firstArray.concat(secondArray).sort().join(' - '))
    mergedArrayText.innerText = `MergedArray=> : ${mergedArray}`
   
})





function mergeArray(){

    
    // [2,3,5,2,7,9]
    // ['a','b','C22', 'xx']
    firstArray.push(firstInputElement.value);
    // const secondArray = secondArray.push(secondInputElement.value);
    
    
    // mergedArray = (firstArray.concat(secondArray)).sort();
    // console.log("mergedArray -> mergedArray", mergedArray)
}

