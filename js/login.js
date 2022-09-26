document.getElementById('btn-submit').addEventListener('click', function(){
   const email = document.getElementById('email-field');
   const emailValue = email.value;  
   
   const password = document.getElementById('password-field');
  const passwordValue = password.value;
 
  if(emailValue === 'mdmainulislam320@gmail.com' && passwordValue === 'Rajibsk@123'){
   window.location.href='inside.html';
  }else{
   alert('invalid information');
  }
})