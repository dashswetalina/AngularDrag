export class SleepDataModel {

    private chart = {
        type: 'columnrange',
        inverted: true
    };

    private title = {
        text: ''
    };

    private subtitle = {
        text: 'Past 7 days'
    };

    private xAxis = {
        categories: ['']
    };

    private yAxis = {
        title: {
            text: 'Time from 12 PM to 12 PM'
        }
    };

   /* private tooltip = {
        valueSuffix: '°C'
    };*/

    private plotOptions = {
        columnrange: {
            dataLabels: {
                enabled: true,
                formatter: function () {
                    return this.y;
                }
            }
        }
    };

    private legend = {
        enabled: false
    };

    private series = [{
        name: 'Time',
        data: [
            [-9.7, 9.4],
            [-8.7, 6.5],
            [-3.5, 9.4],    
            [-1.4, 19.9],
            [0.0, 22.6],
            [2.9, 29.5],
            [9.2, 30.7]
        ]
    }];

}