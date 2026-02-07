function finalScore(omr) {
  // validation
  const totalQuestions = omr.right + omr.wrong + omr.skip;

  if (totalQuestions !== 100) {
    return "Invalid";
  }
  let rightAnswer = omr.right;
  //   rightAnswer = rightAnswer;
  //   rightAnswer++;
  //   console.log(rightAnswer);

  let wrongAnswer = omr.wrong / 2;
  //   wrongAnswer / 2;
  //   console.log(wrongAnswer);

  let skipAnswer = omr.skip;
  //   console.log(skipAnswer);

  let totalMarks = rightAnswer - wrongAnswer + skipAnswer * 0;
  return Math.round(totalMarks);
}

// const totalScoreCount = finalScore(["Raj"]);
// console.log(totalScoreCount);
