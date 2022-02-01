document.addEventListener('DOMContentLoaded', () => {
	const eventList = document.querySelector('.output__interactive-list'),
		addInput = document.querySelector('.adding__input'),
		addForm = document.querySelector('form.add'),
		checkBox = addForm.querySelector('[type="checkbox"]');

	const eventDb = {
		slctr: [],
	};

	addForm.addEventListener('submit', (e) => {
		e.preventDefault();

		let newSlctr = addInput.value;
		if (newSlctr) {
			if (newSlctr.length > 21) {
				newSlctr = `${slctr.substring(0, 22)}...`;
			}

			const favorite = checkBox.checked;

			if (favorite) {
				eventDb.importan = true;
			}

			eventDb.slctr.push(newSlctr);
			eventDb.slctr[newSlctr];
			createEventList(eventDb.slctr, eventList);
		}
		e.target.reset();
		console.log(eventDb.slctr);
	});

	//function checkedOn() {
	//	const favorite = checkBox.checked;
	//	if (favorite) {
	//		eventDb.slctr.style.backgroundColor = 'red';
	//	}
	//}

	function createEventList(elem, parent) {
		parent.innerHTML = '';
		elem.forEach((evente, i) => {
			parent.innerHTML += ` <li class="output__interactive-item"> ${
				i + 1
			} - ${evente} <div class="getNew"></div> <div class="delete"></div> </li> `;
		});
		//Удаление на кнопку
		document.querySelectorAll('.delete').forEach((btn, i) => {
			btn.addEventListener('click', () => {
				btn.parentElement.remove();
				eventDb.slctr.splice(i, 1);
				createEventList(eventDb.slctr, eventList);
			});
		});
	}

	//function nowDate() {
	//	const date = new Date();
	//	let hours = date.getHours();
	//	let minutes = date.getMinutes();
	//	let seconds = date.getSeconds();

	//	if (hours < 10) hours = '0' + hours;
	//	if (minutes < 10) minutes = `0${minutes}`;
	//	if (seconds < 10) seconds = `0${seconds}`;

	//	let nowTime = hours + ':' + minutes + ':' + seconds;

	//	return nowTime;
	//}
	//checkedOn();
	createEventList(eventDb.slctr, eventList);
});
