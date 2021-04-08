const player1 = {
    name: 'SCORPION',
    hp: 50,
    img: 'строка',
    weapon: ['палка', 'топор', 'лопата'],
    attack: function() {
        console.log(this.name + ' Fight...');
    }
};

const player2 = {
    name: 'SUB-ZERO',
    hp: 80,
    img: 'строка',
    weapon: ['нож', 'вилы', 'лед'],
    attack: function() {
        console.log(this.name + ' Fight...');
    }
};

function createPlayer(player, name, hp) {
    const $player1 = document.createElement('div');
    $player1.classList.add(player);
    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');
    const $life = document.createElement('div');
    $life.classList.add('life');
    const $name = document.createElement('div');
    $name.classList.add('name');
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $player1.appendChild($progressbar);
    const $character = document.createElement('div');
    $character.classList.add('character');
    const $img = document.createElement('img');
    $img.src = 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif';
    $character.appendChild($img);
    $player1.appendChild($character);
    const $arenas = document.querySelector('.arenas');
    $arenas.appendChild($player1);
    $life.style.width = hp + '%';
    $name.innerText = name;
};

createPlayer('player1', 'SCORPION', 50);
createPlayer('player2', 'SUB-ZERO', 80);