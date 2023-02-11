function echoDiv (num1, num2) {
  let shou = Math.floor(num1 / num2);
  let mod = Math.floor(num1 % num2);
  return "商: " + shou + ", 余り: " + mod;
}

function reply (reply) {
  if (reply === undefined) return "返信なし";
  else                     return reply;
}

module.exports = { echoDiv, reply };
