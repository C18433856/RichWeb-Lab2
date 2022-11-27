document.getElementById("search-button").onclick = function(){
    const to_search = document.getElementById("username-input").value;
    document.getElementById("user-repos").innerHTML = "";
    fetch("https://api.github.com/users/" + to_search)
    .then(response => {
        if(response.ok) {return response.json()}
        else {throw new Error("unable to retrieve user");}
        })
    .then(user => fill_profile(user))
    .catch(error => alert(error))
}

function fill_profile(user_data){
    document.getElementById("the-avatar").src = ((user_data.avatar_url == null) ? "" : user_data.avatar_url);
    document.getElementById("name").innerHTML = ((user_data.name == null) ? "Name: Not Available" : 
                                                                            "Name: " + user_data.name);
    document.getElementById("username").innerHTML = ((user_data.login == null) ? "Username: Not Available" : 
                                                                                 "Username: " + user_data.login)
    document.getElementById("email").innerHTML = ((user_data.email == null) ? "Email: Not Available" : 
                                                                              "Email: " + user_data.email);
    document.getElementById("location").innerHTML = ((user_data.location == null) ? "Location: Not Available" :
                                                                                    "Location: " + user_data.location);
    document.getElementById("gists").innerHTML = ((user_data.public_gists == null) ? "Number of Gists: Not Available" :
                                                                                     "Number of Gists: " + user_data.public_gists);
    fetch(user_data.repos_url)
    .then(response => response.json())
    .then(repos => repos.forEach(repo => insert_repository(repo)))
}

function insert_repository(repo){
    console.log(repo);
    const new_repo_div = document.createElement("div");
    new_repo_div.style.borderBottom = "0.5px solid black";
    const new_name = document.createElement("p");
    new_name.innerHTML = repo.name;
    const new_description = document.createElement("p")
    new_description.innerHTML = repo.description
    new_repo_div.appendChild(new_name)
    new_repo_div.appendChild(new_description)
    document.getElementById("user-repos").appendChild(new_repo_div)
}