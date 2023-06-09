### Describe: beepBoop()
Test 1: "It should return an array of numbers from 0 to the user's inputted number"
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
Test 2: "It should return the string 'Won't you be my neighbor?' If the user's input contains a 3"
Code: beepBoop(13)
Expected Output: [0,1,2,"Won't you be my neighbor?", 4,5,6,7,8,9,10,11,12,"Won't you be my neighbor?"]
<!--
function beepBoop(numInput) {
  var beepBoopArray = [];

  for (let i = 0; i <= numInput; i++) {
    if (i.toString().includes("3")) {
      beepBoopArray.push("Won't you be my neighbor?");
    } else {
      beepBoopArray.push(i);
    }
  }
  if (beepBoopArray.includes(3)) {
    let index = beepBoopArray.indexOf(3);
    beepBoopArray.splice(index, 1);
  }
  return beepBoopArray;
}
-->
Test 3: It should return the string 'boop' If the user's input contains a 2"
Code: beepBoop(13)
Expected Output: [0,1,"boop","Won't you be my neighbor?", 4,5,6,7,8,9,10,11,"boop","Won't you be my neighbor?"]
<!--
function beepBoop(numInput) {
    const beepBoopArray = [];
    for (let i = 0; i <= numInput; i++) {
      if (i.toString().includes("3")) {
        beepBoopArray.push("Won't you be my neighbor?");
      } else if (i.toString().includes("2")) {
        beepBoopArray.push("boop");
      } else {
        beepBoopArray.push(i);
      }
    }
    return beepBoopArray;
  }
-->

Test 4: It should return the string 'beep' If the user's input contains a 1"
Code: beepBoop(13)
Expected Output: [0,"beep","boop","Won't you be my neighbor?", 4,5,6,7,8,9,"beep","beep","boop","Won't you be my neighbor?"]
<!--
function beepBoop(numInput) {
    const beepBoopArray = [];
    for (let i = 0; i <= numInput; i++) {
      if (i.toString().includes("3")) {
        beepBoopArray.push("Won't you be my neighbor?");
      } else if (i.toString().includes("2")) {
        beepBoopArray.push("boop");
      } else if (i.toString().includes("1")){
        beepBoopArray.push("beep")
      } else {
        beepBoopArray.push(i);
      }
    }
    return beepBoopArray;
  }
-->
