# Mr. Robogers Neighborhood

#### By _**Lindsay Warr**_

### Descrtiption
Mr. Robogers Neighborhood is the project from Week 3 at Epicodus. It takes input from a user and uses for loops to produce a result.

### Technologies Used
* HTML
* CSS
* JavaScript
* GitHub

## TESTS
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
### Setup/Installation Requirements 

* Clone this repository
* Open in VS Code 
* Use "Go Live" to see in your browser

_Alternatively, visit the static page at https://iamalion.github.io/mr-robogers-neighborhood/_

### Known Bugs

* none at this time

### License

MIT License

Copyright (c) May 2023 [Lindsay Warr
Contact me at iamalion@gmail.com with any questions, comments, or suggestions

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Copyright (c) _date_ _author name(s)_
