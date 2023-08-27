const email = document.querySelector("#email");
const password = document.querySelector("#password");
const remember = document.querySelector("#remember");
const login = document.querySelector("#login")

const myMail = "admin@gmail.com";
const myPassword = 1234;


login.addEventListener("click",()=>{
    if(email.value == myMail && password.value == myPassword){
        window.location.href = './dashbord.html';
        email.value = "";
        password.value = "";
    }
    else{
        alert("Incorect Detail!");
    }

})