

let myInput = document.getElementById('inputNumbers');

function Calculate() {

    let result = eval(myInput.value);
    myInput.value = result;
    
}


// login logic

let email = document.getElementById('name');
let password = document.getElementById('password');

function SubmitForm() {
    
    localStorage.setItem('email', email.value);
    localStorage.setItem('password', password.value);

    window.location.href = "/learningjs/dashboard.html";
    
}

