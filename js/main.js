document.getElementById('login-btn').addEventListener('click',function(){
    const emailInput =document.getElementById('email-input').value;
    const passwordInput =document.getElementById('password-input').value;
    if(emailInput == 'baperbank@gmail.com' && passwordInput == '123'){
        window.location.href = 'bank.html'
    }
    else{
        alert('Wrong email or password')
    }
})