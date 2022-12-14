const getResult = (marks) => {
  if (marks >= 30) {
    return "Pass!";
  } else {
    return "Failed!";
  }
};
console.log(getResult(34));
