### Describe: beepBoop()
Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: beepBoop(5);
Expected Output: [0, 1, 2, 3, 4, 5]
<!--
function beepBoop(numInput) {
    const beepBoopArray  = [];
    for (let i = 0; i <= numInput; i++){
      beepBoopArray.push(i);
    } return beepBoopArray;
  }
-->