let label;
const eventArray = [];
const nowEvent = document.querySelector('.outputText');

let key;
function onClick() {
	label = document.createElement('div');
	userEvent = prompt('Введите событие');

	label.className = 'outputText';

	//console.log(nowEvent);

	const date = new Date();
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();

	if (hours < 10) hours = '0' + hours;
	if (minutes < 10) minutes = `0${minutes}`;
	if (seconds < 10) seconds = `0${seconds}`;

	const nowTime = hours + ':' + minutes + ':' + seconds;

	label.innerText = `< ${userEvent} в ${nowTime} >`;
	nowEvent.append(label);

	//eventArray.push(label.innerText);

	//localStorage.setItem('key', label.innerText);
}

//const myText = localStorage.getItem('key');
//nowEvent.append(myText);
