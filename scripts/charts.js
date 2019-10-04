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
        .height(300)
        .width(500)
        .radius(150)
        .transitionDuration(1500)
        .dimension(state_dim)
        .group(fire_per_state)
        .colors(d3.scale.ordinal().range(["red", "orange", "green", "blue", "purple", "brown", "pink"]))
        .legend(dc.legend().x(0).y(70).itemHeight(13).gap(5));
        
    let month_dim = fireCrossFilter.dimension(dc.pluck('month'));
    let fire_per_month = month_dim.group().reduceSum(dc.pluck('number'));

      dc.barChart("#bar-chart")
        .width(700)
        .height(450)
        .margins({ top: 0, right: 50, bottom: 50, left: 100 })
        .dimension(month_dim)
        .group(fire_per_month)
        .transitionDuration(250)
        .x(d3.scale.ordinal())
        .y(d3.scale.log().clamp(true).domain([1000, 550000]))
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Month")
        .ordering(function(d) {return -d.value })
        .yAxisLabel("Number of Fires")
        .yAxis().ticks(20);
   
    dc.renderAll(); 
  });