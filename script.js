function register() {

    const username =
        document.getElementById("regUser").value;

    const password =
        document.getElementById("regPass").value;

    if(username === "" || password === ""){
        alert("请输入用户名和密码");
        return;
    }

    localStorage.setItem(
        username,
        password
    );

    alert("注册成功");
}

function login(){

    const username =
        document.getElementById("loginUser").value;

    const password =
        document.getElementById("loginPass").value;

    const savedPass =
        localStorage.getItem(username);

    if(savedPass === password){

        localStorage.setItem(
            "currentUser",
            username
        );

        showShop();

    }else{
        alert("账号或密码错误");
    }
}

function showShop(){

    const user =
        localStorage.getItem("currentUser");

    document.getElementById("authBox").style.display =
        "none";

    document.getElementById("shop").style.display =
        "block";

    document.getElementById("welcome").innerText =
        "您好，" + user;
}

function logout(){

    localStorage.removeItem(
        "currentUser"
    );

    location.reload();
}

window.onload = function(){

    if(localStorage.getItem("currentUser")){
        showShop();
    }

}