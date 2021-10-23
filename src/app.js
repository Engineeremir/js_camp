let student = { id: 1, name: "emir" }

function save(student, puan = 10) {
    console.log(student.name + " : " + puan)
}

save(student, 67); // => gönderdiğim değeri aldı

function read(puan = 10, student) {
    console.log(student.name + " : " + puan)
}

read(undefined, student)

let students = [student, { id: 2, name: "emirhan" }]

console.log(students)