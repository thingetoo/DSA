const students = ['a', 'b', 'c', 'd'];

const findStudents = (allStudents, name) => {
    for (let i = 0; i < allStudents.length; i++) {
        if (allStudents[i] === name) {

            return console.log('Found: ', allStudents[i])
        }
    }
}

findStudents(students, 'a');