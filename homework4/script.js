const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

function pairsOfStudents(students) {
    let girls = [];
    let boys = [];
    let pairs = [];
    for (let i = 0; i < students.length; i++) {
        const name = students[i];
        if (name[name.length-1] === 'а') {
            girls.push(name)  
        } else {
            boys.push(name)
        }  
    }      
    for (let i = 0; i < boys.length; i++) {
        pairs.push([`${boys[i]}, ${girls[i]}`]);  
    }
    return pairs;
}
let pairs = pairsOfStudents(students);
console.log(pairs);

function studentsThemes(pairs, themes) {
    let pairsThemes = [];    
    for (let i = 0; i < pairs.length; i++) {
        pairsThemes.push([`${pairs[i]}, ${themes[i]}`]);   
    }
    return pairsThemes;
}
let pairsThemes = studentsThemes(pairs, themes);
console.log(pairsThemes);

function studentsMarks (students, marks){
    let studentsMarks = [];
    for (let i = 0; i < students.length; i++) {
        studentsMarks.push([`${students[i]}, ${marks[i]}`]);  
    }
    return studentsMarks;
}
let studentMarks = studentsMarks(students, marks);
console.log(studentMarks);

function pairsMarksRandom(pairsThemes) {
    let pairsMarkResult = pairsThemes.map(name => name.concat(Math.floor(Math.random() * 5) + 1));
    return pairsMarkResult;
}
console.log(pairsMarksRandom(pairsThemes));