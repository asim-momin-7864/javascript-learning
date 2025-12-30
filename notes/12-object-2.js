//* Declaring Object using Constructor - Object singleton

const tinderUser = new Object({
  age: 23,
  country: "UK",
  AccountAge: 3.5,
}); // => create empty obj
console.log(tinderUser);

// Object in Object

tinderUser.fullName = {
  userFullName: {
    firstName: "Hero",
    lastName: "Hamada",
  },
};

// accessing multiple layer values
console.log(tinderUser.fullName.userFullName.firstName); // => Hero

//* Merging Objects

const obj1 = {
  1: "a",
  2: "b",
};

const obj2 = {
  3: "c",
  4: "d",
};

// Object.assign
const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3); // => { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// Spread
const obj4 = { ...obj1, ...obj2 };
console.log(obj4); // => { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//* Accessing value of object from Array of Objects (Mostly return from databases)

const usersInfo = [
  {
    id: "12345",
    email: "abc@xyz.com",
  },
  {
    id: "56796",
    email: "hdkf@xyz.com",
  },
  {
    id: "12345",
    email: "abc@xyz.com",
  },
];

console.log(usersInfo[1].email); // => hdkf@xyz.com

// Object.keys
console.log(Object.keys(tinderUser)); // => [ 'age', 'country', 'AccountAge', 'fullName' ]

// Object.Values
console.log(Object.values(tinderUser));
/* 

[
  23,
  'UK',
  3.5,
  { userFullName: { firstName: 'Hero', lastName: 'Hamada' } }
]

*/

//Object.entries
console.log(Object.entries(tinderUser));

/*

[
  [ 'age', 23 ],
  [ 'country', 'UK' ],
  [ 'AccountAge', 3.5 ],
  [ 'fullName', { userFullName: [Object] } ]
]
  
*/


// Some More Methods of Objects

// hasOwnProperty
console.log(tinderUser.hasOwnProperty("country")); // => true


