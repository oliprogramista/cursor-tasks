class Student {
    constructor(university, course, fullName) {
        this._university = university;
        this._course = course;
        this._fullName = fullName;
        this._dismiss = false;
        this._marks = [];
    }

    getInfo() {
        return this._dismiss ? null : `Студент ${this._course}го курсу ${this._university}, ${this._fullName}`;
    }

    get marks() {
        return this._dismiss ? null : this._marks;
    }

    set marks(mark) {
        if (this._dismiss) return;
        this._marks.push(mark);
    }

    getAverageMark () {
        if (this._dismiss) return null;
        let sumMarks = 0;
        for (let i = 0; i < this._marks.length; i++) {
            sumMarks += this._marks[i];
        }
        return sumMarks / this._marks.length;
    }

    exclude(){
        this._dismiss = true;
        console.log("student excluded");
    }

    recover(){
        this._dismiss = false;
        console.log("student recovered");
    }

}

let student = new Student("Universidad Rey Juan Carlos",1,"Olha Papezhuk");
console.log(student)
console.log(student.getInfo());
student.marks = 5;
console.log(student.marks);
console.log(student.getAverageMark());
student.exclude();
console.log(student.getInfo());
student.marks = 9;
console.log(student.marks);
console.log(student.getAverageMark());
student.recover();
console.log(student.getInfo());
student.marks = 10;
console.log(student.marks);
console.log(student.getAverageMark());