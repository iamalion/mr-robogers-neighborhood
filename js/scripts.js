//Business logic
function beepBoop(numInput) {
    event.preventDefault()
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

//UI Logic{
window.addEventListener("load", function (event) {
    const form = document.getElementById("formID");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const numberInput = document.querySelector("input[type='number']");
        const num = parseInt(numberInput.value);
        const result = beepBoop(num);

        const nameInput = document.getElementById("nameID");
        const name = nameInput.value.toUpperCase();

        displayResult (result, name);
    }); 
function displayResult (result, name) {
    // let endDiv = document.getElementById("result");
    // endDiv.removeAttribute("class");
    let output = document.getElementById("output");
    output.innerText = result.join(" ") + "!!!"

    let greeting = document.getElementById("greetingID");
    greeting.innerText = "HELLO " + name + " MY NAME IS MR. ROBOGERS AND HERE IS WHAT I HAVE TO SAY TO YOU:"
    
    } 
});

