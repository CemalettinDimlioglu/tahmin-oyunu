 const form = document.getElementById('form');
const resultArea = document.getElementById('resultArea');
const attempt = document.getElementById('attempt');
const restart = document.getElementById('restart');

restart.style.display = 'none';
restart.onclick = () => {
  window.location.reload();
};

let count = 5;

let guessNumber = Math.round(Math.random() * 10);
console.log(guessNumber);

form.onsubmit = (e) => {
  e.preventDefault();
  console.log(e);
  let entry = e.target[0].value;
  console.log();
  if (entry === '' || entry > 10 || entry < 1) {
    writeMessage('Please Enter a valid number');
  } else if (guessNumber == entry) {
    setImg(true);
    writeMessage('You have won');
    e.target[0].disabled = true;
    e.submitter.disabled = true;
  } else {
    count -= 1;
    if (count <= 0) {
      writeMessage('You have lost');
      setImg(false);
      e.target[0].disabled = true;
      e.submitter.disabled = true;
    } else {
      writeMessage(`You had ${count} attempt`);
    }
  }
  form.reset();
};

const writeMessage = (msg) => (attempt.innerText = msg);

const setImg = (img2) => {
  const img = document.createElement('img');
  img.style.width = '400px';
  img.style.height = '300px';
  if (img2 === true) {
    img.setAttribute('src', 'img/congratulations-congrats.gif');
    resultArea.prepend(img);
    restart.style.display = 'block';
  } else {
    img.setAttribute('src', 'img/m-bison-game-over.gif');
    resultArea.prepend(img);
    restart.style.display = 'block';
  }
};
//  form.style.display = 'none';
//  form.style.display = 'none';