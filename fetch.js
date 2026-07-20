// async function fetchPost() {

//     const controller = new AbortController();


//     const timeout = setTimeout(() => {
//         controller.abort(new Error("controller aborted took too long"))
//     }, 2000)

//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//             signal: controller.signal
//         })

//         let res = await response.json()
//         let count = 0;
//         for (let i = 0; i < res.length; i++) {

//             if (res[i].body) { count++ }

//         }

//         console.log(`The total number of posts are ${count}`)

//         // console.log (res)
//     }
//     catch (e) {
//         console.log(e.message)
//     }
// }
// fetchPost()



// 2


import { readFile } from "node:fs/promises"

async function downloadData() {

    try {
        let [student, courses, grade] = await Promise.all(
            [
                readFile("student.json", "utf8"),
                readFile("courses.json", "utf8"),
                readFile("grade.json", "utf8")
            ]
        );

        const myStudent = JSON.parse(student);
        const myCourses = JSON.parse(courses);
        const myGrade = JSON.parse(grade);


        console.log(`The student name is ${myStudent.name}`)

        console.log(`The total number of courses is ${myCourses.length}`)
        console.log(`The total number of grades is ${myGrade.length}`)
    }
    catch (e) {
        console.log(e.message)
    }
}

downloadData()