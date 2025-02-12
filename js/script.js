let plusValue = document.getElementById('plusValue')
document.getElementById('addValue').onclick = function(){
    let inputValue = parseInt(document.getElementById('inputValue').value)
    let placeValue = parseInt(document.getElementById('placeValue').value)
    let sum = inputValue + placeValue
    plusValue.innerHTML = sum 
} 



let minusValue = document.getElementById('minusValue')
document.getElementById('subtractValue').onclick = function(){
    let inputValue = parseInt(document.getElementById('inputValue').value)
    let placeValue = parseInt(document.getElementById('placeValue').value)
    let sum = inputValue - placeValue
    minusValue.innerHTML = sum 
} 



let duplicateValue = document.getElementById('duplicateValue')
document.getElementById('multiplyValue').onclick = function(){
    let inputValue = parseInt(document.getElementById('inputValue').value)
    let placeValue = parseInt(document.getElementById('placeValue').value)
    let sum = inputValue * placeValue
    duplicateValue.innerHTML = sum 
} 


let reduceValue = document.getElementById('reduceValue')
document.getElementById('divideValue').onclick = function(){
    let inputValue = parseInt(document.getElementById('inputValue').value)
    let placeValue = parseInt(document.getElementById('placeValue').value)
    let sum = inputValue / placeValue
    reduceValue.innerHTML = sum 
} 
