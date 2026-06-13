function login(){

document.getElementById("loginPage").style.display="none";
document.getElementById("dashboard").style.display="block";

}

function showSection(id){

document.querySelectorAll(".content").forEach(section=>{
section.classList.add("hidden");
});

document.getElementById(id).classList.remove("hidden");

}

const theme = document.getElementById("themeColor");

theme.addEventListener("change",()=>{

document.documentElement.style.setProperty(
"--primary",
theme.value
);

});

function updateTimeTheme(){

const hour = new Date().getHours();

const body = document.body;
const icon = document.getElementById("weatherIcon");

body.classList.remove("day","night");

if(hour >= 6 && hour < 18){

body.classList.add("day");
icon.innerHTML = "☀️☁️";

}else{

body.classList.add("night");
icon.innerHTML = "🌙☁️";

}

}

updateTimeTheme();

function createRain(){

const container =
document.getElementById("weather-animation");

for(let i=0;i<100;i++){

const drop =
document.createElement("div");

drop.classList.add("rain");

drop.style.left =
Math.random()*100 + "vw";

drop.style.animationDuration =
(0.5 + Math.random()) + "s";

container.appendChild(drop);

}

}

function simulateWeather(){

const conditions =
["sunny","night","rain"];

const weather =
conditions[Math.floor(Math.random()*3)];

if(weather==="rain"){

createRain();

const icon =
document.getElementById("weatherIcon");

icon.innerHTML = "🌧️⚡";

setInterval(()=>{

document.body.style.background=
"#ffffff";

setTimeout(()=>{
document.body.style.background="";
},100);

},4000);

}

}

simulateWeather();
