const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, { 
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}];

function getSubjects(student) {
    let someSubjects = Object.keys(student.subjects);
    let subjectToUpperCase = someSubjects.map(x => x.charAt(0).toUpperCase() + x.slice(1, x.length));
    let replaceSymbol = subjectToUpperCase.map(x => x.replaceAll('_', ' '));
    return replaceSymbol;
}
console.log(getSubjects(students[0]));
function getAverageMark(student) {
    let marks = Object.values(student.subjects);
    let flattedMarks = marks.flatMap(x => x);
    return (flattedMarks.reduce((a,b) => a + b , 0) / flattedMarks.length).toFixed(2);
}
console.log('averageMark', getAverageMark(students[0]));

function getStudentInfo(student){
    let studInfo = {
        name: student.name,
        course: student.course,
        average_mark: getAverageMark(student)
    }
    return studInfo;
}
console.log(getStudentInfo(students[0]));

function getStudentsNames(students) {
    return students.map(x => x.name).sort();
}
console.log(getStudentsNames(students));

function getBestStudent(students){ 
    const marksArray = students.map((x) => getAverageMark(x));
    const maxAverageMark = Math.max(...marksArray);
    let maxAverageMarkIndex = marksArray.indexOf(maxAverageMark.toString());
    let result = students[maxAverageMarkIndex].name;
    return result;
    }
console.log(getBestStudent(students));

function calculateWordLetters(word) {
    const amount = {};
    word.split('').forEach(e => e in amount ? amount[e] += 1 : amount[e] = 1);
    return amount;
}
console.log(calculateWordLetters("програмісти"))