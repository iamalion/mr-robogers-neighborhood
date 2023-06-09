function beepBoop(numInput) {
    var beepBoopArray = [];
    for (var i = 0; i <= numInput; i++) {
      if (i.toString().includes("3")) {
        beepBoopArray.push("Won't you be my neighbor?");
      } else {
        beepBoopArray.push(i);
      }
    }
    if (beepBoopArray.includes(3)) {
      var index = beepBoopArray.indexOf(3);
      beepBoopArray.splice(index, 1);
    }
    return beepBoopArray;
  }
