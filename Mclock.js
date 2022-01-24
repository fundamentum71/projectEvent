//часы
function digitalClock() {
	var date = new Date();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	//* добавление ведущих нулей */
	if (hours < 10) hours = '0' + hours;
	if (minutes < 10) minutes = '0' + minutes;
	if (seconds < 10) seconds = '0' + seconds;
	document.getElementById('id_clock').innerHTML =
		hours + ':' + minutes + ':' + seconds;
	setTimeout('digitalClock()', 1000);
}
digitalClock();
//***********************

//нажатие на кнопку
//const eventNow = document.getElementsByClassName('mainButton')[0];

//dickElement.style.width = '150px';

//const label = document.createElement('outputText');
//const counter = document.createElement('outputText');
//let count = 0;
//label.innerText = `Накажи ${userName} пока взламывается Пентагон`;
//label.className = 'JsTextTop';
//counter.innerText = `${count}%`;
//counter.className = 'JsTextBot';
//document.body.append(label);
//document.body.append(counter);
//const timerId = setInterval(() => {
//	if (count < 100) {
//		count++;
//		counter.innerText = `${count}%`;
//} else {
//	clearInterval(timerId);
//	label.innerText = `${userName} наказан! Пентагон взломан!`;
//	label.className = 'JsTextTop';
//	counter.hidden = true;
//	}
//}, 100);
