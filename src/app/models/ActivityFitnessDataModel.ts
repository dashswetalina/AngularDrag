export class ActivityFitnessDataModel{

    private chart = {
        type: 'column'
    };

    private title = {
        text: 'Recent Exercise'
    };

    private xAxis = {
        categories: [],
        title: {
            text: null
        }
    };

    private yAxis = {
        min: 0,
        title: {
            text: '',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    };

    private tooltip = {
        shared: false,
         useHTML: true,
         headerFormat: '<table>',
          pointFormat: '<tr><td>{point.activityTime}<br/>{point.name}</td></tr>' ,
        footerFormat: '</table>'
    };

    private plotOptions = {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    };

    private legend = {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 30,
        floating: true,
        borderWidth: 1,
        backgroundColor: '#FFFFFF',
        shadow: true
    };
    
    private credits = {
        enabled: false
    };

    private series = [{}];

    constructor(series:Array<Object>,categories:Array<string>){
        this.series = series;
        this.xAxis.categories = categories;

    }
}