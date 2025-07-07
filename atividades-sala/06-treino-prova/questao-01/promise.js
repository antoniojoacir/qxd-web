import { produtos } from "./produtos.js"

const getPromise = (url) => {
	const promise = new Promise((RESOLVE, REJECT) => {
		setTimeout(() => {
			const getNumber = () => Math.floor(Math.random() * (100 - 1 + 1)) + 1
			if (getNumber() % 2 == 0) {
				RESOLVE(produtos)
			} else {
				REJECT({ RES: "ERROR" })
			}
		}, 4000)
	})
	return promise
}

const promiseAPI = async () => {
	try {
		const response = await getPromise('http://testando.com/dados')
		console.log(response)
	}
	catch (err) {
		console.log(err, " ERRO NO SISTEMA")
	}
}

promiseAPI()
