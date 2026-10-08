const prompt = require('prompt-sync')();

class Student {
    constructor(name, age, course) {
        this.name = name;
        this.age = age;
        this.course = course;
    }
    displayDetails() {
        console.log("Student Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Course: " + this.course);
    }   
    introduce() {
        console.log("Hello, my name is " + this.name);
    }
}
let name = prompt("Enter student name: ");
let age = Number(prompt("Enter student age: "));
let course = prompt("Enter student course: ");
let student = new Student(name, age, course);
student.displayDetails();