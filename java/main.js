// /*
// js commment
// JS variables==LET AAND VAR
// JS DATATYPES
//     two types of data types namely
//     PIMITIVE DATATYPE AND NON PRIMITIVE DATA TYPE

//     Primitive dataype are stored in the stark memory of the computer 
//           types of primitive datatype
//           1 String, 2 Number. 3 Boolean, 4 Null, 5 Undifined
    
//     Num primitive datatype
//           types of non primitive datatype
//           1 Array, 2 Object, 3Function

//           JAVA SCRIPT AND IT VARIABLES
//         there are three types of variables in java script namely:
//         1 const 2 let 3 var 
//         note that people dont use var anymore ecause of security purpose 

//         so the mostly use one is CONST and LET

//         js operation
//         js array
//         js conditional statement
//         js Dom
//         js String method
//         js promice
//         js asynchrosus
//         js fetch API
// */

// //Primisive Datatype

// // let firstname= "Abdulrasheed"//string
// // document.write(firstname)
// // let lastname= "akinkunmi"
// // console.log(lastname)
// // let age= "14"//number
// // document.write(age)
// // let gender= "male"
// // console.log(gender)
// // let no= "09026571474"//number
// // console.log(no)
// // let heisastudent= "true"//boolean
// // alert(heisastudent)
// // let sen= "we are a student"
// // document.write(sen)
// // let nu="true"//null

// let firstball; "bayo"//undefined
// let firstbalk= "kunle"//define


// // const color= "pink"//string
// // document.write(color)
// // const nikn="Natasha"
// // console.log(nikn)
// // const pincode= "456733"
// // console.log(pincode)
// // const school= "Araromi ilogbo senior secondary school"
// // console.log(school)

// //Non primisive datatype
// //array data type is  the collection of datas

//             //ARRAY
// let fruits= ["Apple", "Pawpaw", "Pineapple", "Almond", "Orange"]//Array
// fruits.push("Cucumber")
// fruits.pop()
// fruits.unshift("DATE")
// fruits.shift()
// document.write(fruits)
// document.write(fruits[0])
// document.write(fruits[1])
// document.write(fruits[2])
// document.write(fruits[3])
// document.write(fruits[4])

// let fruit= ["Apple", "Pawpaw", "Pineapple", "Almond", "Orange"]//Array
// document.write(fruit)

// //OBJECT
// let person=
//       {Firstname: "Abdulrasheed",
//        Lastname: "Akinkunmi",
//        Occupation: "Web Development",
//       Age: "13 years,",
//       School: "Araromi ilogbo senior secondary school",
//       Address: "23, Windele street Oko Afo"
//       } 
// document.write(`My name is ${person.Firstname} ${person.Lastname} i study ${person.Occupation} i am  
// ${person.Age} the name of my school is ${person.School} my house is located at ${person.Address}`)

// // // // Array of Object
// let people=[
//       {Firstname: "Wlaiu",
//       Lastname: "Waris",
//       Occupation: "Web Designer",
//      Age: "10years,",
//      School: "Mrygab",
//      Address: "20, Okanle"
//       },

//       {Firstname: "Idris",
//       Lastname: "Isiaq",
//       Occupation: "App Development",
//      Age: "14 years,",
//      School: "Padeniks international school",
//      Address: "02 omola street"
//       },

//       {Firstname: "Abdulrazaq",
//       Lastname: "Fahees",
//       Occupation: "Data Analyst",
//      Age: "25 years,",
//      School: "As-sobur",
//      Address: "16 Shamsondeen street"
//       },

//       {Firstname: "Kareem",
//       Lastname: "Kamolideen",
//       Occupation: "Cloud Computing",
//      Age: "30 years,",
//      School: "victorious Saint",
//      Address: "07 olaleye street"
//       },

//       {Firstname: "Rokeeb",
//       Lastname: "Rauf",
//       Occupation: "Machine Learner",
//      Age: "11 years,",
//      School: "Oko Afo",
//      Address: "44 Ebenizer Street"
//       }
// ]
// people.map(per => {

//       document.write(`My name is ${per.Firstname} ${per.Lastname} i study ${per.Occupation} i am  
// ${per.Age} the name of my school is ${per.School} my house is located at ${per.Address}`)

