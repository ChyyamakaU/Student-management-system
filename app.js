class StudenManagementSystem {

static existingStudents= [
    {firstName: "Philip", lastName: "Joesph", email:"phil@gmail.com", studentId:1, passWord:3201},
      {firstName: "Grace", lastName: "Peter", email:"phil@gmail.com", studentId:2, passWord:1092},
        {firstName: "Gift", lastName: "Joesph", email:"phil@gmail.com", studentId:3, passWord:8734},
          {firstName: "Helwn", lastName: "Paa", email:"phil@gmail.com", studentId:4, passWord: 2359}
]

constructor (fName, lName, email){
this.firstName =fName
this.lastName =lName
this.myEmail = email
this.studentId= this.generateStudentId()
StudenManagementSystem.students.push(this)
}

generateStudentId(){
    return Math.ceil(Math.random()*10)
}

// studentDashboard(surName){
// return StudenManagementSystem[i]
// }

signIn(id, surName){
if (this.studentId ===id && this.lastName === surName){


}

}



}
let firstStudent =new StudenManagementSystem("Amaka", "Umu", "Amaka@gmail.com")
let secondStudent =new StudenManagementSystem("John", "Doe", "John@gmail.com")
let thirdStudent =new StudenManagementSystem("Jane", "James", "Jane@gmail.com")
let fourtStudent =new StudenManagementSystem("Juliet", "Paul", "Juliet@gmail.com")
console.log(firstStudent)
console.log(secondStudent)
console.log(thirdStudent)
console.log(fourtStudent)
console.log(StudenManagementSystem.students)
