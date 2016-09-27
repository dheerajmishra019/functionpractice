// I will write a function that says hello
// This function will take one argument,
// Called name, which is a string
function sayhello(name){
  //console.log('hello, ' + name);
}

// I will write some variables, which will be
// string of people's names.
var myName = 'Dheeraj';
var friendName = 'deblin';


// Here i call the function sayhello.
sayhello(myName);
sayhello(friendName);


// I will write a function that will greet a person
// The person will be passed to the function as an object
// The function will parse that object and greet the person
function greetPerson(person){
//  console.log('hello, '+person.firstName+'. You are '+person.age+' year old.');
}

// I will make an object that describes a person
var myObject = {
  firstName: 'Dheeraj',
  lastName: 'Mishra',
  age: 21

}

// I will make another object that describes my friend
var friendObject = {
  firstName: 'deblin',
  lastName: 'Roy',
  age: 22
}

// I will call the greetPerson function, passing myObject as its argument
greetPerson(myObject);
greetPerson(friendObject);

// I will now make an array of objects, each object will describe a person
var personList = [
  {
   firstName: 'Dheeraj',
   lastName: 'Mishra',
   age: 21
 },
 {
   firstName: 'deblin',
   lastName: 'Roy',
   age: 22
 },
 {
   firstName: 'Piyush',
   lastName: 'Nagpal',
   age: 23
 },
 {
   firstName: 'Shubham',
   lastName: 'Pandit',
   age: 24
 }
];
// I will write a function that greet people
// It takes as its argument an array, and each item
// in the array is an object that describe the person.
function greetPeople(list) {

// I will loop through the items in my array with a for loop
for (var i = 0;i<list.length;i++) {

  // This variable is the currentItem in the array that
  // the for loop is iterating through
  var currentPerson = list[i];

  // Greet each person in turn.
//  console.log('hello, '+currentPerson.firstName+'. You are '+currentPerson.age+' years old.');


}


}

// Call the greetPeople function and pass personList to it
greetPeople(personList);


// I will write a function that sorts people by age
// This function takes an argument, called list,
// which is an array of people, where each person is
// an object.
function sortPeople(list){

  // Create two arrays, one for older people, and one for younger people
  // These will be blank arrays, that we will populate with our forEach loop
var older = [];
var younger = [];


// Loop through array
  list.forEach(function(d,i){

    if(d.age < 23){
      younger.push(d);
    } else {
      older.push(d);
    }


  })

  // This function will return our arrays as an object
  var buckets = {
    olderList: older,
    youngerList: younger
  };

  return buckets;

}



// call sort people and pass the personList to it
sortPeople(personList);

// Make another array with more people
var morePeople = [
  {
    firstName: 'Nitika',
    lastName: 'Kakkar',
    age: 25

  },
  {
    firstName: 'Ekta',
    lastName: 'Handa',
    age: 24
  },
  {
    firstName: 'Sameer',
    lastName: 'Khan',
    age: 28
  }
];

// run the function again with the new array
sortPeople(morePeople);

// create two variables, where sortPeople return sorted lists of people
var morePeopleSorted = sortPeople(morePeople);

var personListSorted = sortPeople(personList);
// isolate the youngerlist from sorted person list
var personListYounger = personListSorted.youngerList;

// console log the new list and the original list to compare
console.log(personListYounger);
console.log(personList);
