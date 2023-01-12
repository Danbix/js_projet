let username_=document.getElementById("username");
let email_=document.getElementById("email");
let password_=document.getElementById("password");
let repassword_=document.getElementById("repassword");

let useretat=false;
let emailetat=false;
let passwordetat=false;
let repasswordetat=false;

const checkValidation = (input, validationFunc) => {
    input.addEventListener("keyup",()=>{
        let inputValue = input.value;
        if(validationFunc(inputValue)){
            document.getElementById(`${input.id}error`).innerHTML='</br><span class="valide">valide</span>';
            input.style.border="1px solid green";
            return true;
        }
        else {
            document.getElementById(`${input.id}error`).innerHTML="</br><span>the input is not valid</span>"
            input.style.border="1px solid red";
            return false;
        }
    });
};

checkValidation(username_, (username) => {
    return username !== "" && username.length<25 && username.length>3;
});

checkValidation(email_, (email) => {
    return email.slice(email.length-3,email.length)===".ma";
});
checkValidation(password_, (password) => {
    return password.length>=8 && password.match(/[0-9]/) && password.match(/[A-Z]/) && password.match(/[a-z]/) && password.match(/[(!\@\#\$\%\^\&\*]/);
});

checkValidation(repassword_, (repassword) => {
    return password_ === repassword && repassword !== "";
});

document.forms[0].onsubmit=(e)=>{
    if(useretat===false || emailetat===false || passwordetat===false || repasswordetat===false ){
        e.preventDefault();
    }
}
