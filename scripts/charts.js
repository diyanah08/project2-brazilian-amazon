/* global queue */
/* global d3 */
/* global dc */
/* global crossfilter */

queue()
  .defer(d3.json, "data/brazilFires.json")
  .await(function (error, fireData) {

    let fireCrossFilter = crossfilter(fireData);
    
    let parseDate = d3.time.format("%d/%m/%Y").parse;
    fireData.forEach(function (d) {
      d.date = parseDate(d.date);
    });
    let date_dim = fireCrossFilter.dimension(dc.pluck("date"));
    let minDate = date_dim.bottom(1)[0].date;
    let maxDate = date_dim.top(1)[0].date;

    function fire_by_month(month) {
      return function (d) {
        if (d.month === month) {
          return +d.number;
        } else {
          return 0;
        }
      }
    }

    let januaryFires = date_dim.group().reduceSum(fire_by_month("Jan"));
    let februaryFires = date_dim.group().reduceSum(fire_by_month("Feb"));
    let marchFires = date_dim.group().reduceSum(fire_by_month("Mar"));
    let aprilFires = date_dim.group().reduceSum(fire_by_month("Apr"));
    let mayFires = date_dim.group().reduceSum(fire_by_month("May"));
    let juneFires = date_dim.group().reduceSum(fire_by_month("Jun"));
    let julyFires = date_dim.group().reduceSum(fire_by_month("Jul"));
    let augustFires = date_dim.group().reduceSum(fire_by_month("Aug"));
    let septemberFires = date_dim.group().reduceSum(fire_by_month("Sep"));
    let octoberFires = date_dim.group().reduceSum(fire_by_month("Oct"));
    let novemberFires = date_dim.group().reduceSum(fire_by_month("Nov"));
    let decemberFires = date_dim.group().reduceSum(fire_by_month("Dec"));

    let compositeChart = dc.compositeChart("#composite-chart");
    compositeChart
      .width(650)
      .height(350)
      .margins({ top: 30, right: 70, bottom: 50, left: 70 })
      .dimension(date_dim)
      .x(d3.time.scale().domain([minDate, maxDate]))
      .xAxisLabel("Years")
      .y(d3.scale.log().clamp(true).domain([100, 70000]))
      .yAxisLabel("Number of Fires [1e+3 = 1000]")
      .legend(dc.legend().horizontal(true).x(100).y(0).itemHeight(13).itemWidth(100).gap(5))
      .renderHorizontalGridLines(true)
      .compose([
        dc.lineChart(compositeChart)
          .colors("green")
          .group(januaryFires, "Jan"),
        dc.lineChart(compositeChart)
          .colors("red")
          .group(februaryFires, "Feb"),
        dc.lineChart(compositeChart)
          .colors("blue")
          .group(marchFires, "Mar"),
        dc.lineChart(compositeChart)
          .colors("orange")
          .group(aprilFires, "Apr"),
        dc.lineChart(compositeChart)
          .colors("black")
          .group(mayFires, "May"),
        dc.lineChart(compositeChart)
          .colors("indianred")
          .group(juneFires, "Jun"),
        dc.lineChart(compositeChart)
          .colors("deeppink")
          .group(julyFires, "Jul"),
        dc.lineChart(compositeChart)
          .colors("brown")
          .group(augustFires, "Aug"),
        dc.lineChart(compositeChart)
          .colors("skyblue")
          .group(septemberFires, "Sep"),
        dc.lineChart(compositeChart)
          .colors("limegreen")
          .group(octoberFires, "Oct"),
        dc.lineChart(compositeChart)
          .colors("copper")
          .group(novemberFires, "Nov"),
        dc.lineChart(compositeChart)
          .colors("goldenrod")
          .group(decemberFires, "Dec")
      ])
      .brushOn(false)

    let state_dim = fireCrossFilter.dimension(dc.pluck('state'));
    let fire_per_state = state_dim.group().reduceSum(dc.pluck('number'));

      dc.pieChart('#pie-chart')
        .height(300)
        .width(450)
        .radius(150)
        .transitionDuration(1500)
        .dimension(state_dim)
        .group(fire_per_state)
        .colors(d3.scale.ordinal().range(["red", "orange", "green", "blue", "purple", "brown", "deeppink"]))
        .legend(dc.legend().x(0).y(200).itemHeight(10).gap(3));
        
    let month_dim = fireCrossFilter.dimension(dc.pluck('month'));
    let fire_per_month = month_dim.group().reduceSum(dc.pluck('number'));

      dc.barChart("#bar-chart")
        .width(520)
        .height(400)
        .margins({ top: 0, right: 0, bottom: 50, left: 80 })
        .dimension(month_dim)
        .group(fire_per_month)
        .transitionDuration(250)
        .x(d3.scale.ordinal())
        .y(d3.scale.log().clamp(true).domain([1000, 550000]))
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Month")
        .ordering(function(d) {return -d.value })
        .yAxisLabel("Number of Fires [1e+3 = 1000]")
        .yAxis().ticks(20);
        
    let year_dim = fireCrossFilter.dimension(dc.pluck("year"));
    
    function fire_by_state(state) {
      return function (d) {
        if (d.state === state) {
          return +d.number;
        } else {
          return 0;
        }
      }
    }
        
    let fireInAcreYear = year_dim.group().reduceSum(fire_by_state("Acre"));
    let fireInAmapaYear = year_dim.group().reduceSum(fire_by_state("Amapa"));
    let fireInAmazonasYear = year_dim.group().reduceSum(fire_by_state("Amazonas"));
    let fireInMatoGrossoYear = year_dim.group().reduceSum(fire_by_state("Mato Grosso"));
    let fireInParaYear = year_dim.group().reduceSum(fire_by_state("Pará"));
    let fireInRondoniaYear = year_dim.group().reduceSum(fire_by_state("Rondonia"));
    let fireInRoraimaYear = year_dim.group().reduceSum(fire_by_state("Roraima"));

    let stackedChart = dc.barChart("#stacked-chart");
    stackedChart
      .width(600)
      .height(400)
      .margins({ top: 30, right: 50, bottom: 50, left: 70 })
      .dimension(year_dim)
      .group(fireInAcreYear, "Acre")
      .stack(fireInAmapaYear, "Ampa")
      .stack(fireInAmazonasYear, "Amazonas")
      .stack(fireInMatoGrossoYear, "Mato Grosso")
      .stack(fireInParaYear, "Pará")
      .stack(fireInRondoniaYear, "Rondonia")
      .stack(fireInRoraimaYear, "Roraima")
      .x(d3.scale.ordinal())
      .xUnits(dc.units.ordinal)
      .xAxisLabel("Year")
      .yAxisLabel("Number of Fires")
      .legend(dc.legend().x(90).y(20).itemHeight(15).gap(5))
      .colors(d3.scale.ordinal().range(["purple", "pink", "blue", "red", "orange", "green", "brown"]));
   
    dc.renderAll(); 
  });