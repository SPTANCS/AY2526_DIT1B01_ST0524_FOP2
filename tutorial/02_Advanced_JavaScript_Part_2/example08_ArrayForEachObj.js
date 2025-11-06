const students = [
    { name: 'Alex Smith', class: '10A', gpa: 3.45 },
    { name: 'Taylor Johnson', class: '10B', gpa: 2.98 },
    { name: 'Jordan Lee', class: '11A', gpa: 3.76 },
    { name: 'Casey Brown', class: '11B', gpa: 1.85 },
    { name: 'Morgan Garcia', class: '12A', gpa: 3.12 },
    { name: 'Riley Martinez', class: '12B', gpa: 2.50 },
    { name: 'Jamie Davis', class: '10A', gpa: 3.90 },
    { name: 'Avery Miller', class: '11A', gpa: 3.00 },
    { name: 'Sam Wilson', class: '12B', gpa: 2.67 },
    { name: 'Drew Anderson', class: '11B', gpa: 3.33 }
];


students.forEach((student) => {
  console.log(`Name of student is ${student.name}`);
  console.log(`class: ${student.class}`);
  console.log(`GPA is ${student.gpa}`);
  console.log();
});