document.getElementById('btn-deposit').addEventListener('click', function(){
   const inputField = document.getElementById('input-field');
   const depositAmountString = inputField.value;
   const depositAmountBlance= parseFloat(depositAmountString);

   const depositAmount = document.getElementById('deposit-amount');
   const deposit = depositAmount.innerText;
  const depositBlance = parseFloat(deposit);
   
  const currentBlance = depositAmountBlance + depositBlance;
    depositAmount.innerText = currentBlance;

    const blance = document.getElementById('blance');
    const blanceString = blance.innerText;
    const newBlance = parseFloat(blanceString);
    const totalBlance = newBlance + depositAmountBlance;
    blance.innerText = totalBlance;

    inputField.value = '';
})
document.getElementById('btn-withdra').addEventListener('click', function(){
        const withdralInputField = document.getElementById('withdraw-field');
        const withdraAmountString = withdralInputField.value;
        const withdraBlance = parseFloat(withdraAmountString);
        
     

        const withdrwalAmount = document.getElementById('withdrwal-amount');
        const withdrwalMoneyString = withdrwalAmount.innerText;
        const withdraAmount = parseFloat(withdrwalMoneyString);
        
      

        const currentMoney = withdraAmount + withdraBlance ;
        withdrwalAmount.innerText = currentMoney;
    
        const totalBlanceAmount = document.getElementById('blance');
        const totalBlanceString = totalBlanceAmount.innerText;
        const totalBlance = parseFloat (totalBlanceString);
         const result = totalBlance - withdraBlance;
         
         totalBlanceAmount.innerText = result;

        
         withdralInputField.value = '';
})