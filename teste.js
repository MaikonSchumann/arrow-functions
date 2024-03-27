const averagePoints = (arr, subject) => {
  let totalMarks = 0;
  let totalStudents = 0;

  arr.forEach((student) => {
    if (
      student.subjects.includes(subject) &&
      student.results.hasOwnProperty(subject)
    ) {
      totalMarks += student.results[subject];
      totalStudents++;
    }
  });

  return totalStudents > 0 ? totalMarks / totalStudents : 0;
};

let averageMarks = averagePoints(students, "maths");
console.log(averageMarks);
