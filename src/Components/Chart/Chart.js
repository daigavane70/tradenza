// import logo from './logo.svg';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_dark from "@amcharts/amcharts4/themes/dark";
import {data} from '../../Assets/data';
// import {useState, useEffect} from 'react';
import axios from "axios";

function Chart() {

const options = {
  method: 'GET',
  url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-charts',
  params: {
    symbol: 'HYDR.ME',
    interval: '5m',
    range: '1d',
    region: 'US',
    comparisons: '^GDAXI,^FCHI'
  },
  headers: {
    'x-rapidapi-key': '476a4a5b26mshb0d109037855dfcp173325jsn2d9c180e143a',
    'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
  }
};

  let updateData = () =>{
    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }

  let index = 0

  am4core.ready(function() {
    
    // Themes begin
    am4core.useTheme(am4themes_dark);
    am4core.useTheme(am4themes_animated);
    
    // Themes end
    var chart = am4core.create("chart-div", am4charts.XYChart);
    chart.paddingRight = 20;
    
    chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";
    
    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    
    var series = chart.series.push(new am4charts.CandlestickSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "close";
    series.dataFields.openValueY = "open";
    series.dataFields.lowValueY = "low";
    series.dataFields.highValueY = "high";
    series.simplifiedProcessing = true;
    series.tooltipText = "Open:${openValueY.value}\nLow:${lowValueY.value}\nHigh:${highValueY.value}\nClose:${valueY.value}";
    
    chart.cursor = new am4charts.XYCursor();
    
    // a separate series for scrollbar
    var lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.dataFields.dateX = "date";
    lineSeries.dataFields.valueY = "close";
    // need to set on default state, as initially series is "show"
    lineSeries.defaultState.properties.visible = false;
    
    // hide from legend too (in case there is one)
    lineSeries.hiddenInLegend = true;
    lineSeries.fillOpacity = 0.5;
    lineSeries.strokeOpacity = 0.5;
    
    var scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(lineSeries);
    chart.scrollbarX = scrollbarX;

    let chartData = [data[0]]
    chart.data = chartData

    let increment = () => {
      index+=1
      chartData = [...chartData, data[index]]
      chart.data = chartData

    }

    });

  return (
    <div className='App container-fluid'>

      <div className="chart-div"></div>

      <div className='container bg-dark'>
        <div className='row'>
          <h2 className='col-lg-12 text-center'>
            Positions
          </h2>
        </div> 
        
        <div className='row'>
          <div className='col-lg-4 btn btn-success'>
            Buy
          </div>
          <div onClick={() => {console.log("sold at: ", data[index])}} className='col-lg-4 btn btn-danger'>
            Sell
          </div>
          <div className='col-lg-4 text-center'> qty </div>
        </div>
      </div>
    
    </div>
  );
}

export default Chart;
