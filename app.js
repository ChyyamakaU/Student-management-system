studentsDatabase = [
    { firstName: "Philip", lastName: "Joesph", email: "phil@gmail.com", studentId: "ST-001", passWord: 3201, level: 100 },
    { firstName: "Grace", lastName: "Peter", email: "gra@gmail.com", studentId: "ST-002", passWord: 1092, level: 200 },
    { firstName: "Gift", lastName: "Joesph", email: "gift@gmail.com", studentId: "ST-003", passWord: 8734, level: 300 },
    { firstName: "Helwn", lastName: "Paa", email: "Hel@gmail.com", studentId: "ST-004", passWord: 2359, level: 400 }
]

 staff = [
        { title: "Mr", firstName: "Danjuma", lastName: "Peter", email: "Danju@gmail.com", staffId: "ST001", passWord: 1923, levelCoordinator: 100 },
        { title: "Dr", firstName: "Dan", lastName: "Paul", email: "Dan@gmail.com", staffId: "ST002", passWord: 1083, levelCoordinator: 200 },
        { title: "Mr", firstName: "John", lastName: "Doel", email: "John@gmail.com", staffId: "ST003", passWord: 1424, levelCoordinator: 300 },
        { title: "Dr", firstName: "Jumma", lastName: "Joel", email: "jum@gmail.com", staffId: "ST004", passWord: 2943, levelCoordinator: 400 }
    ]

class StudenManagementSystem {

    constructor(firstName, lastName, email, myID, myPassword, level) {
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.myID = myID
        this.password = myPassword
        this.level = level
        this.isLoggedIn = false
        // this.studentId = this.generateStudentId()
        // StudenManagementSystem.existingStudents.push(this)
    }

    static signIn(email, passWord) {
        let student = studentsDatabase.find(studentsIn=> studentsIn.email=== email) 
            if (!student){
return "You are not a student, kindly signup"
        }
        student.isLoggedIn =true 
        console.log(`Hello ${student.firstName} ${student.lastName}, Welcome to your Dashboard`)
        return student
    
    }

    static signup(firstName, lastName, myEmail, myID, passWord, level) {
        let student = studentsDatabase.find((studentsUp) => studentsUp.studentId === myID)

        if (student) { return "Your details already exists in the database, kindly signin." }
        // else { return "Lets get you signed up!!" }

     let newStudent =   new StudenManagementSystem(firstName, lastName, myEmail, myID, passWord, level)
studentsDatabase.push(newStudent)
        return "You have sucessfully signed up, sign in now"
    }

}
// let secondStudent = new StudenManagementSystem("John", "Doe", "John@gmail.com")
// let thirdStudent =new StudenManagementSystem("Jane", "James", "Jane@gmail.com")
// let fourtStudent =new StudenManagementSystem("Juliet", "Paul", "Juliet@gmail.com")
// console.log(firstStudent)
// console.log(secondStudent)
// console.log(thirdStudent)
// console.log(fourtStudent)

console.log(StudenManagementSystem.signIn("phil@gmail.com", 3201))
console.log(StudenManagementSystem.signup("Amaka", "Umu", "Amaka@gmail.com", "ST005", 1209, 100))
console.log(studentsDatabase)



// class StaffManagement {
   

//     constructor(title, firstName, lastName, email, staffId, passWord, levelCoordinator) {
//         this.title = title
//         this.firstName = firstName
//         this.lastName = lastName
//         this.email = email
//         this.staffId = staffId
//         this.passWord = passWord
//         this.levelCoordinator = levelCoordinator
//     }

//     static login(Id, passWord) {
//         for (let theStaff of StaffManagement.staff) {

//             if (theStaff.staffId === id && theStaff.levelCoordinator === passWord) {
//                 return staff
//             } else { "You do nothave acess to this page" }
//         }

//     }

// }

// console.log(StaffManagement.login("ST002", 2943))