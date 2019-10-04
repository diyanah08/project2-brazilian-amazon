/* global queue */
/* global d3 */
/* global dc */
/* global crossfilter */

queue()
  .defer(d3.json, "data/brazilFires.json")
  .await(function (error, fireData) {

    let fireCrossFilter = crossfilter(fireData);

    let state_dim = fireCrossFilter.dimension(dc.pluck('state'));
    let fire_per_state = state_dim.group().reduceSum(dc.pluck('number'));

      dc.pieChart('#pie-chart')
        .height(500)
        .radius(500)
        .innerRadius(50)
        .externalRadiusPadding(60)
        .transitionDuration(1500)
        .cx(250)
        .cy(230)
        .dimension(state_dim)
        .group(fire_per_state)
        .colors(d3.scale.ordinal().range(["red", "orange", "green", "blue", "purple", "brown", "pink"]))
        .legend(dc.legend().x(480).y(70).itemHeight(13).gap(5));
   
    dc.renderAll(); 
  });