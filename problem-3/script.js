// When the search button is clicked retrieve user and display relevant information
document.getElementById("search-button").onclick = function(){
    const to_search = document.getElementById("username-input").value;
    document.getElementById("user-repos").innerHTML = "";
    fetch("https://api.github.com/users/" + to_search)
    .then(response => {
        if(response.ok) {return response.json()}    // If the response is valid proceed
        else {throw new Error("unable to retrieve user");}  // If invalid response. Triggered by searching for user that doesn't exist.
        })
    .then(user => fill_profile(user))
    .catch(error => alert(error))
}

// Display the relevant user information
function fill_profile(user_data){
    fetch(user_data.repos_url)  // Gather the repositories of the user
    .then(response => response.json())
    .then(repos => repos.forEach(repo => insert_repository(repo)))
    
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

}

// Used to display the user repositories
function insert_repository(repo){
    const new_repo_div = document.createElement("div");
    new_repo_div.style.borderBottom = "0.5px solid black";
    const new_name = document.createElement("p");
    new_name.innerHTML = ((repo.name == null) ? "No Name Available" : repo.name);
    new_name.style.fontWeight = "bold";
    const new_description = document.createElement("p")
    new_description.innerHTML = ((repo.description == null) ? "No Description Available" : repo.description)
    new_repo_div.appendChild(new_name)
    new_repo_div.appendChild(new_description)
    document.getElementById("user-repos").appendChild(new_repo_div)
}