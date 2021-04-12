class Person{
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }
    showFullName(){
        alert(this.name + " " + this.surname);
    }
}
class Student extends Person{
    constructor (name, surname, middleName, year){
        super(name, surname);
        this.middleName = middleName;
        this.year = year;
    }
    showFullName(){
        alert(this.name + ' ' +this.surname + ' ' + this.middleName + ' ' + this.year);
    }
    showCourse(){
        let course = 2021 - this.year;
                if (course <= 6) {
                    return course;
                } else {
                    return " Ended the university"
                }
    }
}
let stud1 = new Student ("Petro", "Petrenko", "Petrovych", 2015);
console.log(stud1.showFullName("Petrovych"));
console.log("Current course: "  +  stud1.showCourse());
