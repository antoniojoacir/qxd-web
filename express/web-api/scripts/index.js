const getStudents = async () => {
    const response = await fetch("http://localhost:3000/students/list")
    const json = await response.json()

    const div = document.getElementById('students')
    div.innerHTML = ""

    const table = document.createElement('table')
    table.innerHTML = ""

    table.innerHTML = `
                <tr>
                    <th>
                        ID
                    </th>
                    <th>
                        NOME
                    </th>
                    <th>
                        CURSO
                    </th>
                    <th>
                        IRA
                    </th>
                    <th>
                        EDIT
                    </th>
                </tr>
            `

    for (student of json) {
        const li = table.insertRow()

        const id = li.insertCell()
        id.textContent = student.id

        const name = li.insertCell()
        name.textContent = student.name

        const curse = li.insertCell()
        curse.textContent = student.curse

        const ira = li.insertCell()
        ira.textContent = student.ira

        const edit = li.insertCell()
        const button = document.createElement('button')
        button.onclick = "console.log(ok)"
        edit.appendChild(button)

        table.appendChild(li)
    }
    div.appendChild(table)
}

const createStudent = async (event) => {
    event.preventDefault()

    const name = document.getElementById("name").value
    const curse = document.getElementById("curse").value
    const ira = document.getElementById("ira").value

    const student = { name, curse, ira }
    
    const res = await fetch(
        "http://localhost:3000/students/create",
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(student)
        }
    )
    const json = await res.json()
}