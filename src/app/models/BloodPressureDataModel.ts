

export class BloodPressureDataModel{

    private chart = {
        type: 'spline'
    };
    
    private title = {
        text: "Blood Pressure Detail"
    };

    private subtitle = {
        text: ''
    };

    private xAxis = {
        categories: []
    };

    private yAxis = {
        title: {
            text: 'Blood Pressure in mmHg'
        },
        labels: {
            formatter: function () {
                return this.value;
            }
        }
    };

    private series = [{
        name: 'Systolic Blood Pressure',
        color: '#004d99',
        marker: {
            radius:4,
            linewidth:1,
            symbol: 'square',
            lineColor: '#004d99'
        },
        data: []
    },
    {
        name: 'Dialostic Blood Pressure',
        color: '#b30000',
        marker: {
            radius:4,
            linewidth:1,
            symbol: 'triangle',
            lineColor: '#b30000'
        },
        data: []
    }
    ];

    private tooltip = {
         shared: false,
         useHTML: true,
         headerFormat: '<table>',
          pointFormat: '<tr><td>{point.tooltipstr}</td></tr>' ,
        footerFormat: '</table>'
    };

    constructor(systolicBloodPressureData:Array<Object>,
                dialosticBloodPressureData:Array<Object>,categories:Array<string>,title:string){

        this.series[0].data=systolicBloodPressureData;
        this.series[1].data=dialosticBloodPressureData;

        this.xAxis.categories = categories;
        this.title.text = title;
    }
}