/* ========================WRITE YOUR JS FROM HERE======================== */


function checkForm(form){
    
    if(form.password.value != form.cnfpassword.value){
        alert('Password Does Not match the confirm Password');
        form.password.focus();
        return false;
    }

    if(form.phone.value.length != 10){
        alert('Enter a correct 10 digit phone number');
        form.phone.focus();
        return false;
    }

    else{
        alert('Login Successful');
        return true;
    }
}