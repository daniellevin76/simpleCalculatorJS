
const numberButtons = document.querySelectorAll('[data-num]')
const operationButtons = document.querySelectorAll('[data-operation]')
const clearButton = document.querySelector('[data-clear]')
const equalsButton = document.querySelector('[data-equals]')
const display = document.querySelector('.screen')
const output = document.querySelector('[data-screen]')

let currentValue
let evalArray = []
let operatorFlag = 0
let currentNumberString=''
let currentNumber
let result = ''



   function resetCalculator(){
    currentNumberString = ''
    evalArray = []
    operation = undefined
    operatorFlag = 0
  }
   
    function appendValue(value){
      if(value ==='.' && output.includes('.')) return
      output = output.toString() + value.toString()

  }

  function compute(arr){
   return eval(arr[0] + arr[1] + arr[2])
 
  }

  

  function appendNumberString(number) {
    if (number === "." && currentNumberString.includes(".")) {
        currentNumberString+= ''
    } else{ 
        currentNumberString+=number
    }
   
    return currentNumberString
  }

  
numberButtons.forEach(button=>{
    button.addEventListener('click', ()=>{
        if(currentNumberString === ''){
            operatorFlag++
        }
       
       currentNumberString = appendNumberString(button.innerText)
       console.log(operatorFlag)
       display.value = currentNumberString
    })
  })

    
operationButtons.forEach(button=>{

    
        button.addEventListener('click', ()=>{
            if(operatorFlag===1){
            operatorFlag++
            currentNumber = parseFloat(currentNumberString)
           currentNumberString = ''
           evalArray.push(currentNumber)
           evalArray.push(button.innerText)
           console.log(operatorFlag)
           display.value=button.innerText
        }    })
    
  })



clearButton.addEventListener('click', ()=>{
    resetCalculator()
    display.value=''
})


equalsButton.addEventListener('click', ()=>{
    if(operatorFlag===3){
        currentNumber = parseFloat(currentNumberString)
        evalArray.push(currentNumber)

        console.log(evalArray)
        display.value=compute(evalArray)
        
        console.log(operatorFlag)
        console.log(evalArray)
        resetCalculator()
    }
  
})


