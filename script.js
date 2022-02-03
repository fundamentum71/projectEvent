document.addEventListener('DOMContentLoaded', () => {
	const eventList = document.querySelector('.output__interactive-list'),
		addInput = document.querySelector('.adding__input'),
		addForm = document.querySelector('form.add'),
		checkBox = addForm.querySelector('[type="checkbox"]');

	let eventDb = [];

	//if (localStorage.getItem('todo')) {
	//	eventDb = JSON.parse(localStorage.getItem('todo'));
	//	displayMessage();
	//}

	//создаст элемент отправкой формы
	addForm.addEventListener('submit', (e) => {
		e.preventDefault();
		if (!addInput.value) return;
		let newSlctr = {
			todo: addInput.value,
			checked: false,
			importan: false,
		};

		if (checkBox.checked) {
			newSlctr.importan = true;
		}
		eventDb.push(newSlctr);

		displayMessage();

		localStorage.setItem('todo', JSON.stringify(eventDb));
		console.log(eventDb);

		e.target.reset();
	});

	function displayMessage() {
		let displayMessage = '';

		eventDb.forEach(function (item, i) {
			displayMessage += `
			<li class="output__interactive-item">
			<input class = "checked" type = "checkbox" id='item_${i}'  ${
				item.checked ? 'checked' : ''
			}"  />

			<label 
			for= 'item_${i}' 
			class= " ${item.importan ? 'important' : ''}" >
			Запись # ${i + 1} - ${item.todo}</label>

			<div class="delete"></div> 
			
			</li>
			`;
			eventList.innerHTML = displayMessage;
		});

		document.querySelectorAll('.delete').forEach((btn, i) => {
			btn.addEventListener('click', () => {
				btn.parentElement.remove();
				eventDb.splice(i, 1);
				displayMessage();
			});
		});

		//eventList.addEventListener('change', function (event) {
		//	let idInput = event.target.getAttribute('id');
		//	let valueLabel = eventList.querySelector(
		//		'[for=' + idInput + ']'
		//	).innerHTML;

		//	eventDb.forEach(function (item) {
		//		if (item.todo === valueLabel) {
		//			item.checked = !item.checked;
		//			localStorage.setItem('todo', JSON.stringify(eventDb));
		//		}
		//	});
		//});

		//document.querySelectorAll('.getNew').forEach((btn, i) => {
		//	btn.addEventListener('click', () => {
		//		btn.eventList.style.text-decoration = "line-through";
		//		eventDb.slice(i, 1);
		//		displayMessage();
		//	});
		//});
	}
});
