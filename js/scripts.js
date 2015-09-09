var primeSifter = function(number) {
  var numArray = numberList(number);
}

var numberList = function(number) {
  var numList = [];
  for (var i = 2; i <= number; i++) {
    numList.push(i);
  }
  return numList;
}
