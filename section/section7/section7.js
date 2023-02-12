const character = {
  id: 1,
  name: "スライム",
  hp: 50
};

function addMP (num) {
  character.mp = num;

  return character;
};


function updateHP (undefined) {
  character.hp -= 15;
  delete character.mp;
  return character;
};

function LookUpName (name) {
  return character.name;
}
module.exports = { character, addMP, updateHP, LookUpName };
