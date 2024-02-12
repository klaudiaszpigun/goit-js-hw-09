/*
  1 input => opóżnienie pierwszego powiadomienia
  2 input => dodawane opóżnienie do każdego następnego powiadomienia
  3 input => ilość powiadomień

  funkcja createPromise ma zwracać jedną obietnicę która wykonuje się przez delag czasu

  opóźnienie jest generowane pseudolosowo w zmiennej shouldResolve która będzie booleanem

*/

const form = document.querySelector('form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const firstDelay = parseFloat(event.target.elements.delay.value);
  const delayStep = parseFloat(event.target.elements.step.value);
  const amount = parseInt(event.target.elements.amount.value);

  let createdPromises = 0;

  const interval = setInterval(() => {
    if (createdPromises >= amount) {
      clearInterval(interval);
      return;
    }

    createPromise(createdPromises + 1, firstDelay + createdPromises * delayStep)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.error(`❌ Rejected promise ${position} in ${delay}ms`);
      });

    createdPromises++;
  }, delayStep);
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
