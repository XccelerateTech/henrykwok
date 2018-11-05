class Person {
  constructor (options) {
    this.name = options.name;
    this.age = options.age;
  }
    info () {
      return ("The person is called "+ this.name + " and " +"is "+ this.age + " years old.")
  }
}

  class Student extends Person {
    constructor (options) {
      super(options);
      this.gpa = options.gpa;
    }

    info () {
      return ("The student is called "+ this.name + " and " +"is "+ this.age + " years old. He has an overall GPA of "+this.gpa+ " in the university.")
  }
}


const student1 = new Student ({name: "Tom", age: 44, gpa: 4.0});
student1.info();