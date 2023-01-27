function showLoginPrompt(){
    document.getElementById("LoginPrompt").style.opacity = 1;

    document.getElementById("username").value = localStorage.getItem("username");
    document.getElementById("password").value = localStorage.getItem("password");

    if(localStorage.getItem("remember") == "true"){
        document.getElementById("rememberMe").checked = true;
    }

}

function hideLoginPrompt(){
    document.getElementById("LoginPrompt").style.opacity = 0;
    document.getElementById("LoginForm").reset();
}

function login(){

    if(document.getElementById("rememberMe").checked){
        localStorage.setItem("username", document.getElementById("username").value);
        localStorage.setItem("password", document.getElementById("password").value);
    }else{
        localStorage.setItem("username", "");
        localStorage.setItem("password", "");
    }

    localStorage.setItem("remember", document.getElementById("rememberMe").checked);

}