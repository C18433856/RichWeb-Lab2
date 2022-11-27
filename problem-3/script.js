document.getElementById("search-button").onclick = function(){
    const to_search = document.getElementById("username-input").value;
    fetch("https://api.github.com/users/"+to_search)
    .then(response => response.json())
    .then(user => fill_profile(user))
}

function fill_profile(user_data){
    document.getElementById("the-avatar").src = user_data.avatar_url;
}