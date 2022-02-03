document.addEventListener('DOMContentLoaded', () => {
	const eventList = document.querySelector('.output__interactive-list'),
		addInput = document.querySelector('.adding__input'),
		addForm = document.querySelector('form.add'),
		checkBox = addForm.querySelector('[type="checkbox"]');

	let eventDb = [];

	if (localStorage.getItem('todo')) {
		eventDb = JSON.parse(localStorage.getItem('todo'));
		displayMessage();
	}

	//создаст элемент отправкой формы
	addForm.addEventListener('submit', (e) => {
		e.preventDefault();
		if (!addInput.value) return;
		//if (addInput.value > 20) {
		//	addInput.value = `${addInput.value.substring(0, 22)}...`;
		//}
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
		//if (newSlctr.todo.lingth > 24) {addForm = }
		if (eventDb.lingth === 0) todo.innerHTML = '';
		eventDb.forEach(function (item, i) {
			displayMessage += `
			<li class="output__interactive-item">
			<input class = "${
				item.checked ? 'checkedYES' : ''
			}" type = "checkbox" id='item_${i}' ${
				item.checked ? 'checked' : ''
			}  />

			<label 
			for= 'item_${i}' 
			class= " ${item.importan ? 'important' : ''} ${
				item.checked ? 'checkedYES' : ''
			}" >${item.todo}</label>

			<div class="delete"></div> 
			
			</li>
			`;
			eventList.innerHTML = displayMessage;
			deleteElement();
			localStorage.setItem('todo', JSON.stringify(eventDb));
		});
	}

	function deleteElement() {
		document.querySelectorAll('.delete').forEach((btn, i) => {
			btn.addEventListener('click', () => {
				btn.parentElement.remove();
				eventDb.splice(i, 1);
				displayMessage();
				console.log(eventDb);
			});
		});
	}

	eventList.addEventListener('change', function (event) {
		let idInput = event.target.getAttribute('id');
		let forLabel = eventList.querySelector('[for=' + idInput + ']');
		let valueLabel = forLabel.innerHTML;
		//console.log('forLabel: ', valueLabel);

		eventDb.forEach(function (item) {
			if (item.todo === valueLabel) {
				item.checked = !item.checked;
				displayMessage();
				localStorage.setItem('todo', JSON.stringify(eventDb));
			}
		});
	});

	eventList.addEventListener('contextmenu', function (e) {
		e.preventDefault();
		eventDb.forEach(function (item) {
			if (item.todo === e.target.innerHTML) {
				item.importan = !item.importan;
				displayMessage();
				localStorage.setItem('todo', JSON.stringify(eventDb));
			}
		});
	});
});
