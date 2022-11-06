var background_var = 1;
const tr_list = [];

document.getElementById("insert").onclick = function(){
    const input_name = document.getElementById("Name");
    const input_mobile = document.getElementById("Mobile");
    const input_email = document.getElementById("Email");
    if(!ValidateInput(input_name.value, input_mobile.value, input_email.value)) 
        document.getElementById("input-error").style.display = "block";
    else{
        document.getElementById("input-error").style.display = "none";
        const new_tr = document.createElement("tr");

                if(background_var % 2 == 1){
            new_tr.style.backgroundColor =  "#f2f2f2";
        }

        background_var += 1;

        document.getElementById("contacts-list").appendChild(new_tr);

        const new_th1 = document.createElement("td");
        const new_th2 = document.createElement("td");
        const new_th3 = document.createElement("td");

        new_th1.innerHTML = input_name.value;
        new_th2.innerHTML = input_mobile.value;
        new_th3.innerHTML = input_email.value;

        new_tr.appendChild(new_th1);
        new_tr.appendChild(new_th2);
        new_tr.appendChild(new_th3);

        tr_list.push(new_tr);


    }

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