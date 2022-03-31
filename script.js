const outputPrevious=document.querySelector('.outputPrevious');
const outputCurrent=document.querySelector('.outputCurrent');

const number = document.querySelectorAll('.number');
const operator=document.querySelectorAll('.operator');
const equal=document.querySelector('.equal');
const clearAll=document.querySelector('.clearAll');
const clearCurr=document.querySelector('.clearCurr');
const calculator=document.querySelector('.calculator');

number.forEach(button => {
  button.addEventListener('click', () => {

    buttonValue = button.value;
    console.log(buttonValue);
    if (buttonValue==='.' && outputCurrent.innerHTML.includes('.')){
      outputCurrent.innerHTML = outputCurrent.innerHTML  ;
    }
    else if(outputPrevious.innerHTML.includes('=')){
      outputCurrent.innerHTML=buttonValue
      outputPrevious.innerHTML = ' '
    }
    else {
     
      outputCurrent.innerHTML = outputCurrent.innerHTML +  buttonValue.toString() ;
    }
  })
})

operator.forEach(button => {
  button.addEventListener('click', () => {
    buttonValue = button.value;  
    outputPrevious.innerHTML = outputPrevious.innerHTML+ outputCurrent.innerHTML+buttonValue.toString();
    outputCurrent.innerHTML = ''
  }) 
 })
 

 equal.addEventListener('click' , () =>{
  outputPrevious.innerHTML = outputPrevious.innerHTML+ outputCurrent.innerHTML;
  ans=eval(outputPrevious.innerHTML)
  if(ans.toString().length>10){
    outputCurrent.innerHTML=ans.toPrecision(10)
  }else{
    outputCurrent.innerHTML=ans
  }
  
  outputPrevious.innerHTML = outputPrevious.innerHTML+ '=';
 })

 clearAll.addEventListener('click' ,()=>{
  outputPrevious.innerHTML = '';
  outputCurrent.innerHTML = '';
 })

clearCurr.addEventListener('click' , ()=>{
  outputCurrent.innerHTML=outputCurrent.innerHTML.toString().slice(0,-1);
})
 

