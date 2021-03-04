export class BloodGulucoseModel {

    private chart = {
        type: 'spline'
    };
    
    private title = {
        text: "Today's Blood Glucose Detail"
    };

    private subtitle = {
        text: ''
    };

    private xAxis = {
        categories: []
    };

    private yAxis = {
        title: {
            text: 'Blood Glucose in mg/dL'
        },
        labels: {
            formatter: function () {
                return this.value;
            }
        }
    };

    private tooltip = {
         shared: true,
        useHTML: true,
         headerFormat: '<table>',
          pointFormat: '<tr><td>{series.name}:{point.y}<br/>{point.name} </td></tr>' ,
        footerFormat: '</table>'
    };
    
    private plotOptions = {
        spline: {
            marker: {
                radius: 4,
                lineColor: '#ff0000',
                lineWidth: 1
            }
        }
    };

    private series = [{
        name: 'blood glucose',
        color: '#ff0000',
        marker: {
            symbol: 'circle'
        },
        data: []
    }];

    constructor(seriesData:Array<Object>,categories:Array<string>,title:string){
        this.series[0].data = seriesData;
        this.xAxis.categories = categories;
        this.title.text = title;
    }
}