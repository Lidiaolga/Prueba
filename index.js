var nameError = document.getElementById ('name-error');
var emailError = document.getElementById ('email-error');
var claveError = document.getElementById ('clave-error');
var passwordError = document.getElementById ('password-error');
var submitError = document.getElementById ('submit-error');

function validatename(){
    var name= document.getElementById('nombres').Value;

    if(name.length== 0){
        nameError.innerHTML='Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-Z]*\s{1}[A-Za-Z]&/)){
        nameError.innerHTML='write full name';
        return false;
    }
nameError.innerHTML='<i class="fa-sharp fa-solid fa-circle-check"></i>';
return true;
} 

function validateEmail(){
var emailField= document.getElementById('email').Value;
var errorEmail = '/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2;10})+$/';
var errorEmail = document.getElementById ('email-error');

if(emailField.Value ==0 ){
    errorEmail.innerHTML ='Rellenar este campo';
    emailField.classList.add ("invalid");
    emailField.classList.add("errorIcon");
    return false
}
else if(validateEmail.test(emailField.Value)){
    emailField.classList.remove ("invalid");
    emailField.classList.remove ("errorIcon");
    errorEmail.innerHTML= "";
    emailField.classList.add ("valid");
    emailField.classList.add ("successIcon");
    return true; 
}
}

 