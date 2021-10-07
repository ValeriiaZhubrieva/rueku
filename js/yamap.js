ymaps.ready(function () {
  var myMap = new ymaps.Map(
      "map",
      {
        center: [55.751574, 37.573856],
        zoom: 9,
        controls: ["zoomControl"],
      },
      {
        searchControlProvider: "yandex#search",
      }
    ),
    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),
    myPlacemark = new ymaps.Placemark(
      myMap.getCenter(),
      {
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<div class="adres-banner">',
        // Зададим содержимое основной части балуна.
        balloonContentBody:
          '<div class="adres-banner__head">' +
          '<div class="adres-banner__title"> ООО «Риеки»</div>' +
          "</div>" +
          '<div class="adres-banner__body">' +
          '<picture><source srcset="img/map-item.webp" type="image/webp"><img class="adres-banner__img" src="img/map-item.jpg" alt="img-adres"></picture>' +
          '<div class="adres-banner__info">' +
          '<a href="tel:+74956643026" class="adres-banner__phone">+7 (495) 664-30-26</a>' +
          '<a href="mailto:info@rieki.ru" class="adres-banner__email">info@rieki.ru</a>' +
          '<a class="adres-banner__adres">119049, г. Москва, 1-й Люсиновский пер., д.3Б, офис 104</a>' +
          "</div>" +
          "</div>",

        // Зададим содержимое нижней части балуна.
        balloonContentFooter: "</div>",
        // Зададим содержимое всплывающей подсказки.
        hintContent: "Рога и копыта",
      },
      {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: "default#image",
        // Своё изображение иконки метки.
        iconImageHref: "img/svg/marker.svg",
        // Размеры метки.
        iconImageSize: [70, 90],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-47, -120],
      }
    );

  myMap.geoObjects.add(myPlacemark);
});
