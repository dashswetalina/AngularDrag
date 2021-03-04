export class WeightDataModel{
     private chart = {
        type: 'spline'
    };
    
    private title = {
        text: "Weight Detail"
    };

    private subtitle = {
        text: ''
    };

    private xAxis = {
        categories: []
    };

    private yAxis = {
        title: {
            text: 'Weight in lbs'
        },
        labels: {
            formatter: function () {
                return this.value;
            }
        }
    };

    private series = [{
        name: 'Weight',
        color: '#004d99',
        marker: {
            radius:4,
            linewidth:1,
            symbol: 'diamond',
            lineColor: '#004d99'
        },
        data: []
    }];

    private tooltip = {
         shared: false,
         useHTML: true,
         headerFormat: '<table>',
          pointFormat: '<tr><td>{point.tooltipstr}</td></tr>' ,
        footerFormat: '</table>'
    };

    constructor(data:Array<Object>,categories:Array<string>,title:string){

        this.series[0].data=data;
        this.xAxis.categories = categories;
        this.title.text = title;
    }
}