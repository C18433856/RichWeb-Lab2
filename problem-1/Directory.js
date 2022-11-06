document.getElementById("insert").onclick = function(){
    ValidateInput();
}

function ValidateInput(){
    let name = document.getElementById("Name").value;
    let mobile = document.getElementById("Mobile").value;
    let email = document.getElementById("Email").value;

    if (! /^[A-Za-z\s]*$/.test(name) || name.length > 20) return 0;
    if (! /^[0-9]*$/.test(mobile) || mobile.length != 10) return 0;
    if (!email.includes("@") || email.length > 40) return 0;
    return 1;
}