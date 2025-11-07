let input = require("readline-sync");

const studInfo = [
  {
    id: 112233,
    studName: "John",
    studAdminNo: '2312345',
    sex: 'M',
    studGPA: 2.8
  },
  {
    id: 223344,
    studName: "Jane",
    studAdminNo: '2354321',
    sex: 'F',
    studGPA: 3.2
  },
  {
    id: 441122,
    studName: "Diana",
    studAdminNo: '2312525',
    sex: 'F',
    studGPA: 3.5
  },
  {
    id: 554422,
    studName: "Joe",
    studAdminNo: '2366345',
    sex: 'M',
    studGPA: 3.1
  },
  {
    id: 441129,
    studName: "Vivian",
    studAdminNo: '2366345',
    sex: '',
    studGPA: 3.75
  },
];

function greetStudent(studentArr, id) {
  // Find the index of the student
  /* TODO : Add Code Here 
   Part b.
   Find the object using id 
  */

  let selectedStudent = null;

  // for (let i = 0; i < studentArr.length ; i++) {
  //   if (studentArr[i].id == id) { // found the match
  //     selectedStudent = studentArr[i];
  //     break;
  //   }
  // }

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
  selectedStudent = studentArr.find( student => student.id == id);

  function calculateClassAverageGPA() {
    let totalGPA = 0;
    studentArr.forEach(student => {
      totalGPA += student.studGPA;
    });
    return (totalGPA / studentArr.length).toFixed(2);
  }

  function greetStudent() {
      /* TODO : Add Code Here */
      /* 
      Part c.
      Greet student 
      Hi, <studName>
      */
      return `Hi! ${selectedStudent.studName}`
  }

  function greetwSalutation() {
      /* TODO : Add Code Here */
      /* Part d.
         Sex = ‘M’ => Mr.
         Sex = ‘F’ => Ms.
         Sex = ‘’ => (no salutation display)       
         Hi, <salutation> <studName>
      */
      let str = '';

      switch (selectedStudent.sex) {
        case 'M' : str = 'Mr. ';
          break;
        case 'F' : str = 'Ms. ';
          break;
      }
      return `Hi, ${str}${selectedStudent.studName}.`
  }

  function greetwTimeofDay() {
      /* TODO : Add Code Here */
      /* Part e.
         Greet student depend on the time of the day.
         Time: 00:00 to 11:59 -> Morning
         Time: 12:00 to 17:00 -> Afternoon
         Time: 17:01 to 23:59 -> Evening
  
         Good <Time> <studName>
         Example: Good Afternoon Diana 
      */
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
      const todayDate = new Date(); 
      const hrs = todayDate.getHours();

      let result = "Good Evening";
      if (hrs < 12) {
        result = "Good Morning";
      } else if (hrs <= 17) {
        result = "Good Afternoon";
      } 
      return `${result} ${selectedStudent.studName}`;
  }

  function yourGPA() {
      /* TODO : Add Code Here 
         Part f. 
         Display GPA of student
         Your GPA is <studGPA>
      */
      return `Your GPA is ${selectedStudent.studGPA}\n` +
             `The average GPA of the class is ${calculateClassAverageGPA()}`;
  }

  return {
    greetStudent,
    greetwSalutation,
    greetwTimeofDay,
    yourGPA
  };
}

////////////////////////////////////////////////////////////////////////////////////
// main program starts here
////////////////////////////////////////////////////////////////////////////////////

console.clear();
// Prompt the user to enter student id
/* TODO : Add Code Here */
/* Part a. */
/* Prompt user to enter the Student Id. */

//const studentID = 441122;

const studentID = input.questionInt("Enter the Student id: ");;
const greeting  = greetStudent(studInfo, studentID);

try {
  console.log(greeting.greetStudent());
  console.log(greeting.greetwSalutation());
  console.log(greeting.greetwTimeofDay());
  console.log(greeting.yourGPA());
} catch (err) {
  console.log('Student not Found.');
}