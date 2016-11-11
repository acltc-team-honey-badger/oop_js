
function Person(name, nationality, age) {
  this.name = name;
  this.nationality = nationality;
  this.age = age;
}

Person.prototype.secondNationality = function(purpleHippo) {
  this.secondNationality = purpleHippo;
};

var john = new Person("John Miller", "German", 23);
john.secondNationality("French");
console.log(john);





/////////////////////////////////////// Number Counter Example ///////////////////////////


// var clickBoxOne = (function() {
//   var counter = 0;
//   return function() {
//     counter++;
//     return console.log("Box One clicked " + counter + " times.");
//   }
// })();


// var clickBoxTwo = (function() {
//   var counter = 0;
//   return function() {
//     counter++;
//     return console.log("Box Two clicked " + counter + " times.");
//   }
// })();

///////////////////////////////////// Color Changer //////////////////////////////////////////


// var clickBoxOne = (function() {
//   var colors = ["black", "yellow", "red"];
//   var index = 0;
//   return function() {
//     document.getElementById('boxOne').style.background = colors[index%3];
//     index++;
//   }
// })();

// var clickBoxTwo = (function() {
//   var colors = ["purple", "pink", "green"];
//   var index = 0;
//   return function() {
//     document.getElementById('boxTwo').style.background = colors[index%3];
//     index++;
//   }
// })();





var accounts = [];

function createAccount() {
  var firstName = document.getElementById('firstName');
  var lastName = document.getElementById('lastName');
  var openingBalance = document.getElementById('openingBalance');
  var account = new Account(firstName.value, lastName.value, openingBalance.value); // need to create constructor
  accounts.push(account);
  firstName.value = "";
  lastName.value = "";
  openingBalance.value = "";
}

window.accounts = accounts;

