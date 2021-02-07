// Registering ServiceWorker
if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('sw.js').then(function (registration) {
		// Registration was successful
		console.log('ServiceWorker registration successful with scope: ', registration.scope);
	}).catch(function (err) {
		// registration failed :(
		console.log('ServiceWorker registration failed: ', err);
	});
}


//Function to display about
const menuBtn = document.querySelector('.menuBtn');
const closeBtn = document.querySelector('.closeBtn');
const container = document.querySelector('.container');
const calculator = document.querySelector('.calculator');

menuBtn.addEventListener('click', () =>{
  container.classList.add('container-show');
  calculator.classList.add('calculator-show');
});

closeBtn.addEventListener('click', () =>{
  container.classList.remove('container-show');
  calculator.classList.remove('calculator-show');
});
