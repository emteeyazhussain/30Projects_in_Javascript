var nameError = document.getElementById('name-Error');
var phoneError = document.getElementById('phone-Error');
var emailError = document.getElementById('email-Error');
var messageError = document.getElementById('message-Error');
var submitError = document.getElementById('Subit-Error');

function ValidateName() {
    var name = document.getElementById('contact-name').value;


if (name.length == 0) {
    nameError.innerHTML= 'Name is required';
    return false;
}

if (!name.match(/^[A-Za-z]*\s{1}[A-za-z]*$/)) {
    nameError.innerHTML = 'Write Full Name';
    return false;
}

nameError.innerHTML='<i class="fas fa-check-circle"></i>';
return true;
}

function ValidatePhone() {
    
    var phone = document.getElementById('contact-number').value;
    if (phone.length==0) {
        phoneError.innerHTML='number is required';
        return false;
    }
    if (phone.length!==10) {
        phoneError.innerHTML=' number Should be 10 digits';
        return false;
    }

    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML=' enter only number';
        return false;
    }
   
phoneError.innerHTML='<i class="fas fa-check-circle"></i>';
return true;
}


function ValidateEmail() {
    var email = document.getElementById('contact-email').value;

    if (email.length==0) {
        emailError.innerHTML='Email is required';
        return false;
    }
    

    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML='invalid Email';
        return false;
    }
   
emailError.innerHTML='<i class="fas fa-check-circle"></i>';
return true;
}

function ValidateMessage() {
    var message = document.getElementById('contact-message').value;
    var required = 30;
    var left = required - message.length;

    if (left > 0) {
        messageError.innerHTML = left + ' More Characters Required';
        return false;
    }

    messageError.innerHTML='<i class="fas fa-check-circle"></i>';
    return true;
}

function  ValidateForm() {
    if( !ValidateName() || !ValidatePhone() || !ValidateEmail() || !ValidateMessage()) {
    //    submitError.style.display='block';
        submitError.innerHTML = "Something wrong ⚠️";
        // setTimeout(function(){submitError.style.display ='none';},3000)
        return false;
    }
}

    


