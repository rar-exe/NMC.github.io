const position = [55.898604, 37.390703]

ymaps.ready(() => {
    const map = new ymaps.Map("map", {
        center: position,
        zoom: 8,
    });
    map.options.set('maxAnimationZoomDifference', Infinity);
    map.setZoom(17, {duration: 2000})
    map.geoObjects.add(new ymaps.Placemark(position))
    map.addChild(new YMapDefaultSchemeLayer({
        theme: "dark"
    }));
});