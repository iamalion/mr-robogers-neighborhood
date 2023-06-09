
//Business logic
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

  function nameInput (nameInput) {
    let name = "Hello " + nameInput + "!";
    return name;
  }

//UI Logic
function handleForm (event) {
    window.addEventListener("load",event)
    event.preventDefault();
    const form = document.getElementById("formID");
    form.addEventListener("submit", beepBoop)
}