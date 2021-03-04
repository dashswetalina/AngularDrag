export class BloodOxygenDataModel{
     private chart = {
        type: 'spline'
    };
    
    private title = {
        text: "SPO2 Detail"
    };

    private subtitle = {
        text: ''
    };

    private xAxis = {
        categories: []
    };

    private yAxis = {
        title: {
            text: 'Spo2 in %'
        },
        labels: {
            formatter: function () {
                return this.value;
            }
        }
    };

    private series = [{
        name: 'Spo2',
        color: '#004d99',
        marker: {
            radius:4,
            linewidth:1,
            symbol: 'square',
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

    constructor(bloodOxygenData:Array<Object>,categories:Array<string>,title:string){

        this.series[0].data=bloodOxygenData;
        this.xAxis.categories = categories;
        this.title.text = title;
    }
}