async function getInfoFromGit() {
    try {
        const gitApi = await fetch('https://api.github.com/users/andrew');
        const profile = await gitApi.json();
        console.log(profile);
    } catch (err) {
        console.log(err);
    }
}
getInfoFromGit();