//Функция для формирования объявления
function onDeviceReady() {

	document.removeEventListener('deviceready', onDeviceReady, false);
	  
	// Устанавливаем настройки для показа рекламы
	admob.setOptions({
		publisherId: "ca-app-pub-2338676251368727/6706473414", //Идентификатор для запроса рекламы от Admob
		adSize: admob.AD_SIZE.BANNER, //Устанавливаем размер баннерной рекламы
		/*
			admob.AD_SIZE.BANNER: 320x50. Standard Banner (Phones and Tablets).
			admob.AD_SIZE.IAB_MRECT: 300x250. IAB Medium Rectangle (Phones and Tablets).
			admob.AD_SIZE.IAB_BANNER: 468x60. IAB Full-Size Banner (Tablets).
			admob.AD_SIZE.IAB_LEADERBOARD: 728x90. IAB Leaderboard (Tablets).
			admob.AD_SIZE.SMART_BANNER: (See table) Smart Banner (Phones and Tablets).
		*/
		bannerAtTop: false, //отображать баннер вверху - true, отображать - баннер внизу - false
		overlap: false, //Отображать рекламу поверх webview
		offsetStatusBar: false, //Указываем false, чтобы реклама не перекрывала строку состояния iOS7
		isTesting: false, //Показывать рекламу (если это тестовая реклама - устанавливаемя true)
		autoShowBanner: true, //Автоматический показ баннера
	});

	//Запускает начало показа баннеров (автоматически, если для параметра Autoshow Banner установлено значение true)
	admob.createBannerView();
}

//Вызываем функцию для вывода баннера
document.addEventListener("deviceready", onDeviceReady, false);