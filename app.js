const button = document.getElementById("btn");
button.onclick=validate();
function validate(){
    var username = document.getElementById("user");
    var password = document.getElementById("pass");
    if(username == "admin" && password == "12345")
    {
        alert("Giriş başarılı");
        window.location = "index.html";
        console.log("merhaba");
        return false;
    }else{
        console.log("Başarısız")
    }

}