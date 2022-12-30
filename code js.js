let username_=document.getElementById("username");
let email_=document.getElementById("email");
let password_=document.getElementById("password");
let cpassword_=document.getElementById("cpassword");


let etat_username=false;
let etat_email=false;
let etat_password=false;
let etat_cpassword=false;

username_.addEventListener("keyup",()=>{
    let username_=document.getElementById("username");
    username = username_.value;
    if(username!=="" && username.length<25 && username.length>3){
        document.getElementById("usernameerror").innerHTML='</br><span class="valide">valide</span>';
        document.getElementById("username").style.border="1px solid green";
        etat_username=true;
    }
    else {
        document.getElementById("usernameerror").innerHTML="</br><span>ne peut pas être vide et comporte au moins 3 caractères et ne peut pas dépasser 25 caractères.</span>"
        document.getElementById("username").style.border="1px solid red";

    }
})
email_.addEventListener("keyup",()=>{
    let email_=document.getElementById("email");
    email=email_.value;
    if(email.slice(email.length-3,email.length)===".ma"){
        document.getElementById("emailerror").innerHTML="</br><span class='valide'>valide</span>";
        document.getElementById("email").style.border="1px solid green";

        etat_email=true;
    }
    else {
        document.getElementById("emailerror").innerHTML="</br><span>email doit être correspondant à un pattern RegEx : example@example.ma</span>"
        document.getElementById("email").style.border="1px solid red";

    }

});
password_.addEventListener("keyup",()=>{
    let password_=document.getElementById("password");
    password=password_.value;
    if(password.length>=8 && password.match(/[0-9]/) && password.match(/[A-Z]/) && password.match(/[a-z]/) && password.match(/[(!\@\#\$\%\^\&\*]/)){
        etat_password=true;
        document.getElementById("passworderror").innerHTML="</br><span class='valide'>valide</span>";
        document.getElementById("password").style.border="1px solid green";


    }
    else {
        document.getElementById("passworderror").innerHTML="</br><span>Le mot de passe doit contenir au moins 8 caractères, dont au moins 1 minuscule, 1 majuscule, 1 chiffre et 1 caractère spécial (!@#$%^&*).</span>"
        document.getElementById("password").style.border="1px solid red";

    }

})
cpassword_.addEventListener("keyup",()=>{
    let cpassword_=document.getElementById("cpassword");
    cp=cpassword_.value;
    if(password===cp && cp!==""){
        passwordconfirmation=true;
        document.getElementById("cpassworderror").innerHTML="</br><span class='valide'>valide</span>";
        document.getElementById("cpassword").style.border="1px solid green";


    }
    else {
        document.getElementById("cpassword").style.border="1px solid red";
        document.getElementById("cpassworderror").innerHTML="</br><span>Le mot de passe de confirmation doit être le même que le mot de passe.<span/>";
    }
})


document.forms[0].onsubmit=(e)=>{
    if(etat_username===false || etat_email===false || etat_password===false || etat_cpassword===false ){
        e.preventDefault();
    }
}


let image=[];
courses.forEach((e,i)=>{
    image[i]=e.image;
})
let title=[];
courses.forEach((e,i)=>{
    title[i]=e.title;
})
let price=[];
courses.forEach((e,i)=>{
    price[i]=e.price;
})
let div=document.getElementById("images");

