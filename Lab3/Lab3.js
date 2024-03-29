// 1- Create new database named: FacultySystemV2
use FacultySystemV2;

// Create student collection that has (FirstName, lastName, IsFired, FacultyID, array of objects, each object has CourseID, grade)
db.createCollection("student");

let student = [{"FirstName":"Rice","LastName":"Marquiss","IsFired":false,"FacultyID":2,"Courses":[{"CourseID":101,"Grade":76},{"CourseID":102,"Grade":34},{"CourseID":103,"Grade":83}]},
{"FirstName":"Fern","LastName":"Sperrett","IsFired":true,"FacultyID":1,"Courses":[{"CourseID":101,"Grade":84}]},
{"FirstName":"Jefferson","LastName":"Pummery","IsFired":true,"FacultyID":2,"Courses":[{"CourseID":101,"Grade":67},{"CourseID":102,"Grade":38},{"CourseID":103,"Grade":91}]},
{"FirstName":"Rachel","LastName":"Gue","IsFired":false,"FacultyID":4,"Courses":[{"CourseID":101,"Grade":96},{"CourseID":102,"Grade":61}]},
{"FirstName":"Minni","LastName":"Muzzall","IsFired":false,"FacultyID":4,"Courses":[{"CourseID":101,"Grade":76}]},
{"FirstName":"Earle","LastName":"Sedman","IsFired":false,"FacultyID":3,"Courses":[{"CourseID":101,"Grade":82},{"CourseID":102,"Grade":93}]},
{"FirstName":"Marybeth","LastName":"Babar","IsFired":false,"FacultyID":1,"Courses":[{"CourseID":101,"Grade":76},{"CourseID":102,"Grade":80},{"CourseID":103,"Grade":99}]},
{"FirstName":"Egor","LastName":"Kohring","IsFired":false,"FacultyID":3,"Courses":[{"CourseID":101,"Grade":78}]},
{"FirstName":"Nikki","LastName":"Monkley","IsFired":false,"FacultyID":1,"Courses":[{"CourseID":101,"Grade":75},{"CourseID":102,"Grade":25},{"CourseID":103,"Grade":97}]},
{"FirstName":"Zachariah","LastName":"Cocke","IsFired":false,"FacultyID":4,"Courses":[{"CourseID":101,"Grade":21},{"CourseID":102,"Grade":70},{"CourseID":103,"Grade":36}]},
{"FirstName":"Muffin","LastName":"Ferentz","IsFired":true,"FacultyID":3,"Courses":[{"CourseID":101,"Grade":68},{"CourseID":102,"Grade":35},{"CourseID":103,"Grade":73}]},
{"FirstName":"Florian","LastName":"Elms","IsFired":true,"FacultyID":1,"Courses":[{"CourseID":101,"Grade":29},{"CourseID":102,"Grade":55}]},
{"FirstName":"Merralee","LastName":"Haylor","IsFired":false,"FacultyID":2,"Courses":[{"CourseID":101,"Grade":74},{"CourseID":102,"Grade":26},{"CourseID":103,"Grade":88}]},
{"FirstName":"Charlton","LastName":"Golde","IsFired":true,"FacultyID":4,"Courses":[{"CourseID":101,"Grade":25},{"CourseID":102,"Grade":50},{"CourseID":103,"Grade":27}]},
{"FirstName":"Hewet","LastName":"Gimblett","IsFired":false,"FacultyID":4,"Courses":[{"CourseID":101,"Grade":42}]},
{"FirstName":"Hannah","LastName":"Scardefield","IsFired":true,"FacultyID":4,"Courses":[{"CourseID":101,"Grade":62}]},
{"FirstName":"Dede","LastName":"Sydes","IsFired":true,"FacultyID":2,"Courses":[{"CourseID":101,"Grade":61}]},
{"FirstName":"Stillmann","LastName":"Parrott","IsFired":true,"FacultyID":3,"Courses":[{"CourseID":101,"Grade":49}]},
{"FirstName":"Evin","LastName":"Smurfit","IsFired":true,"FacultyID":3,"Courses":[{"CourseID":101,"Grade":88},{"CourseID":102,"Grade":44}]},
{"FirstName":"Christen","LastName":"Philipps","IsFired":false,"FacultyID":2,"Courses":[{"CourseID":101,"Grade":54}]},
{"FirstName":"Tann","LastName":"Ferson","IsFired":true,"FacultyID":3,"Courses":[{"CourseID":101,"Grade":76},{"CourseID":102,"Grade":64},{"CourseID":103,"Grade":25}]},
{"FirstName":"Edita","LastName":"Gabriely","IsFired":true,"FacultyID":2,"Courses":[{"CourseID":101,"Grade":33}]},
{"FirstName":"Joy","LastName":"Matuszewski","IsFired":true,"FacultyID":3,"Courses":[{"CourseID":101,"Grade":99},{"CourseID":102,"Grade":30}]},
{"FirstName":"Ewen","LastName":"Mosdall","IsFired":true,"FacultyID":3,"Courses":[{"CourseID":101,"Grade":24}]},
{"FirstName":"Vikki","LastName":"Ellerker","IsFired":false,"FacultyID":3,"Courses":[{"CourseID":101,"Grade":20},{"CourseID":102,"Grade":76},{"CourseID":103,"Grade":100}]},
{"FirstName":"Cynde","LastName":"Gergler","IsFired":false,"FacultyID":2,"Courses":[{"CourseID":101,"Grade":98},{"CourseID":102,"Grade":64},{"CourseID":103,"Grade":25}]},
{"FirstName":"Carri","LastName":"Maior","IsFired":false,"FacultyID":4,"Courses":[{"CourseID":101,"Grade":94},{"CourseID":102,"Grade":20}]},
{"FirstName":"Edmon","LastName":"Malt","IsFired":false,"FacultyID":1,"Courses":[{"CourseID":101,"Grade":68},{"CourseID":102,"Grade":67}]},
{"FirstName":"Rochelle","LastName":"Wrankling","IsFired":false,"FacultyID":2,"Courses":[{"CourseID":101,"Grade":41},{"CourseID":102,"Grade":62},{"CourseID":103,"Grade":83}]},
{"FirstName":"Fay","LastName":"Halstead","IsFired":false,"FacultyID":4,"Courses":[{"CourseID":101,"Grade":86}]},
{"FirstName":"Danny","LastName":"Dowears","IsFired":true,"FacultyID":3,"Courses":[{"CourseID":101,"Grade":82}]},
{"FirstName":"Calypso","LastName":"Cuppitt","IsFired":true,"FacultyID":4,"Courses":[{"CourseID":101,"Grade":41},{"CourseID":102,"Grade":37}]},
{"FirstName":"Cherie","LastName":"Alderman","IsFired":false,"FacultyID":3,"Courses":[{"CourseID":101,"Grade":79},{"CourseID":102,"Grade":86},{"CourseID":103,"Grade":58}]},
{"FirstName":"Leyla","LastName":"Adrienne","IsFired":true,"FacultyID":4,"Courses":[{"CourseID":101,"Grade":73}]},
{"FirstName":"Bonnie","LastName":"Esplin","IsFired":false,"FacultyID":1,"Courses":[{"CourseID":101,"Grade":71}]},
{"FirstName":"Rafi","LastName":"Stutely","IsFired":false,"FacultyID":4,"Courses":[{"CourseID":101,"Grade":55}]},
{"FirstName":"Ruddie","LastName":"Micallef","IsFired":true,"FacultyID":1,"Courses":[{"CourseID":101,"Grade":30},{"CourseID":102,"Grade":33}]},
{"FirstName":"Onofredo","LastName":"Dawdary","IsFired":true,"FacultyID":1,"Courses":[{"CourseID":101,"Grade":50},{"CourseID":102,"Grade":35}]},
{"FirstName":"Lianna","LastName":"Goodliff","IsFired":true,"FacultyID":3,"Courses":[{"CourseID":101,"Grade":88}]},
{"FirstName":"Inga","LastName":"Cossell","IsFired":true,"FacultyID":4,"Courses":[{"CourseID":101,"Grade":29}]},
{"FirstName":"Elfrida","LastName":"Normanvell","IsFired":false,"FacultyID":1,"Courses":[{"CourseID":101,"Grade":59},{"CourseID":102,"Grade":95}]},
{"FirstName":"Joellyn","LastName":"Rarity","IsFired":false,"FacultyID":3,"Courses":[{"CourseID":101,"Grade":32},{"CourseID":102,"Grade":86},{"CourseID":103,"Grade":86}]},
{"FirstName":"Waylon","LastName":"Hartburn","IsFired":true,"FacultyID":4,"Courses":[{"CourseID":101,"Grade":56},{"CourseID":102,"Grade":41}]},
{"FirstName":"Celle","LastName":"Dulake","IsFired":true,"FacultyID":3,"Courses":[{"CourseID":101,"Grade":86},{"CourseID":102,"Grade":28}]},
{"FirstName":"Dorolice","LastName":"Raithbie","IsFired":false,"FacultyID":1,"Courses":[{"CourseID":101,"Grade":64},{"CourseID":102,"Grade":60},{"CourseID":103,"Grade":93}]},
{"FirstName":"Klarrisa","LastName":"Covet","IsFired":false,"FacultyID":1,"Courses":[{"CourseID":101,"Grade":31}]},
{"FirstName":"Amye","LastName":"Gilston","IsFired":false,"FacultyID":2,"Courses":[{"CourseID":101,"Grade":29},{"CourseID":102,"Grade":48}]},
{"FirstName":"Lauryn","LastName":"Lowman","IsFired":false,"FacultyID":1,"Courses":[{"CourseID":101,"Grade":24},{"CourseID":102,"Grade":24}]},
{"FirstName":"Retha","LastName":"Reay","IsFired":false,"FacultyID":4,"Courses":[{"CourseID":101,"Grade":42},{"CourseID":102,"Grade":88}]},
{"FirstName":"Neil","LastName":"Di Biagio","IsFired":true,"FacultyID":4,"Courses":[{"CourseID":101,"Grade":29},{"CourseID":102,"Grade":65},{"CourseID":103,"Grade":85}]}];

