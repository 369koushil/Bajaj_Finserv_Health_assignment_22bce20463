function categorizeData(data) {
  let oddNumbers = [];
  let evenNumbers = [];
  let alphabets = [];
  let specialChars = [];
  let sum = 0;

  data.forEach(item => {
    if (/^\d+$/.test(item)) {
      let num = parseInt(item);
      sum += num;
      if (num % 2 === 0) evenNumbers.push(item);
      else oddNumbers.push(item);
    } else if (/^[a-zA-Z]+$/.test(item)) {
      alphabets.push(item.toUpperCase());
    } else {
      specialChars.push(item);
    }
  });

  return { oddNumbers, evenNumbers, alphabets, specialChars, sum };
}

function buildConcatString(data) {
  let letters = data.filter(ch => /^[a-zA-Z]+$/.test(ch)).join("");
  letters = letters.split("").reverse().join("");
  let result = "";
  for (let i = 0; i < letters.length; i++) {
    result += i % 2 === 0 ? letters[i].toUpperCase() : letters[i].toLowerCase();
  }
  return result;
}

module.exports = { categorizeData, buildConcatString };
