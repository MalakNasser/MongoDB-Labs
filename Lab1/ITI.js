//----------------------------------------------------------- MongoDM Lab1 -----------------------------------------------------------
// 1->4 is done
// 5- Create database with name
use ITI;
// 6- startcreate new collection named instructors following with inserts 
db.createCollection("instructors");
// a- Insert your own data
db.instructors.insertOne({
  firstName: 'Malak',
  lastName: 'Nasser',
  gender: 'F'
})
// b- Insert instructor without firstName and LastName
db.instructors.insertOne({
  gender: 'F'
}) // there is no error
// c- Using array containedwith lab folder instructors.txt file
let instructorsArray=[{_id:6,firstName:"noha",lastName:"hesham",
                age:21,salary:3500,
                address:{city:"cairo",street:10,building:8},
                courses:["js","mvc","signalR","expressjs"]},
                
                {_id:7,firstName:"mona",lastName:"ahmed",
                age:21,salary:3600,
                address:{city:"cairo",street:20,building:8},
                courses:["es6","mvc","signalR","expressjs"]},
                
                {_id:8,firstName:"mazen",lastName:"mohammed",
                age:21,salary:7040,
                address:{city:"Ismailia",street:10,building:8},
                courses:["asp.net","mvc","EF"]},
                
                {_id:9,firstName:"ebtesam",lastName:"hesham",
                age:21,salary:7500,
                address:{city:"mansoura",street:14,building:3},
                courses:["js","html5","signalR","expressjs","bootstrap"]}
		];
		
db.instructors.insertMany(instructorsArray);
// 7- Try the following queries: (all queries should be run using find or findOne)
// a- Display all documents for instructors collection
db.instructors.find();
// b- Display all instructors with fields firstName, lastName and address
db.instructors.find({}, { _id: 0, firstName: 1, lastName: 1, address: 1 });
// c- Display firstName and city(not full address) for instructors with age 21
db.instructors.find({ age: 21 }, { _id: 0, firstName: 1, "address.city": 1 });
// d- Display firstName and age for instructors live in Mansoura city.
db.instructors.find({"address.city" : "mansoura" }, { _id: 0, firstName: 1, age: 1 });
// e- Try to run these commands
// 1- 
db.instructors.find({ firstName:"ryhab" },{ lastName:"farouq" },{ firstName: 1,lastName: 1 });
// The output will be empty as there is no instructor with the first name "ryhab".
// If there's an instructor with firstName as "ryhab" and lastName as "farouq", it would be selected, but the projection would include only the _id field by default, along with the lastName as "farouq"
// Please note that the syntax for the find() method does not allow multiple projection objects, so only the last projection object will take effect
// 2- 
db.instructors.find({ courses:"mvc" },{ firstName: 1,courses: 1 }); 
// It displays any instructor that has "mvc" among their courses, possibly along with other courses, not necessarily just "mvc" alone

//----------------------------------------------------------- MongoDM Lab2 -----------------------------------------------------------
// 1- run following queries on instructors collection
// a- Display all documents in instructors collection
db.instructors.find();
// b- Display all instructors with salaries greater than 4000 (only show firstNameand salary)
db.instructors.find({ salary:{ $gt:4000 }},{ _id: 0, firstName: 1, salary: 1 });
// c- Display all instructors with ages less than or equal 25
db.instructors.find({ age:{ $lte:25 }});
// d- Display all instructors with city mansoura and sreet number 10 or 14 only display (firstname,address,salary)
db.instructors.find({"address.city" : "mansoura", $or: [ { "address.street": 10 }, { "address.street": 14 } ]}, { _id: 0, firstName: 1, address: 1, salary: 1 });
// e- Display all instructors who have js and jquery in their courses (both of them not one of them).
db.instructors.find({ courses: { $all: ["JS", "jQuery"] } });
// f- Display number of courses foreach instructor and display first name with number of courses
db.instructors.find({ courses: { $exists: true,  $ne: null } }).forEach(instructor => {
    const numCourses = instructor.courses.length;
    print(`${instructor.firstName} ${numCourses}`);
});
// g- Write mongodb query to get all instructors that have firstName and lastName properties, sort them by firstName ascending then by lastName descending and finally display their data FullName and age
db.instructors.find({ firstName: { $exists: true, $ne: null }, lastName: { $exists: true, $ne: null } }).sort({ firstName: 1, lastName: -1 }).forEach(instructor => {
  const fullName = `${instructor.firstName} ${instructor.lastName}`;
  const age = instructor.age;
  print(`FullName: ${fullName}, Age: ${age}`);
});
// h- Find all instructors that have fullName that contains "mohammed"
db.instructors.find({$or: [{firstName :"mohammed"},{lastName :"mohammed"}]});
// i- Delete instructor with first name “ebtesam” and has only 5 courses in courses array
db.instructors.remove({ firstName: "ebtesam", courses: { $size: 5 } });
// j- Addactive property to all instructors and set its value to true
db.instructors.updateMany({}, { $set: { active: true } });
// k- Change "EF" courseto "jquery" for "mazen mohammed" instructor (without knowing EF Index)
db.instructors.updateOne({ firstName: "mazen", lastName: "mohammed", courses: "EF" },{ $set: { "courses.$": "jquery" } });
// l- Add jquery course for "noha hesham"
db.instructors.updateOne({ firstName: "noha", lastName: "hesham" },{ $addToSet: { courses: "jquery" } });
// m-  Removecoursesproperty for“ahmed mohammed”instructor
db.instructors.updateOne({ firstName: "ahmed", lastName: "mohammed" },{ $unset: { courses: "" } });
// n- Decrease salary by 500 for all instructors that has only 3 courses in their list ($inc)
db.instructors.updateMany({ courses: { $size: 3 } },{ $inc: { salary: -500 } });
// o- Rename address field for all instructors to fullAddress
db.instructors.updateMany({}, { $rename: { address: "fullAddress" } });
// p- Change street number for noha hesham to 20
db.instructors.updateOne({ firstName: "noha", lastName: "hesham" },{ $set: { "fullAddress.street": 30 }});