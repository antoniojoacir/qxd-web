const getEstados = async () => {
    const response = await axios.get(`https://covid19-brazil-api.now.sh/api/report/v1`)
    const json = await response.data.data
    
    const mydiv = document.getElementById('mydiv')
    mydiv.innerHTML = ""

    const table = document.createElement('table')
    table.innerHTML = `
        <tr>
            <th>ESTADO</th>
            <th>ABREVIAÇÃO</th>
            <th>N° CASOS</th>
            <th>N° SUSPEITOS</th>
            <th>N° FALECIMENTOS</th>
        </tr>
    `
    const tbody = document.createElement('tbody');
    table.appendChild(tbody);

    let numberOfCases = 0
    let numberOfSuspects = 0
    let numberOfDeaths = 0

    for (estado of json) {
       const linha = tbody.insertRow() 

        linha.insertCell().textContent = estado.state
        linha.insertCell().textContent = estado.uf
        linha.insertCell().textContent = estado.cases
        linha.insertCell().textContent = estado.suspects
        linha.insertCell().textContent = estado.deaths

        numberOfCases += estado.cases
        numberOfSuspects += estado.suspects
        numberOfDeaths += estado.deaths
    }

    mydiv.appendChild(table)

    avgOfCases = numberOfCases / json.length
    avgOfSuspects = numberOfSuspects / json.length
    avgOfDeaths = numberOfDeaths / json.length

    const media = document.createElement('div')
    media.innerHTML = `
        <p>media de casos: ${avgOfCases}</p>
        <p>media de suspeitos: ${avgOfSuspects}</p>
        <p>media de mortes: ${avgOfDeaths}</p>
    `

    const linhas = table.querySelectorAll('tbody tr td:nth-child(5)')

    linhas.forEach((linha, index) => {
        const deaths = json[index].deaths;
        if (deaths > (numberOfDeaths / json.length)) {
            linha.style.color = '#ff0000';
        }
    });

    
    mydiv.appendChild(media)
}