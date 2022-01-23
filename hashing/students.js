const rollNumbers = []
const totalNumbers = []

for (let i = 1001; i <= 1100; i++) {
  rollNumbers.push(i)
}

for (let i = 100; i <= 200; i++) {
  totalNumbers.push(i)
}

let result = document.createElement('h1')
result.style.color = 'green'
document.body.appendChild(result)
let info = document.createElement('h3')
info.style.color = 'red'
document.body.appendChild(info)

let studentForm = document.getElementById('student__form')

studentForm.onsubmit = (e) => {
  e.preventDefault()
  const rollNumber = Number(e.target.roll__number.value)
  if (!rollNumbers.includes(rollNumber)) {
    info.style.display = 'block'
    info.innerText = `Invalid roll number: ${rollNumber}`
    return
  }
  const index = hash(rollNumber, rollNumbers.length)
  const totalNumber = totalNumbers[index]
  info.style.display = 'none'
  result.innerText = `Total Marks: ${totalNumber}`
}

const hash = (roll, size) => {
  return roll % size - 1
}
