
function showLoginPrompt(){
    document.getElementById("LoginPrompt").style.opacity = 1;
}

function hideLoginPrompt(){
    document.getElementById("LoginPrompt").style.opacity = 0;
    document.getElementById("LoginForm").reset();
}