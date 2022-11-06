document.getElementById("insert").onclick = function(){
    const input_name = document.getElementById("Name");
    const input_mobile = document.getElementById("Mobile");
    const input_email = document.getElementById("Email");
    if(!ValidateInput(input_name.value, input_mobile.value, input_email.value)) document.getElementById("input_error").style.display = "block";
    else document.getElementById("input_error").style.display = "none";

    input_name.value = "";
    input_mobile.value = "";
    input_email.value = "";
}

function ValidateInput(input_name, input_mobile, input_email){
    if (! /^[A-Za-z\s]*$/.test(input_name) || input_name.length > 20) return false;
    if (! /^[0-9]*$/.test(input_mobile) || input_mobile.length != 10) return false;
    if (!input_email.includes("@") || input_email.length > 40) return false;
    return true;
}