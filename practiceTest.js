const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const reverseStr = (str) => {
  return str.split("").reverse().join("");
};

const caesarCipher = (str, shift) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      result += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      result += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
    } else {
      result += str[i];
    }
  }
  return result;
};

const analyzeArray = (numbers) => {
  let sum = 0;
  let min = Number.POSITIVE_INFINITY;
  let max = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    min = Math.min(min, numbers[i]);
    max = Math.max(max, numbers[i]);
  }
  return {
    average: sum / numbers.length,
    min,
    max,
    length: numbers.length,
  };
};

export { capitalize, reverseStr, caesarCipher, analyzeArray };
