document.addEventListener('DOMContentLoaded',function(){
    
    const form = document.querySelector('.form')
    const formOrder = document.querySelector('.order-form')
    const btn = document.querySelector('.order-button')
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
              name.value = "?????????????? ??????";
              name.classList.add("error-input")
              secondName.value = "?????????????? ??????????????"
              secondName.classList.add("error-input")
            }
          
          }
          if (!email.value) {
            email.value = "?????????????? ?????????????????????? ??????????";
            email.classList.add("error-input")
            
          }
          if (!phone.value) {
            phone.value = "?????????????? ?????????? ????????????????";
            phone.classList.add("error-input")

          }
          if (!inn.value) {
            inn.value = "?????????????? ????????????";
            inn.classList.add("error-input")
          }


       
         if(!regEmail.test(email.value)){
            createError(email,"?????????????????? ?????????? ?????????????????????? ??????????")
         }

       
         if(!regPhone.test(phone.value)){
            createError(phone,"????????????: +9 999 999 99 99")
         }

         if(inn.value.length>=10){
            createError(inn,"????????????: 1234567")
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