db.student.insertMany(student);

// Create Faculty collection that has (Faculty Name, Address)
db.createCollection("faculty");

let faculty = [{"Id":1,"FacultyName":"Engineering","Address":"2742 Crownhardt Hill"},
{"Id":2,"FacultyName":"Science","Address":"8594 Dorton Place"},
{"Id":3,"FacultyName":"Art","Address":"04995 Lake View Alley"},
{"Id":4,"FacultyName":"Educarion","Address":"7 Bellgrove Junction"}];

db.faculty.insertMany(faculty);

// Create Course collection, which has (Course Name, Final Mark)
db.createCollection("course");

let course = [{"Id":101,"CourseName":"Java","FinalMark":13},
{"Id":102,"CourseName":"OOP","FinalMark":2},
{"Id":103,"CourseName":"Database","FinalMark":83}];

db.course.insertMany(course);

// 2- Display each student Full Name along with his average grade in all courses. $concat 
db.student.aggregate([
  {
    $project: {
      FullName: { $concat: ["$FirstName", " ", "$LastName"] },
      AverageGrade: { $avg: "$Courses.Grade" }
    }
  },{
      $project:{_id:0,FullName:1,AverageGrade:1}
  }
])

// 3- Using aggregation display the sum of final mark for all courses in Course collection
db.course.aggregate([
  {
     $group: {
      _id: null,
      TotalFinalMarks: { $sum: "$FinalMark" }
    }
  },{
    $project:{_id:0,TotalFinalMarks:1}
  }
])

// 4- Implement (one to many) relation between Student and Course, by adding array of Courses IDs in the student object

// Select specific student with his name, and then display his courses.  
let specificStudent = db.student.findOne({ FirstName: "Rachel" });
  specificStudent.Courses.forEach(course => {
    let courseInfo = db.course.findOne({ Id: course.CourseID });
      print(`Course Name: ${courseInfo.CourseName}, Grade: ${course.Grade}`);
});

// 4- .Implement relation between Student and faculty by adding the faculty object in the student using _id

//  Select specific student with his name, and then display his faculty
db.student.aggregate([
  {
    $match: {
      FirstName: "Rachel",
      LastName: "Gue"
    }
  },
  {
    $lookup: {
      from: "faculty",
      localField: "FacultyID",
      foreignField: "Id",
      as: "StudentFaculty"
    }
  },
  {
      $unwind: "$StudentFaculty"
  },
  {
    $project: {
      _id: 0,
      FullName: { $concat: ["$FirstName", " ", "$LastName"] },
      FacultyName: "$StudentFaculty.FacultyName",
      FacultyAddress: "$StudentFaculty.Address"
    }
  }
])

