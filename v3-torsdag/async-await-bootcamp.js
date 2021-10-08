const letsDance = (danceStyle) => {
  return new Promise((resolve, reject) => {
    if (danceStyle === "polka") {
      resolve("Yes, polka is my thing!");
    } else {
      reject("Not even if a pandemic roamed the earth!");
    }
  });
};

// letsDance("polka")
//   .then((resp) => console.log(resp))
//   .catch((err) => console.log(err));

// letsDance("tango")
//   .then((resp) => console.log(resp))
//   .catch((err) => console.log(err));

/*

1.  Researchamålgruppen-4s
2. Skissauppendesignpåpapper-2s
3. GörskissentillpixelperfectmockupIFigma/XD-3s 
4. Koda-3s
5. Stackoverflow:afel-1s
6. Testaprodukten-2s
7. Firalyckatprojekt-1s
  */

const createPromiseFunction = (todo, time) => {
  console.log(`${todo} starts. Duration ${time}`);
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time * 1000, `${todo} ends.`);
  });
};
/*
createPromiseFunction("Research", 4).then((result) => {
  console.log(result);
  createPromiseFunction("Skissa", 2).then((result) => {
    console.log(result);
    createPromiseFunction("Mockup", 3).then((result) => {
      console.log(result);
      createPromiseFunction("Koda", 3).then((result) => {
        console.log(result);
        createPromiseFunction("Stackoverflowfelsökning", 1).then((result) => {
          console.log(result);
          createPromiseFunction("Testa", 2).then((result) => {
            console.log(result);
            createPromiseFunction("Fira", 1).then((result) => {
              console.log(result);
            });
          });
        });
      });
    });
  });
});
*/
const createAsyncFunction = async (todo, time) => {
  console.log(`${todo} starts. Duration ${time}`);
  setTimeout(() => {
    console.log(`${todo} ends.`);
  }, time * 1000);
};

const doProject = async () => {
  await createAsyncFunction("Research", 4);
  await createAsyncFunction("Skissa", 2);
};

doProject();
