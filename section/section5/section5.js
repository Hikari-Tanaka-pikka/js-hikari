function score (score) {
  if (score >= 80 && score <= 100) return "合格";
  else if (score >= 60 && score < 80) return "追試";
  else if (score >= 0 && score < 60) return "不合格";
  else if (score == undefined) return "後日受験"; 
  else if (score < 0 || score > 100 ) return "0以上100未満の数字を入れてください";
  else if (typeof score !== 'number' ) return "0以上100未満の数字を入れてください";
  }

module.exports = { score };