// })

// // function

// function addition(x, y, z, a, b){
//       return x + y + z + a + b
// }
// alert(addition(10, 20, 30, 40, 50))


// // // Assignment 
// // // 1 make research about stark memory and heap memory of a system
// // // A stack memory is a region of computer memory where data is added or removed in a last in first out{LIFO} manner
// // // >A heap is an area of reserved computer main storage {MEMORY} that a program process can use to store data
// // // in some variable amount that wont be know until the program is running


// // //2make use of function to for the following
// // // Subtraction 
// // // multiplication
// // // division

// function Subtraction(p, q, r, s, t, u, i){
//       return p - q - r -s -t - u - i
// }
// console.log(Subtraction(100, 10, 5, 10, 20, 30, 5))

// function multiplication(a, b, c, d, e, f){
//       return a * b * c * d * e * f
// }
// console.log(multiplication(5, 6, 10, 8, 5, 2))

// function division(i, j, k, l, m){
//       return i / j/ k/ l/ m
// }
// console.log(division(500, 5, 5, 5 , 2))

// // 3 Using array of object to record your student datas

// let students=[
//       {
//       soname: "iseak",
//       middlename: "robert",
//       age: "24",
//       phonenumber: "09056473477",
//       pakage: "Web designer",
//       gender: "male"
//             },

//      {
//       soname: "onoha",
//       middlename: "bezalee",
//       age: "15",
//       phonenumber: "07043234456",
//       pakage: "Web Development",
//       gender: "female"
//             },

//      {
//       soname: "habeeb",
//       middlename: "wariz",
//       age: "19",
//       phonenumber: "08090765622",
//       pakage: "Data analyst",
//       gender: "male"
//             },

//      {
//       soname: "Frid",
//       middlename: "Faheemah",
//       age: "16",
//       phonenumber: "09122439061",
//       pakage: "Web designer",
//       gender: "female"
//             },

//      {
//       soname: "abbdulrahmon",
//       middlename: "nurudeen",
//       age: "22",
//       phonenumber: "08123657890",
//       pakage: "Web designer",
//       gender: "male"
//             }
// ]

// students.map(sil =>{ 
//       document.write(`${sil.soname} ${sil.middlename} ${sil.age} ${sil.phonenumber} ${sil.gender} `)
// })


//java script string method
  //uppercase
const fullname="fagbohun emmanuel"
const upper=fullname.toUpperCase()
document.write(fullname)
document.write(upper)

console.log(fullname)
console.log(upper)

    //tolowercase
const user="ADEWALE ADETULA"
const lower=user.toLocaleLowerCase()
document.write(user)
document.write(lower)

   //num indexof
const num="123456789"
const index= num.indexOf(7)
console.log(index)

   //alpha indexof
const alpha="we are curently learning the benefit of javascript"
const ppp= alpha.indexOf(`the`)
console.log(ppp)
 
   //charAT
const text= "stadium"
const character=text.charAt(6)
console.log(character)

   //split
const nest= "Abdulrasheed is learing javascript form his tutor{Mr Jacob Samson Aina]"
const aaa=nest.split()
console.log(aaa)

const next= "Abdulrasheed is learing javascript form his tutor{Mr Jacob Samson Aina]"
const aa=next.split("")
console.log(aa)

const net= "Abdulrasheed is learing javascript form his tutor{Mr Jacob Samson Aina]"
const a=net.split(" ")
console.log(a)
 
//assignment
   //search
const pin= "adewale"
const ay =pin.search(2)
console.log(ay)

   //substring
const hole= "ibikunle"
const ole= hole.substring(4)
console.log(ole)

   //replace just working as a text
const bea= "wizkalipha"
const mod= bea.replace(5)
console.log(mod)

   //includes
const ddd= "ifeoluwa"
const bbb= ddd.includes()
console.log(bbb)

   //value just working as a txt
const adob= "daramola"
const bod=adob.valueOf(4)
console.log(bod)

  //charcodeat
const pol= "ladipo"
const poo= pol.charCodeAt(2)
console.log(poo)

   //lastindex the number is not changing
const kkk= "PRIVILEDGE OF A FAMOUS ONE"
const kol= kkk.lastIndexOf(11)
console.log(kol)