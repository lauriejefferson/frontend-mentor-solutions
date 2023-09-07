const url = 'https://api.adviceslip.com/advice';
const adviceNum = document.querySelector('.advice__number');
const adviceText = document.querySelector('.advice__text');
const btn = document.querySelector('button');

async function getAdvice() {
  const response = await fetch(url);
  let data = await response.json();
  adviceNum.textContent = `Advice #${data.slip.id}`;
  adviceText.textContent = `${data.slip.advice}`;
}

btn.addEventListener('click', async () => {
  await getAdvice();
});
