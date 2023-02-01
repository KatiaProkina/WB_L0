document.addEventListener('DOMContentLoaded',function(){
    
    const formOrder = document.querySelector('.order-form')
    const name = document.querySelector('.name')
    const secondName = document.querySelector('.second_name')
    const email = document.getElementById('email')
    const phone = document.getElementById('phone')
    const inn = document.querySelector('.inn')
    const fields = document.querySelectorAll('.field')
    let regEmail = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/
    let regPhone = /^((\+7|7|8)+([0-9]){10})$/

    let missitems = document.querySelector('.missing-products')
    let items = document.querySelector('.items-in-the-cart')

 

    let calculate = document.getElementById("calculation");
    let count = document.getElementById("buttonCountNumber")
    let calculation = document.getElementById("calculation").innerHTML;

   

     document.getElementById("buttonCountPlus").onclick = function() {
      let countPlus = count.innerHTML;
      if(countPlus <= 1){
        count.innerHTML++;
        let countPlus = count.innerHTML;
        calculate.innerHTML = calculations(countPlus) ;
  }
 
}
    document.getElementById("buttonCountMinus").onclick = function() {
      let countMinus = count.innerHTML;
      if(+countMinus >= 2){
        count.innerHTML--;
        let countMinus = count.innerHTML;
        calculate.innerHTML = calculations(countMinus) ;
  }
  
}

 calculations = (count) => {
  return (+count)*(+calculation);
}


let calculate2 = document.getElementById("calculation-2");
let count2 = document.getElementById("buttonCountNumber-2")
let calculation2 = document.getElementById("calculation-2").innerHTML;


calculations2 = (count2) => {
  return (+count2)*(+calculation2);
}

document.getElementById("buttonCountPlus-2").onclick = function() {
  let countPlus2 = count2.innerHTML;
  if(countPlus2 <= 1){
    count2.innerHTML++;
    let countPlus2 = count2.innerHTML;
    calculate2.innerHTML = calculations2(countPlus2) 
}

}
document.getElementById("buttonCountMinus-2").onclick = function() {
  let countMinus2 = count2.innerHTML;
  if(+countMinus2 >= 2){
    count2.innerHTML--
    let countMinus2 = count2.innerHTML;
    calculate2.innerHTML = calculations2(countMinus2)
}
}

let calculate3 = document.getElementById("calculation-3");
let count3 = document.getElementById("buttonCountNumber-3")
let calculation3 = Number(document.getElementById("calculation-3").innerHTML);



calculations3 = (count3) => {
  return (calculation3)*(count3);
}


document.getElementById("buttonCountPlus-3").onclick = function() {
  let countPlus3 = count3.innerHTML;
  if(countPlus3 <= 300){
    count3.innerHTML++;
    let countPlus3 = count3.innerHTML;
    calculate3.innerHTML = calculations3(countPlus3) 
}

}
document.getElementById("buttonCountMinus-3").onclick = function() {
  let countMinus3 = count3.innerHTML;
  if(countMinus3 >= 1){
    count3.innerHTML--;
    let countMinus3 = count3.innerHTML;
    calculate3.innerHTML = calculations3(countMinus3)
}
}

let totalPrice = document.getElementById('total-price')





    
    function createError(input,text){
        const parent = input.parentNode
        const errorLabel = document.createElement('label')

        errorLabel.classList.add('error-label')
        errorLabel.textContent = text
        parent.classList.add('error')

        parent.append(errorLabel)
    }


   
    formOrder.addEventListener('submit', function (event) {
        event.preventDefault()

        if(name.value){
            name.classList.remove("error-input")
        }
        if(name.secondName){
            name.classList.remove("error-input")
        }
        if(regEmail.test(email.value)){
            email.classList.remove('error-label')

            email.classList.remove('error')
            email.classList.remove("error-input")
                    
        }
        if(regPhone.test(phone.value)){
            phone.classList.remove('error-label')
            phone.classList.remove('error')
            phone.classList.remove("error-input")
        }
        if(inn.value.length<=10){
            inn.classList.remove('error-label')
            inn.classList.remove('error')
            inn.classList.remove("error-input")
        }
       
        for (var i = 0; i < fields.length; i++) {
            if (!fields[i].value ) {
              name.value = "Укажите имя";
              name.classList.add("error-input")
              secondName.value = "Введите фамилию"
              secondName.classList.add("error-input")
            }
          
          }
          if (!email.value) {
            email.value = "Укажите электронную почту";
            email.classList.add("error-input")
            
          }
          if (!phone.value) {
            phone.value = "Укажите номер телефона";
            phone.classList.add("error-input")

          }
          if (!inn.value) {
            inn.value = "Укажите индекс";
            inn.classList.add("error-input")
          }


       
         if(!regEmail.test(email.value)){
            createError(email,"Проверьте адрес электронной почты")
         }

       
         if(!regPhone.test(phone.value)){
            createError(phone,"Формат: +9 999 999 99 99")
         }

         if(inn.value.length>=10){
            createError(inn,"Формат: 1234567")
         }

      })
     
      document.querySelector('.btn-display').onclick=   
      function(){
        if(missitems.style.display != 'block'){
          missitems.style.display = 'block'
        }
        else {
          missitems.style.display = 'none'
        }         
       }
       document.querySelector('.btn-display-items').onclick=   
       function(){
         if(items.style.display != 'block'){
           items.style.display = 'block'
         }
         else {
           items.style.display = 'none'
         }         
        }
 

       
})


