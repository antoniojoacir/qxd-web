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
