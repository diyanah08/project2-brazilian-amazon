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
                            "description": "<h3><strong>Roraima</strong></h3><p>The Amazon Rainforest covers a total area of 224 299 square kilometres of Romaima.</p><p><span>Carbon Emission (2001-2018):</span></p><p>401,628,128 Mt</p><p><span>Tree Cover Lost (2001-2018):</span></p><p>911,088 ha</p>"
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
                            "description": "<h3><strong>Amapá</strong></h3><p>The Amazon Rainforest constitutes about 90% of Amapá's 142 814.5 square kilometres landscape.</p><p><span>Carbon Emission (2001-2018):</span></p><p>129,725,520 Mt</p><p><span>Tree Cover Lost (2001-2018):</span></p><p>308,255 ha</p>"
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
                            "description": "<h3><strong>Pará</strong></h3><p>Pará spans a total area of 1 247 689.5 square kilometres with its capital city, Belém, being home to portions of the Amazon Rainforest.</p><p><span>Carbon Emission (2001-2018):</span></p><p>5,816,973,800 Mt</p><p><span>Tree Cover Lost (2001-2018):</span></p><p>13,343,429 ha</p>"
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
                            "description": "<h3><strong>Mato Grosso</strong></h3><p>About 40% of Mato Grosso is covered by the forests.</p><p><span>Carbon Emission (2001-2018):</span></p><p>3,802,990,588 Mt</p><p><span>Tree Cover Lost (2001-2018):</span></p><p>10,813,165 ha</p>"
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
                            "description": "<h3><strong>Amazonas</strong></h3><p>As its name implies, this state is almost entirely covered by the Amazon Rainforest.</p><p><span>Carbon Emission (2001-2018):</span></p><p>1,418,817,517 Mt</p><p><span>Tree Cover Lost (2001-2018):</span></p><p>2,855,794 ha</p>"
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
                            "description": "<h3><strong>Rondônia</strong></h3><p>Rondônia spans a total area of 237 576.16 square kilometres with a major part of this state being home to a vast proportion of the Amazon Forest.</p><p><span>Carbon Emission (2001-2018):</span></p><p> 1,889,749,773 Mt</p><p><span>Tree Cover Lost (2001-2018):</span></p><p>4,098,494 ha</p>"
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
                            "description": "<h3><strong>Acre</strong></h3><p>Acre is 152 581 square kilometres and is completely occupied by the exquisite Amazon Rainforest.</p><p><span>Carbon Emission (2001-2018):</span></p><p> 633,054,908 Mt</p><p><span>Tree Cover Lost (2001-2018):</span></p><p>1,142,727 ha</p>"
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
