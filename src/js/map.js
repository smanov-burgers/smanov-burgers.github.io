let myMap;

const init = () => {
    myMap = new ymaps.Map("map", {
        center: [59.935274, 30.312388],
        zoom: 11,
        controls: []
    });

    const coords = [
        ["59.94554327989287","30.38935262114668"],
        ["59.91142623563909","30.50024587065841"],
        ["59.88693761784606","30.319658102103713"],
        ["59.97033574821672","30.615194906302924"]
    ];

    const myCollection = new ymaps.GeoObjectCollection({}, {
        draggable: false,
        iconLayout: "default#image",
        iconImageHref: "./img/content/map/map-marker.png",
        iconImageSize: [46, 57],
        iconImageOffset: [-35-52]
    });

    coords.forEach( coord => {
        myCollection.add(new ymaps.Placemark(coord));
    });

    myMap.geoObjects.add(myCollection);
    myMap.behaviors.disable('scrollZoom');
}

ymaps.ready(init);
