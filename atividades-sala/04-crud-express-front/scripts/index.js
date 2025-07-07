const params = new URLSearchParams(document.location.search.substring(1))
const id = params.get("id")

const getStudents = async () => {
	const response = await fetch("http://localhost:3000/students/list")
	const json = await response.json()

	const div = document.getElementById('students')
	div.innerHTML = ""

	const table = document.createElement('table')
	table.innerHTML = ""

	table.innerHTML = `
		<tr>
    	<th>ID</th>
    	<th>NOME</th>
      <th>CURSO</th>
      <th>IRA</th>
      <th>EDITAR</th>
			<th>DELETAR</th>
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
		const editAnchor = document.createElement('a')
		editAnchor.textContent = "Editar"
		editAnchor.href = `./index-put.html?id=${student.id}`
		edit.appendChild(editAnchor)

		const dell = li.insertCell()
		const deleteAnchor = document.createElement('a')
		deleteAnchor.textContent = "Apagar"
		deleteAnchor.href = "#"
		deleteAnchor.addEventListener('click', async (event) => {
			event.preventDefault();
			await fetch(
				`http://localhost:3000/students/delete/${student.id}`,
				{ method: "DELETE" }
			)

			getStudents()
		})
		dell.appendChild(deleteAnchor)

		table.appendChild(li)
	}
	div.appendChild(table)
}

const createStudent = async (event) => {
	console.log("Função createStudent foi chamada em:", new Date().toLocaleTimeString())
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
	console.log(json)
}

const editStudent = async (event) => {
	event.preventDefault()

	const name = document.getElementById('name').value
	const curse = document.getElementById('curse').value
	const ira = document.getElementById('ira').value

	const student = { name, curse, ira }

	const response = await fetch(
		`http://localhost:3000/students/edit/${id}`,
		{
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(student)
		}
	)
	const json = await response.json()
	console.log(json)
}

const retriveStudent = async () => {
	await fetch(`http://localhost:3000/students/retrive/${id}`)
		.then(response => response.json())
		.then(json => {
			document.getElementById('name').value = json.name
			document.getElementById('curse').value = json.curse
			document.getElementById('ira').value = json.ira
		})
		.catch(err => console.log(err))
}

const deleteStudent = async (id) => {
}
