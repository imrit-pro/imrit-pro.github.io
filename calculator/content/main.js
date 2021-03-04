//Registring SW
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('<add-path-here>/sw.js');
  });

//calculator function
const del = document.querySelector('.clear');
var a = document.calc.txt.value;
 
del.addEventListener('click', () =>{
	var a = document.calc.txt.value;
	document.calc.txt.value = a.substr(0, a.length-1);
})

//Function to display about box
const menuBtn = document.querySelector('.menuBtn');
const closeBtn = document.querySelector('.closeBtn');
const container = document.querySelector('.container');
const calculator = document.querySelector('.calculator');

menuBtn.addEventListener('click', () => {
	container.classList.add('container-show');
	calculator.classList.add('calculator-show');
});

closeBtn.addEventListener('click', () => {
	container.classList.remove('container-show');
	calculator.classList.add('calculator-close');
});



//text-to-speech api

var txtInput = document.querySelector('.value');
var voiceList = document.querySelector('#voiceList');
var btnSpeak = document.querySelector('.equal');
var synth = window.speechSynthesis;
var voices = [];

PopulateVoices();
if(speechSynthesis !== undefined){
	speechSynthesis.onvoiceschanged = PopulateVoices;
}

btnSpeak.addEventListener('click', ()=> {
	var toSpeak = new SpeechSynthesisUtterance(txtInput.value);
	var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
	voices.forEach((voice)=>{
		if(voice.name === selectedVoiceName){
			toSpeak.voice = voice;
		}
	});
	synth.speak(toSpeak);
});

function PopulateVoices(){
	voices = synth.getVoices();
	var selectedIndex = voiceList.selectedIndex < 0 ? 0 : voiceList.selectedIndex;
	voiceList.innerHTML = '';
	voices.forEach((voice)=>{
		var listItem = document.createElement('option');
		listItem.textContent = voice.name;
		listItem.setAttribute('data-lang', voice.lang);
		listItem.setAttribute('data-name', voice.name);
		voiceList.appendChild(listItem);
	});

	voiceList.selectedIndex = selectedIndex;
}

/*
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI notify the user they can add to home screen
  btnAdd.style.display = 'block';
});

btnAdd.addEventListener('click', (e) => {
  // hide our user interface that shows our A2HS button
  btnAdd.style.display = 'none';
  // Show the prompt
  deferredPrompt.prompt();
  // Wait for the user to respond to the prompt
  deferredPrompt.userChoice
    .then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      deferredPrompt = null;
    });
}); */

var msg;

  window.addEventListener('beforeinstallprompt', (e) => {

    e.preventDefault();

    msg = e;

  });

  function install() {

    msg.prompt();

  }

  window.onerror = function(errorMsg, url, lineNumber) {

    alert('Error: ' + errorMsg + ' Script: ' + url + ' Line: ' + lineNumber);

  }
