const word = document.querySelector(".word");
const hint = document.querySelector(".hint span");
const inp = document.querySelector("input");
const check = document.querySelector(".check");
const refresh = document.querySelector(".refresh");
const timet = document.querySelector(".time b");
let correct, timer;

const initTimer = (maxTime) => {
  clearInterval(timer);
  timer = setInterval(() => {
    if (maxTime > 0) {
      maxTime--;
      return (timet.innerText = maxTime);
    }
    alert(`Time off! ${correct.toUpperCase()} was the correct word`);
    initgame();
  }, 1000);
};
const initgame = () => {
  initTimer(30);
  let rand = words[Math.floor(Math.random() * words.length)];
  let arr = rand.word.split("");
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  word.innerText = arr.join("");
  hint.innerText = rand.hint;
  correct = rand.word.toLowerCase();
  inp.value = "";
  inp.setAttribute("maxlength", correct.length);
};
initgame();
const checkinp = () => {
  let user = inp.value.toLocaleLowerCase();
  if (!user) return alert(`Please Enter a Word Check`);
  if (user != correct) return alert(`Oops! ${user} is not a Correct Word`);
  alert(`Congrats ${user.toUpperCase()} is a Correct Word`);

  initgame();
};
refresh.addEventListener("click", initgame);
check.addEventListener("click", checkinp);
