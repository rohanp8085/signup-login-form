const Signupbtn = document.querySelector(".Signupbtn")
const loginbtn = document.querySelector(".loginbtn")
const movebtn = document.querySelector(".movebtn")
const signup = document.querySelector(".Signup")
const login = document.querySelector(".Login")

loginbtn.addEventListener('click',()=>{
    movebtn.classList.add("rightbtn")
    login.classList.add("loginform")
    signup.classList.remove("Signupform")
    movebtn.innerText = "Login"
    
})
Signupbtn.addEventListener('click',()=>{
    movebtn.classList.remove("rightbtn")
    login.classList.remove("loginform")
    signup.classList.add("Signupform")
    movebtn.innerText = "Signup"
})