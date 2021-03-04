export class RestingHeartRate {

    private chart = {
        type: 'spline'
    };
    
    private title = {
        text: "Pulse rate while measuring Blood Pressure"
    };

    private subtitle = {
        text: ''
    };

    private xAxis = {
        categories: []
    };

    private yAxis = {
        title: {
            text: 'Heart Rate in bpm'
        },
        labels: {
            formatter: function () {
                return this.value;
            }
        }
    };

    private tooltip = {
         shared: false,
        useHTML: true,
         headerFormat: '<table>',
          pointFormat: '<tr><td>{point.tooltipstr}</td></tr>' ,
        footerFormat: '</table>'
    };
    
    private plotOptions = {
        spline: {
            marker: {
                radius: 4,
                lineColor: '#f49b42',
                lineWidth: 1
            }
        }
    };

    private series = [{
        name: 'Heart Rate',
        color: '#f49b42',
        marker: {
            symbol: 'circle'
        },
        data: []
    }];

    constructor(seriesData:Array<Object>,categories:Array<string>){
        this.series[0].data = seriesData;
        this.xAxis.categories = categories;
    }
}