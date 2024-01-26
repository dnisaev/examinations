const students = [
    {name: "Bob"},
    {name: "Alex"},
    {name: "Donald"}
]
const filteredStudents = students.filter(s => s.name !== "Kate")
const lengthDiff = students.length - filteredStudents.length
const newValue = (lengthDiff && 67.40) || (26.96 && 96.10)

//Какое значение получит переменная newValue?
//Неверный ответ - 96.1
//Верный ответ - 96.10

console.log(newValue)