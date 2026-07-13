class StudenManagementSystem {

constructor (fName, lName, email){

this.firstName =fName
this.lastName =lName
this.myEmail = email
this.studentid= this.generatestudentid()
}

generatestudentid(){
    return Math.floor(Math.random()*100)
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
