import { monsters } from './monsters.js';

console.log(monsters);

for(let monster of monsters){
    showMonster(monster);
}

function showMonster(monster){
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

   monsterEle.append(img,name,email);

   document.querySelector('.monsters').append(monsterEle);
}


{/* <div class="monster">
        <img src="https://robohash.org/6?set=set2" alt="MD. Sakib Khan" />
        <p class="name">MD. Sakib Khan</p>
        <p class="email">programmingwithsakib@gmail.com</p>
</div>

<div class="p-5 not-found" style="display: none">
        <span>404</span>
        <h1>🧟‍♂️ No Monster Found 🧟‍♂️</h1>
</div> */}