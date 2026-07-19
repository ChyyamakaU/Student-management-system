studentsDatabase = [
    { firstName: "Jane", lastName: "John", email: "jane@gmail.com", studentId: "STU-001", passWord: 3201, level: 100 },
    { firstName: "Grace", lastName: "Peter", email: "gra@gmail.com", studentId: "STU-002", passWord: 1092, level: 200 },
    { firstName: "Gift", lastName: "John", email: "gift@gmail.com", studentId: "STU-003", passWord: 8734, level: 300 },
    { firstName: "Helwn", lastName: "Paa", email: "Hel@gmail.com", studentId: "STU-004", passWord: 2359, level: 400 }
]

staffDatabase = [
    { title: "Mr", firstName: "Danjuma", lastName: "Peter", email: "Danju@gmail.com", staffId: "STA-001", passWord: 1923, levelCoordinator: 100 },
    { title: "Dr", firstName: "Dan", lastName: "Paul", email: "Dan@gmail.com", staffId: "STA-002", passWord: 1083, levelCoordinator: 200 },
    { title: "Mrs", firstName: "Jamila", lastName: "Doel", email: "John@gmail.com", staffId: "STA-003", passWord: 1424, levelCoordinator: 300 },
    { title: "Dr", firstName: "Jumma", lastName: "Joel", email: "jum@gmail.com", staffId: "STA-004", passWord: 2943, levelCoordinator: 400 }
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
        let student = studentsDatabase.find(studentsIn => studentsIn.email === email && myPassword ===passWord)
        if (!student) {
            return "You are not a student, kindly signup"
        }
      else{  student.isLoggedIn = true
        console.log(`Hello ${student.firstName} ${student.lastName}, Welcome to your Dashboard`)
      }
        return student

    }

    static signup(firstName, lastName, myEmail, myID, passWord, level) {
        let student = studentsDatabase.find((studentsUp) => studentsUp.studentId === myID)

        if (student) { return "Your details already exists in the database, kindly signin." }
        // else { return "Lets get you signed up!!" }

        let newStudent = new StudenManagementSystem(firstName, lastName, myEmail, myID, passWord, level)
        studentsDatabase.push(newStudent)
        return `Hello ${firstName} ${lastName}, You have sucessfully signed up, sign in now.`
    }

}

// console.log(StudenManagementSystem.signIn("phil@gmail.com", 3201))
// console.log(StudenManagementSystem.signup("Amaka", "Umu", "Amaka@gmail.com", "STU-005", 1209, 100))
// console.log(studentsDatabase)
class StaffManagement {

    static signedInStaff = null;
    constructor(title, firstName, lastName, email, staffId, password) {
        this.title = title
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.staffId = staffId
        this.passWord = password
        this.isSignedIn = false
        // this.levelCoordinator = levelCoordinator
    }

    static signIn(email, password) {
        let staff = staffDatabase.find(staffIn => staffIn.email === email && staffIn.passWord === password )
        if (!staff) {
            return "You are not a staff, Kindly sign up"
        }

       else {staff.isSignedIn = true;
        StaffManagement.signedInStaff = staff;
        console.log(`Hello ${staff.title} ${staff.firstName} ${staff.lastName}, Welcome to your Dashboard.`)
       
        }
         return staff
    }

static signUp (title, firstName, lastName, email, staffd, password){
let staff =staffDatabase.find((staffUp)=> staffUp.email === email)

if (staff) {return "You already have an existing account in the database, kindly signin"}

let newstaaff = new StaffManagement(title, firstName, lastName, email, staffd, password)
staffDatabase.push(newstaaff)

return `Hello ${title} ${firstName} ${lastName}, You have sucessfully signed up, sign in now.`
}


static viewStudents(){
  
if (!StaffManagement.signedInStaff) {
        return "You are not signed in.";
    }

    let myStudents = studentsDatabase.filter(student =>
        student.level === StaffManagement.signedInStaff.levelCoordinator
    );
return myStudents
}


// static updateRecord (id, levelCoordinator, ){}



}

console.log(StaffManagement.signIn("jum@gmail.com", 2943))
console.log(StaffManagement.signUp("Miss", "Ada", "Igwe", "ada@gmail.com", "STA-006", 3671))
// console.log(staffDatabase)
console.log(StaffManagement.viewStudents())