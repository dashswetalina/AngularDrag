export class FitnessDataModelWeekly {

    private chart = {
        type: 'column'
    };

    private title = {
        text: ""
    };
    private subtitle = {
        text: ''
    };

    private legend = {
        align: 'right',
        verticalAlign: 'middle',
        layout: 'vertical'
    };

    private xAxis = {
        categories: [],
        labels: {
            x: -10
        }
    };
    private yAxis = {
        allowDecimals: false,
        title: {
            text: ''
        }
    };

    private series = [{
        name: '',
        data: []
        }];

    private responsive = {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    align: 'center',
                    verticalAlign: 'bottom',
                    layout: 'horizontal'
                },
                yAxis: {
                    labels: {
                        align: 'left',
                        x: 0,
                        y: -5
                    },
                    title: {
                        text: null
                    }
                },
                subtitle: {
                    text: null
                },
                credits: {
                    enabled: false
                }
            }
        }]
    };

     private tooltip = {
         shared: true,
         useHTML: true,
         headerFormat: '<table>',
          pointFormat: '<tr><td>{point.tooltipstr}</td></tr>' ,
        footerFormat: '</table>'
    };

    constructor(seriesName:string, seriesData:Array<Object>,categories:Array<string>,title:string){
        this.series[0].name = seriesName;
        this.series[0].data = seriesData;
        this.xAxis.categories = categories;
        this.title.text = title;
    }
}