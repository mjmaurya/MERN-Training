function login(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username == "" || password == ""){
        alert("Enter Valid User Name and Password");
        return;
    }
    else{
        if (localStorage.getItem("username") == username && localStorage.getItem("password") == password){
            document.getElementById("username").value='';
            document.getElementById("password").value='';
            alert("You are already  LogedIn");
            
        }
        else{
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
            document.getElementById("username").value='';
            document.getElementById("password").value='';
            document.getElementById("myBtn").style.display = "block";
            alert("Login Successful");

        }
    }
}
function LogOut(){
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    document.getElementById("username").value='';
    document.getElementById("password").value='';
    document.getElementById("myBtn").style.display = "none";
    alert("Logged Out");
}