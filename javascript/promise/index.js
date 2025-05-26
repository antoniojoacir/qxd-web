const getPromiseAPI = (url) => {
  let promise = new Promise((RESOLVE, REJECT) => {
    const num = 3;
    if (num % 2 === 0) RESOLVE("OK: NUMERO PAR");
    else REJECT("NOK: NUMERO IMPAR");
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

clientAPI();
