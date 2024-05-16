// IN VARIABLE WE COMPARE THE ACTUAL VALUE OF STRING OR NUMBER 


// BUT IN OBJECT WE COMPARE THE locationES OF THE OBJECTS

// firstName === firstName2; O/P= true coz both variables are same value

const firstName = 'Akash';
const firstName2 = 'Akash';


// user0 === user1;  O/P = false  coz both objects are same value but they are always store in different locations.

// const user0 = {
//     firstName: "Subham",
//     lastName: "Pal",
//     age: 25,
//     education: "B.Tech",
//     city: "Kolkata",
// }


const user1 = {
    firstName : "Subham",
    lastName : "Pal",
    age : 25,
    education : "B.Tech",
    city : "Kolkata",
    Subh : "Developer",
}


// WE CAN ASLO WRITE A OBJECT LIKE THIS --

const user2 = {
    "firstName": "Rahul",
    "lastName": "Roy",
    "age": 30,
    "city/from": "Cob"   // without APOSTROPHE/QUOTATION we cant write like this (city/from / user-name)
}


const myName = "Subh";


console.log(user1.city);  // DOT NOTATION

// We can not write CITY/FROM in  Dot Notation 

console.log(user2["city/from"]);  // BRACKET NOTATION

// console.log( user1.myName);  // UNDEFINED not possible

console.log(user1[myName]);  // we cant use quotation while work with variable

console.log(user1["first" + "Name"]);   // O/P = Subham


// ---------------------------------------------------------

// ADDING NEW VALUE TO OBJECT

const newUser = {
    firstName: "Ram",
    lastName: "Pal",
    location: {
        vill: "cob",
        pinCode: 736170,
    }
}

newUser.age = 25;  // new value added to the object
newUser["is-student"] = "No";

delete newUser.lastName;  // Delete any key/property form object


console.log(newUser); 

console.log(newUser.location.pinCode);   // O/P = 736170
console.log(newUser["location"]["vill"]);   // O/P = cob

