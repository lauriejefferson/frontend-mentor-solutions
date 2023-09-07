const url = 'https://api.adviceslip.com/advice';
const adviceNum = document.querySelector('.advice__number');
const adviceText = document.querySelector('advice__text');
const btn = document.querySelector('button');

let advice = '';

async function getAdvice() {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

advice = await getAdvice();
console.log(advice);

adviceNum.textContent = `Advice #${advice.slip.id}`;
