import { monsters } from './monsters.js';

//console.log(monsters);

for (let monster of monsters) {
    showMonster(monster);
}

function showMonster(monster) {
    const monsterEle = document.createElement('div');
    monsterEle.className = 'monster';

    const img = document.createElement('img');
    img.src = `https://robohash.org/${monster.id}}?set=set2`;
    img.alt = monster.name;

    const name = document.createElement('p');
    name.className = "name";
    name.innerText = monster.name;

    const email = document.createElement('p');
    name.className = "email";
    name.innerText = monster.email;

    monsterEle.append(img, name, email);

    document.querySelector('.monsters').append(monsterEle);
}

document.querySelector('#search-monster-form').addEventListener('keyup', function (e) {

    const keyword = e.target.value.toLowerCase();
    //console.log(keyword);

    const monsters = document.querySelectorAll('.monster');
    console.log(monsters);
    for (let monster of monsters) {
        const name = monster.children[1].innerText;
        const email = monster.children[2].innerText;

        if(name.includes(keyword) || email.includes(keyword)){
            monster.style.display = 'block';
        }else{
            monster.style.display = 'none';
        }
    }
});


/*
<div class="p-5 not-found" style="display: none">
    <span>404</span>
    <h1>🧟‍♂️ No Monster Found 🧟‍♂️</h1>
</div> */