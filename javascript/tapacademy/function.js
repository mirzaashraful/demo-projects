// let student1Marks = 93;
// let student1MaxMarks = 100;
// let student1Percentage = (student1Marks / student1MaxMarks) * 100;
// let student1Grade;

// if (student1Percentage >= 90) {
//     student1Grade = 'A';
// } else if (student1Percentage >= 80) {
//     student1Grade = 'B';
// } else if (student1Percentage >= 70) {
//     student1Grade = 'C';
// } else if (student1Percentage >= 60) {
//     student1Grade = 'D';
// } else {
//     student1Grade = 'F';
// }
// console.log(`Student 1 Grade: ${student1Grade}`);

// let student2Marks = 76;
// let student2MaxMarks = 100;
// let student2Percentage = (student2Marks / student2MaxMarks) * 100;
// let student2Grade;
// if (student2Percentage >= 90) {
//     student2Grade = 'A';
// }   else if (student2Percentage >= 80) {
//     student2Grade = 'B';
// } else if (student2Percentage >= 70) {
//     student2Grade = 'C';
// } else if (student2Percentage >= 60) {
//     student2Grade = 'D';
// } else {
//     student2Grade = 'F';
// }   
// console.log(`Student 2 Grade: ${student2Grade}`);  


//DO NOT REPEAT YOURSELF - FUNCTION TO THE RESCUE

function calculateGrade(marks, maxMarks) {
    let percentage = (marks / maxMarks) * 100;
    let grade;
    if (percentage >= 90) {
        grade = 'A';
    } else if (percentage >= 80) {
        grade = 'B';
    } else if (percentage >= 70) {
        grade = 'C';
    } else if (percentage >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }   
    //return grade;
    console.log(`Grade: ${grade}`);
}
calculateGrade(93, 100); // Student 1
calculateGrade(76, 100); // Student 2