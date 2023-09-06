const url = 'https://api.adviceslip.com/advice';

let advice = '';

async function getAdvice() {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

advice = await getAdvice();
console.log(advice);
