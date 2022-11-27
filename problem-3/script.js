document.getElementById("search-button").onclick = function(){
    const to_search = document.getElementById("username-input").value;
    fetch("https://api.github.com/users/" + to_search)
    .then(response => response.json())
    .then(user => fill_profile(user))
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
}