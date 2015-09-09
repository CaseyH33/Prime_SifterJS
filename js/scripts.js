var primeSifter = function(number) {
  var numArray = numberList(number);
  var prime = 2;
  var count = 0;
  while (prime <= number) {
    numArray.forEach(function(num) {
      if ((num !== prime) && (num % prime === 0)) {
        numArray.splice(numArray.indexOf(num), 1);
      }
    });
    count++;
    prime = numArray[count];
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

$(function() {
  $("form#sift").submit(function(event) {
    var number = parseInt($("input#number").val());
    var result = primeSifter(number);
    $(".input_number").empty();
    $(".output").empty();
    $(".input_number").text(number);
    $(".output").text(result.join(", "));
    $("#result").show();
    event.preventDefault();
  });
});
