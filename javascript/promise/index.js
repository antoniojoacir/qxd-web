/*const getPromiseAPI = (url) => {
  let promise = new Promise((RESOLVE, REJECT) => {
    setTimeout(() => {
      const num = 3;
      if (num % 2 === 0) RESOLVE("OK: NUMERO PAR");
      else REJECT("NOK: NUMERO IMPAR");
    }, 3000);
  });
  return promise;
};

const clientAPI = () => {
  getPromiseAPI("https://nothing.com/dados")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

const emulando_outra_comp = () => {
  console.log("EMULANDO OUTRA COMPUTACAO");
};

clientAPI();
emulando_outra_comp();
*/

const getPromiseAPI = (url) => {
  let promise = new Promise((RESOLVE, REJECT) => {
    setTimeout(() => {
      const num = 3;
      if (num % 2 === 0) RESOLVE("OK: NUMERO PAR");
      else REJECT("NOK: NUMERO IMPAR");
    }, 3000);
  });
  return promise;
};

const clientAPI = async () => {
    try {
        const res = await getPromiseAPI("https://nothing.com/dados")
        console.log(res);
    } catch (err) {
        console.log(err);
    }
}

clientAPI()
