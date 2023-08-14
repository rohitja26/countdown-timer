const date = document.querySelector('.d');
const wday = document.querySelector('.w');

const formDate = document.querySelector('.form-date');
const formWday = document.querySelector('.form-weekday');

const custImg = document.querySelector('.custom-img');
const ownImg = document.querySelector(' .own-Img');

const timerBg = document.querySelector("#timer");

date.addEventListener("click", function(){
  formDate.classList.add("active");
  formWday.classList.remove("active")
});

wday.addEventListener("click", function(){
  formWday.classList.add("active");
  formDate.classList.remove("active")
});

ownImg.addEventListener("click", function(){
  custImg.style.display = "block";
})

const backgrounds = document.querySelector('.backgrounds');
const bgInputs = backgrounds.querySelectorAll('input');

const handleBgChange = (event) => {
  const bgClass = event.target.value;
  backgrounds.classList.add(bgClass);
};

bgInputs.forEach((input) => {
  input.addEventListener('click', handleBgChange);
});















window.onload = () => {
  document.querySelector('#create-countdown').onclick = calculate;
}

function calculate(){
  const dateV = document.querySelector('#date').value;
  const time = document.querySelector('#time').value;

  // const wdatV = date.value;

  const endTime = new Date(dateV + " " + time);
  
  const interval = setInterval(() => calculateTime(endTime),1000);

}

function calculateTime(endTime){
  const currentTime = new Date();

  const days = document.querySelector('#countdown-days');
  const hours = document.querySelector('#countdown-hours');
  const minutes = document.querySelector('#countdown-minutes');
  const seconds = document.querySelector('#countdown-seconds');

  if(endTime > currentTime){
    const timeLeft = (endTime - currentTime) / 1000;

    console.log(timeLeft);
    days.innerText = Math.floor(timeLeft / (24 * 60 * 60));
    hours.innerText = Math.floor((timeLeft / (60 * 60)) % 24);
    minutes.innerText = Math.floor((timeLeft / 60) % 60);
    seconds.innerText = Math.floor(timeLeft % 60);
  } else {
    days.innerText = 0
    hours.innerText = 0
    minutes.innerText = 0
    seconds.innerText = 0
  }
}