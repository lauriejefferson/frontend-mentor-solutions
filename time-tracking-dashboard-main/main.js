const daily = document.querySelector('.daily');
const weekly = document.querySelector('.weekly');
const monthly = document.querySelector('.monthly');

const workPrevious = document.querySelector(
  '.work .contents .bottom .previous .previous-hours'
);
const workCurrent = document.querySelector(
  '.work .contents .bottom .current-hours'
);

const playPrevious = document.querySelector(
  '.play .contents .bottom .previous .previous-hours'
);
const playCurrent = document.querySelector(
  '.play .contents .bottom .current-hours'
);

const studyPrevious = document.querySelector(
  '.study .contents .bottom .previous .previous-hours'
);
const studyCurrent = document.querySelector(
  '.study .contents .bottom .current-hours'
);

const exercisePrevious = document.querySelector(
  '.exercise .contents .bottom .previous .previous-hours'
);
const exerciseCurrent = document.querySelector(
  '.exercise .contents .bottom .current-hours'
);

const socialPrevious = document.querySelector(
  '.social .contents .bottom .previous .previous-hours'
);
const socialCurrent = document.querySelector(
  '.social .contents .bottom .current-hours'
);

const selfcarePrevious = document.querySelector(
  '.selfcare .contents .bottom .previous .previous-hours'
);
const selfcareCurrent = document.querySelector(
  '.selfcare .contents .bottom .current-hours'
);

console.log(workPrevious);
async function getData() {
  try {
    const response = await fetch('data.json');
    const res = await response.json();
    return res;
  } catch (err) {
    console.error(err);
  }
}

const result = await getData();
const data = Object.values(result);
console.log(data);

daily.addEventListener('click', () => {
  workPrevious.innerHTML = `Yesterday - ${data[0].timeframes.daily.previous} hrs`;
  playPrevious.innerHTML = `Yesterday - ${data[1].timeframes.daily.previous} hrs`;
  studyPrevious.innerHTML = `Yesterday - ${data[2].timeframes.daily.previous} hrs`;
  exercisePrevious.innerHTML = `Yesterday - ${data[3].timeframes.daily.previous} hrs`;
  socialPrevious.innerHTML = `Yesterday - ${data[4].timeframes.daily.previous} hrs`;
  selfcarePrevious.innerHTML = `Yesterday - ${data[5].timeframes.daily.previous} hrs`;

  workCurrent.innerHTML = `${data[0].timeframes.daily.current} Hrs`;
  playCurrent.innerHTML = `${data[1].timeframes.daily.current} Hrs`;
  studyCurrent.innerHTML = `${data[2].timeframes.daily.current} Hrs`;
  exerciseCurrent.innerHTML = `${data[3].timeframes.daily.current} Hrs`;
  socialCurrent.innerHTML = `${data[4].timeframes.daily.current} Hrs`;
  selfcareCurrent.innerHTML = `${data[5].timeframes.daily.current} Hrs`;
});

weekly.addEventListener('click', () => {
  workPrevious.innerHTML = `Last Week - ${data[0].timeframes.weekly.previous} hrs`;
  playPrevious.innerHTML = `Last Week - ${data[1].timeframes.weekly.previous} hrs`;
  studyPrevious.innerHTML = `Last Week - ${data[2].timeframes.weekly.previous} hrs`;
  exercisePrevious.innerHTML = `Last Week - ${data[3].timeframes.weekly.previous} hrs`;
  socialPrevious.innerHTML = `Last Week - ${data[4].timeframes.weekly.previous} hrs`;
  selfcarePrevious.innerHTML = `Last Week - ${data[5].timeframes.weekly.previous} hrs`;

  workCurrent.innerHTML = `${data[0].timeframes.weekly.current} Hrs`;
  playCurrent.innerHTML = `${data[1].timeframes.weekly.current} Hrs`;
  studyCurrent.innerHTML = `${data[2].timeframes.weekly.current} Hrs`;
  exerciseCurrent.innerHTML = `${data[3].timeframes.weekly.current} Hrs`;
  socialCurrent.innerHTML = `${data[4].timeframes.weekly.current} Hrs`;
  selfcareCurrent.innerHTML = `${data[5].timeframes.weekly.current} Hrs`;
});

monthly.addEventListener('click', () => {
  workPrevious.innerHTML = `Last Month - ${data[0].timeframes.monthly.previous} hrs`;
  playPrevious.innerHTML = `Last Month - ${data[1].timeframes.monthly.previous} hrs`;
  studyPrevious.innerHTML = `Last Month - ${data[2].timeframes.monthly.previous} hrs`;
  exercisePrevious.innerHTML = `Last Month - ${data[3].timeframes.monthly.previous} hrs`;
  socialPrevious.innerHTML = `Last Month - ${data[4].timeframes.monthly.previous} hrs`;
  selfcarePrevious.innerHTML = `Last Month - ${data[5].timeframes.monthly.previous} hrs`;

  workCurrent.innerHTML = `${data[0].timeframes.monthly.current} Hrs`;
  playCurrent.innerHTML = `${data[1].timeframes.monthly.current} Hrs`;
  studyCurrent.innerHTML = `${data[2].timeframes.monthly.current} Hrs`;
  exerciseCurrent.innerHTML = `${data[3].timeframes.monthly.current} Hrs`;
  socialCurrent.innerHTML = `${data[4].timeframes.monthly.current} Hrs`;
  selfcareCurrent.innerHTML = `${data[5].timeframes.monthly.current} Hrs`;
});
