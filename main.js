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