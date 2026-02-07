function gonoVote(array) {
  //validation
  if (!Array.isArray(array)) {
    return "Invalid";
  }
  let positiveVote = 0;
  let negativeVote = 0;
  for (let vote of array) {
    // console.log(arrays);
    if (vote === "ha") {
      positiveVote++;
      // console.log(positiveVote)
    } else if (vote === "na") {
      negativeVote++;
    }
  }
  if (positiveVote > negativeVote) {
    return true;
  } else if (positiveVote === negativeVote) {
    return "equal";
  } else {
    return false;
  }
}

// const totalVoteCount = gonoVote(["ha", "na", "ha", "na"]);
// console.log(totalVoteCount);
