function analyzeText(str) {
if (typeof str !== "string" || str.trim() === "") {
  return "Invalid";
}

  let givenString = str.split(" ");
  let longestWord = " ";
  for(let i = 0; i < givenString.length; i++){
    if (givenString[i].length > longestWord.length) {
      longestWord = givenString[i];
    }
  }
  let tokenCont = str.split(" ").join("").length;
  return { "longwords": longestWord, "token": tokenCont };
}
const long = analyzeText("I am a little honest person");
console.log(long);

