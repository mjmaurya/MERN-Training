function SaveName() {
    var name = document.getElementById("firstname").value;
    if(localStorage){
        localStorage.setItem("name", name);
    }
    else {
        alert("localStorage is not supported");
    }
}

function getName() {
    if(localStorage){
        let name = localStorage.getItem("name");
        alert(name);
    }
    else {
        alert("localStorage is not supported");
    }
}

function removeName() {
    if(localStorage){
        let name = localStorage.removeItem("name");
        alert("cleared");
    }
    else {
        alert("localStorage is not supported");
    }
}
function SaveEmail() {
    var uemail = document.getElementById("email").value;
    if(sessionStorage){
        sessionStorage.setItem("uemail", uemail);
    }
    else {
        alert("localStorage is not supported");
    }
}

function getEmail() {
    if(sessionStorage){
        let uname = sessionStorage.getItem("uemail");
        alert(uname);
    }
    else {
        alert("localStorage is not supported");
    }
}