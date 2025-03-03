function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age; 
}
new Student('Ivan', 'male', 19);
new Student('Oleg', 'male', 23);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}


Student.prototype.addMark = function (mark) {
  if(this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function (...marks) {
  if (this.marks === undefined) {
    this.marks = [];
    for (let arg of marks) {
      this.marks.push(arg);
    }
  } 
}

Student.prototype.getAverage = function () {
  let sum = 0;
  this.marks.forEach((mark) => {sum += parseInt(mark)});
  return sum / this.marks.length; 
}

Student.prototype.exclude = function (reason)  {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}