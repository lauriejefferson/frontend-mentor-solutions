const url = 'https://api.adviceslip.com/advice';
const adviceNum = document.querySelector('h6');
const adviceText = document.querySelector('p');

let advice = '';

async function getAdvice() {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

advice = await getAdvice();
console.log(advice);
