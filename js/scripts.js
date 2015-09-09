var primeSifter = function(number) {
  var numArray = numberList(number);
  var prime = 2;
  while (prime <= number) {
    numArray.forEach(function(num) {
      if ((num !== prime) && (num % prime === 0)) {
        numArray.splice(numArray.indexOf(num), 1);
      }
    });
    prime++;
  }
  return numArray;
}

var numberList = function(number) {
  var numList = [];
  for (var i = 2; i <= number; i++) {
    numList.push(i);
  }
  return numList;
}
