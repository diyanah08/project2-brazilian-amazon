/* global mapboxgl */

mapboxgl.accessToken = 'pk.eyJ1IjoiZGl5YW5haDA4IiwiYSI6ImNrMHlwam9pNzBoc2QzYnA4ZXgydXFvY2cifQ.5Ou3JPEXHCQOJ-0H4Blltw';

let map = new mapboxgl.Map({
    container: 'map',
    zoom: 3,
    center: [-60.568359375, -6.928487062665504],
    style: 'mapbox://styles/mapbox/satellite-v9'
});

map.on('load', function() {
    map.addLayer({
        "id": "points",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": [{
                        "type": "Feature",
                        "properties": {
                            "name": "Roraima",
                            "icon": "fire-station",
                            "color": "#EC1212",
                            "description": "<h3><strong>Roraima</strong></h3><p>The Amazon Rainforest covers a total area of 224 299 square kilometres of Romaima.</p><p>Carbon Emission 2001-2018 (Mt): 401628128</p><p>Tree Cover Lost 2001-2018 (ha): 911088</p>"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-61.34765625, 2.1088986592431382]
                        }
                    },
                    {
                        "type": "Feature",
                        "properties": {
                            "name": "Amapá",
                            "icon": "fire-station",
                            "color": "#EC1212",
                            "description": "<h3><strong>Amapá</strong></h3><p>The Amazon Rainforest constitutes about 90% of Amapá's 142 814.5 square kilometres landscape</p><p>Carbon Emission 2001-2018 (Mt): 129725520</p><p>Tree Cover Lost 2001-2018 (ha): 308255</p>"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-51.4599609375, 1.7575368113083254]
                        }
                    },
                    {
                        "type": "Feature",
                        "properties": {
                            "name": "Pará",
                            "icon": "fire-station",
                            "color": "#EC1212",
                            "description": "<h3><strong>Pará</strong></h3><p>Pará spans a total area of 1 247 689.5 square kilometres with its capital city, Belém, being home to portions of the Amazon Rainforest</p><p>Carbon Emission 2001-2018 (Mt): 5816973800</p><p>Tree Cover Lost 2001-2018 (ha): 13343429</p>"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-53.12988281249999, -3.9519408561575817]
                        }
                    },
                    {
                        "type": "Feature",
                        "properties": {
                            "name": "Mato Grosso",
                            "icon": "fire-station",
                            "color": "#EC1212",
                            "description": "<h3><strong>Mato Grosso</strong></h3><p>About 40% of Mato Grosso is covered by the forests.</p><p>Carbon Emission 2001-2018 (Mt): 3802990588</p><p>Tree Cover Lost 2001-2018 (ha): 10813165</p>"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-56.03027343749999, -13.410994034321702]
                        }
                    },
                    {
                        "type": "Feature",
                        "properties": {
                            "name": "Amazonas",
                            "icon": "fire-station",
                            "color": "#EC1212",
                            "description": "<h3><strong>Amazonas</strong></h3><p>As its name implies, this state is almost entirely covered by the Amazon Rainforest.</p><p>Carbon Emission 2001-2018 (Mt): 1418817517</p><p>Tree Cover Lost 2001-2018 (ha): 2855794</p>"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-64.9951171875, -3.9957805129630253]
                        }
                    },
                    {
                        "type": "Feature",
                        "properties": {
                            "name": "Rondônia",
                            "icon": "fire-station",
                            "color": "#EC1212",
                            "description": "<h3><strong>Rondônia</strong></h3>Rondônia spans a total area of 237 576.16 square kilometres with a major part of this state being home to a vast proportion of the Amazon Forest.</p><p>Carbon Emission 2001-2018 (Mt): 1889749773</p><p>Tree Cover Lost 2001-2018 (ha): 4098494</p>"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-63.4130859375, -9.44906182688142]
                        }
                    },
                    {
                        "type": "Feature",
                        "properties": {
                            "name": "Acre",
                            "icon": "fire-station",
                            "color": "#EC1212",
                            "description": "<h3><strong>Acre</strong></h3>Acre is 152 581 square kilometres and is completely occupied by the exquisite Amazon Rainforest.</p><p>Carbon Emission 2001-2018 (Mt): 633054908</p><p>Tree Cover Lost 2001-2018 (ha): 1142727</p>"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.6201171875, -8.754794702435618]
                        }
                    }
                ]
            }
        },
        "layout": {
            "icon-image": "{icon}-15",
            "text-field": "{name}",
            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
            "text-offset": [0, 0.6],
            "text-anchor": "top"
        },
        "paint": {
            "text-color": ["get", "color"]
        }
    });

    map.on('click', 'points', function(e) {
        let coordinates = e.features[0].geometry.coordinates.slice();
        let description = e.features[0].properties.description;

        new mapboxgl.Popup({ offset: [0, -5] })
            .setLngLat(coordinates)
            .setHTML(description)
            .addTo(map);
    });
});
