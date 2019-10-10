/* global mapboxgl */

mapboxgl.accessToken = 'pk.eyJ1IjoiZGl5YW5haDA4IiwiYSI6ImNrMHlwam9pNzBoc2QzYnA4ZXgydXFvY2cifQ.5Ou3JPEXHCQOJ-0H4Blltw';

let map = new mapboxgl.Map({
    container: 'map',
    zoom: 3,
    center: [-60.568359375, -6.928487062665504],
    style: 'mapbox://styles/mapbox/satellite-v9'
});

map.on('load', function () {
    map.addLayer({
        "id": "points",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features":
                [{
                    "type": "Feature",
                    "properties":
                        {
                            "name": "Roraima",
                            "icon": "fire-station",
                            "color": "#EC1212",
                            "description": "<h3><strong>Roraima</strong></h3><p>Raraima is the northernmost state. It is the least populated state of Brazil, South America, with fewer than 500 000 inhabitants.</p><p>Roraima is placed firmly within the beautiful Amazon Jungle that covers a total area of 224 299 square kilometres.</p> "
                        },
                    "geometry":
                        {
                            "type": "Point",
                            "coordinates": [-61.34765625, 2.1088986592431382]
                        }
                },
                {
                    "type": "Feature",
                    "properties":
                        {
                            "name": "Amapá",
                            "icon": "fire-station",
                            "color": "#EC1212",
                            "description": "<h3><strong>Amapá</strong></h3><p>Amapá is situated in the extreme north of Brazil, bordered by French Guiana, Suriname, the Atlantic Ocean, and Pará. This state has an area of 142 814.5 square kilometres (or 55 141 square miles) and is home to just under 700 000 people.</p><p>The vast Amazon Jungle constitutes about 90% of the vegetation and landscape of this Brazilian state.</p> "
                        },
                    "geometry":
                        {
                            "type": "Point",
                            "coordinates": [-51.4599609375, 1.7575368113083254]
                        }
                },
                {
                    "type": "Feature",
                    "properties":
                        {
                            "name": "Pará",
                            "icon": "fire-station",
                            "color": "#EC1212",
                            "description": "<h3><strong>Pará</strong></h3><p>Pará is situated in the northeast of this country and is bordered by Amapá, Maranhão, Tocantins, Mato Grosso, Amazonas, Roraima, Guyana, Suriname, and the exquisite blue of the Atlantic Ocean. It spans a total area of 1 247 689.5 square kilometres (or 481 735.6 square miles), is home to more than 7.5 million people and is one of the most populous in Brazil.</p><p>Its capital city, Belém, is known for being home to portions of the Amazon River and its jungle</p>"
                        },
                    "geometry":
                        {
                            "type": "Point",
                            "coordinates": [-53.12988281249999, -3.9519408561575817]
                        }
                },
                {
                    "type": "Feature",
                    "properties":
                        {
                            "name": "Mato Grosso",
                            "icon": "fire-station",
                            "color": "#EC1212",
                            "description": "<h3><strong>Mato Grosso</strong></h3><p>The inland Brazilian state of Mato Grosso is surrounded by Rondônia, Amazonas, Pará, Tocantins, Goiás, Mato Grosso do Sul and Bolivia. Mato Grosso has a total population of approximately 2 500 000 people. Mato Grosso lies predominantly on the western part of the Brazilian Plateau.</p><p>It is elevated approximately 3 000 feet above sea level along the Mato Grosso Plateau, which is home to the line that separates the neighbouring drainage basins, the Amazon River basin and the Río de la Plata basin.</p>"
                        },
                    "geometry":
                        {
                            "type": "Point",
                            "coordinates": [-56.03027343749999, -13.410994034321702]
                        }
                },
                {
                    "type": "Feature",
                    "properties":
                        {
                            "name": "Amazonas",
                            "icon": "fire-station",
                            "color": "#EC1212",
                            "description": "<h3><strong>Amazonas</strong></h3><p>Amazonas is situated in the northwest of this South American country. It is the largest state in Brazil and is bordered by Roraima, Pará, Mato Grosso, Rondônia, Acre, Peru, Colombia and Venezuela.</p><p>As its name implies, this state is almost entirely covered by the Amazon Rainforest and enjoys the splendour of the massive Amazon River.</p>"
                        },
                    "geometry":
                        {
                            "type": "Point",
                            "coordinates": [-64.9951171875, -3.9957805129630253]
                        }
                },
                {
                    "type": "Feature",
                    "properties":
                        {
                            "name": "Rondônia",
                            "icon": "fire-station",
                            "color": "#EC1212",
                            "description": "<h3><strong>Rondônia</strong></h3><p>Rondônia is nestled in northwest Brazil, bordered by Acre, Amazonas, Mato Grosso and Bolivia. It boasts a total area of 237 576.16 square kilometres (or  91 729 square miles).</p><p>A major part of this state’s appeal lies in its being home to a vast proportion of the Amazon Forest.</p>"
                        },
                    "geometry": {
                            "type": "Point",
                            "coordinates": [-63.4130859375, -9.44906182688142]
                        }
                },
                {
                    "type": "Feature",
                    "properties":
                        {
                            "name": "Acre",
                            "icon": "fire-station",
                            "color": "#EC1212",
                            "description": "<h3><strong>Acre</strong></h3><p>Acre is a state in the extreme south-west of the Northern Region of Brazil, which is bordered by Amazonas, Rondônia, Bolivia and the Ucayali Region (Peru). It is 152 581 square kilometres (or 58 911 square miles) in area. Acre is completely occupied by the exquisite Amazon Rainforest.</p>"
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

    map.on('click', 'points', function (e) {
        let coordinates = e.features[0].geometry.coordinates.slice();
        let description = e.features[0].properties.description;
        
        new mapboxgl.Popup({ offset: [0, -5] })
        .setLngLat(coordinates)
        .setHTML(description)
        .addTo(map);
    });
});