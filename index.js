// console log the 99 bottles song using a while loop and -- to reduce the amount of bottles by 1 in each loop round.

var numberOfBottles = 99

while (numberOfBottles > 0) {

  var bottleWord = "bottle";
  if (numberOfBottles > 1) {
    bottleWord = "bottles";
  }
  console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
  console.log(numberOfBottles + " " + bottleWord + " of beer,");
  console.log("Take one down, pass it around,");

  numberOfBottles--;

  console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");

}
