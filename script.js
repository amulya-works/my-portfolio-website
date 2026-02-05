// Force load voices (important for Chrome)
speechSynthesis.getVoices();

/* ======================
   TYPING ANIMATION
====================== */

const texts = [
  "Learning Web Development",
  "Building Cool Projects",
  "Future Software Engineer"
];

let i = 0;
let j = 0;

function type(){
  if(j < texts[i].length){
    document.querySelector(".typing").textContent += texts[i][j];
    j++;
    setTimeout(type, 80);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase(){
  if(j > 0){
    document.querySelector(".typing").textContent = texts[i].substring(0, j-1);
    j--;
    setTimeout(erase, 50);
  } else {
    i = (i + 1) % texts.length;
    setTimeout(type, 300);
  }
}

type();

/* ======================
   VOICE INTRO (FEMALE)
====================== */

function speakIntro(){
  const msg = new SpeechSynthesisUtterance(
    "Hi, I'm Amulya. Welcome to my portfolio website."
  );

  const voices = speechSynthesis.getVoices();

  const femaleVoice = voices.find(v =>
    v.name.toLowerCase().includes("female") ||
    v.name.toLowerCase().includes("woman") ||
    v.name.toLowerCase().includes("zira") ||
    v.name.toLowerCase().includes("samantha") ||
    v.name.toLowerCase().includes("google")
  );

  if(femaleVoice) msg.voice = femaleVoice;

  msg.lang = "en-US";
  msg.rate = 1;
  msg.pitch = 1.1;

  speechSynthesis.speak(msg);
}

/* ======================
   AI CHAT TOGGLE
====================== */

function toggleChat(){
  document.getElementById("chatbox").classList.toggle("hidden");
}

/* ======================
   AI CHAT RESPONSES
====================== */

function sendMessage(){
  const input = document.getElementById("userInput");
  const chat = document.getElementById("chatBody");
  let msg = input.value.toLowerCase();

  if(msg === "") return;

  chat.innerHTML += `<p><b>You:</b> ${input.value}</p>`;

  let reply = "Ask me about projects, skills, or contact details!";

  if(msg.includes("project")){
    reply = "She built an NGO Donor Website and a Quantum Eraser Simulation.";
  }
  else if(msg.includes("learn") || msg.includes("skill")){
    reply = "She is learning web development, JavaScript, and building real projects.";
  }
  else if(msg.includes("contact")){
    reply = "You can contact her through Gmail, LinkedIn, GitHub, or WhatsApp.";
  }
  else if(msg.includes("who")){
    reply = "Amulya is a first year BTech student passionate about technology and development.";
  }

  chat.innerHTML += `<p><b>AI:</b> ${reply}</p>`;
  chat.scrollTop = chat.scrollHeight;
  input.value = "";
}