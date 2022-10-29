const gitApi = fetch('https://api.github.com/users/andrew');
gitApi
    .then((res) => res.json())
    .then((profile) => console.log(profile))
    .catch((err) => console.log(err.message));

//console.log(gitApi); 