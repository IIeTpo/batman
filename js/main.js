$(document).ready(function () {
	//console.log('Страница загрузилась');							// Это сообщение появится в консоле только тогда, когда страница полностю загрузится
	let menuItem = $('.menu-item');									// создаем переменную js и в нее добавляем элементы меню
	//console.log(menuItem);

	menuItem.on('click', function(event) {
		event.preventDefault();										// Это действие отменяет стандартное дейстивие(при нажатии на таб(меню) нас перекидывало на начало страницв, потому что в href была затычка #")
		let activeTab = $(this).attr('href');						// Узнаем активную вкладку меню
		$('.visible').toggleClass('visible');						// Если у вкладки есть параметр "видимый", мы убираем этот параметр
		$(activeTab).toggleClass('visible');						// Присваеваем активной вкладке параметр "видимый"
		$('.menu-item-active').toggleClass('menu-item-active');		// Если у вкладки есть параметр "активный", мы убираем этот параметр
		$(this).toggleClass('menu-item-active');					// Присваеваем активной вкладке параметр "активный"
		//console.log($(this).attr('href'));						// Выводит в консоль ссылку по которой нажали
	});

	let premieresItem = $('.premieres-item');						// Переменная для ссылок преьер стран, чтобы не кидало на начало страницы
	console.log(premieresItem);

	premieresItem.on('click', function(event) {
		event.preventDefault();
	});
});