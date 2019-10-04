/* global mapboxgl */

mapboxgl.accessToken = 'pk.eyJ1IjoiZGl5YW5haDA4IiwiYSI6ImNrMHlwam9pNzBoc2QzYnA4ZXgydXFvY2cifQ.5Ou3JPEXHCQOJ-0H4Blltw';

let map = new mapboxgl.Map({
container: 'map',
zoom: 4,
center: [-57.568359375, -8.928487062665504],
style: 'mapbox://styles/mapbox/satellite-v9'
});

