var background_var = 1;
var sorting = "ascend";

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

        const new_td1 = document.createElement("td");
        const new_td2 = document.createElement("td");
        const new_td3 = document.createElement("td");

        new_td1.innerHTML = input_name.value;
        new_td2.innerHTML = input_mobile.value;
        new_td3.innerHTML = input_email.value;

        new_tr.appendChild(new_td1);
        new_tr.appendChild(new_td2);
        new_tr.appendChild(new_td3);

    }

    input_name.value = "";
    input_mobile.value = "";
    input_email.value = "";
}

document.getElementById("name-header").onclick = function(){
    let i, j;
    let contactTable = document.getElementById("contacts-list");
    let contacts = contactTable.rows;

    if(sorting == "ascend"){
        sorting = "descend";
        for(i = 1; i < contacts.length - 1; i++)
            for(j = 1; j < contacts.length - i; j++)
                if(contacts[j].firstChild.innerHTML.toLowerCase() > contacts[j + 1].firstChild.innerHTML.toLowerCase())
                    contactTable.insertBefore(contacts[j + 1], contacts[j]);
    }
    else if(sorting == "descend"){
        sorting = "ascend";
        for(i = 1; i < contacts.length - 1; i++)
            for(j = 1; j < contacts.length - i; j++)
                if(contacts[j].firstChild.innerHTML.toLowerCase() < contacts[j + 1].firstChild.innerHTML.toLowerCase())
                    contactTable.insertBefore(contacts[j + 1], contacts[j]);
    }
    resetBackground()
}

document.getElementById("contact-search").onkeyup = function(){
    let input, value, table, rows, i
    input = document.getElementById('contact-search');
    contactTable = document.getElementById("contacts-list");
    rows = contactTable.rows;
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 1; i < rows.length; i++) {
      if (rows[i].childNodes[i].innerHTML.indexOf(input.value) > -1)
        rows[i].style.display = "";
      else
        rows[i].style.display = "none";
    }
    resetBackground()
}

function ValidateInput(input_name, input_mobile, input_email){
    if (! /^[A-Za-z\s]*$/.test(input_name) || input_name.length > 20) return false;
    if (! /^[0-9]*$/.test(input_mobile) || input_mobile.length != 10) return false;
    if (! input_email.includes("@") || input_email.length > 40) return false;
    return true;
}

function resetBackground(){
    let contactTable = document.getElementById("contacts-list");
    let rows = contactTable.rows;
    let fill = true;
    let i;
    for (i = 1; i < rows.length; i++) {
        if(rows[i].style.display != "none"){
            alert("Look at me I worked");
            if(fill){
                rows[i].style.backgroundColor =  "#f2f2f2";
                fill = false;
            }
            else{
                rows[i].style.backgroundColor = "white";
                fill = true;
            }
        }
    }

}