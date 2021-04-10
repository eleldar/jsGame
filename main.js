const $arenas = document.querySelector('.arenas');

const player1 = {
    player: 1,
    name: 'SCORPION',
    hp: 50,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['палка', 'топор', 'лопата'],
    attack: function() {
        console.log(this.name + ' Fight...');
    }
};

const player2 = {
    player: 2,
    name: 'SUB-ZERO',
    hp: 80,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['нож', 'вилы', 'лед'],
    attack: function() {
        console.log(this.name + ' Fight...');
    }
};

function createElement(tag, className) {
    const $tag = document.createElement(tag);
    if (className) {
    $tag.classList.add(className);
    }
    return $tag;
}

function createPlayer(actor) {
    const $player = createElement('div', 'player'+ actor.player)
    const $progressbar = createElement('div', 'progressbar');
    const $character = createElement('div', 'character');
    const $life = createElement('div', 'life');
    const $name = createElement('div', 'name');
    const $img = createElement('img');

    $life.style.width = actor.hp + '%';
    $name.innerText = actor.name;
    $img.src = actor.img;

    $progressbar.appendChild($name);
    $progressbar.appendChild($life);

    $character.appendChild($img);

    $player.appendChild($progressbar);
    $player.appendChild($character);



    return $player;
};

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));