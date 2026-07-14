class StudenManagementSystem {

    static existingStudents = [
        { firstName: "Philip", lastName: "Joesph", email: "phil@gmail.com", studentId: "ST-001", passWord: 3201 },
        { firstName: "Grace", lastName: "Peter", email: "gra@gmail.com", studentId: "ST-002", passWord: 1092 },
        { firstName: "Gift", lastName: "Joesph", email: "gift@gmail.com", studentId: "ST-003", passWord: 8734 },
        { firstName: "Helwn", lastName: "Paa", email: "Hel@gmail.com", studentId: "ST-004", passWord: 2359 }
    ]
    constructor(firstName, lastName, myEmail) {
        this.firstName = firstName
        this.lastName = lastName
        this.myEmail = myEmail
        // this.studentId = this.generateStudentId()
        StudenManagementSystem.existingStudents.push(this)
    }
   
//  generateStudentId (){
//    const nextid=StudenManagementSystem.existingStudents.length+1
//  }

    static signIn (id, passWord) {
        for (const student of StudenManagementSystem.existingStudents) {
            if (student.studentId === id && student.passWord === passWord) {
                return student;
            } else {return "Incorrect Student ID or name"}
        }
    }




studentDashboard(){


}




// static signUp(){
// for(const student of StudenManagementSystem.existingStudents){
// if(student.)

// }

// }





}
// let firstStudent = new StudenManagementSystem("Amaka", "Umu", "Amaka@gmail.com")
// let secondStudent = new StudenManagementSystem("John", "Doe", "John@gmail.com")
// let thirdStudent =new StudenManagementSystem("Jane", "James", "Jane@gmail.com")
// let fourtStudent =new StudenManagementSystem("Juliet", "Paul", "Juliet@gmail.com")
// console.log(firstStudent)
// console.log(secondStudent)
// console.log(thirdStudent)
// console.log(fourtStudent)
// console.log(StudenManagementSystem.existingStudents)
console.log(StudenManagementSystem.signIn("ST-001", 3201) )