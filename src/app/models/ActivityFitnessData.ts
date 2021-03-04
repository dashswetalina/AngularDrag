export class ActivityFitnessData{

    activity_date:string;
    activity_time:string;
    activity_name:string;
    avg_heart_rate:number;
    activity_duration:number;
    calories_burned: number;
  
  constructor(activityDate:string,activityTime:string,activityName:string,avgHeartRate:number,activityDuration:number,caloriesBurnt:number){
      this.activity_date = activityDate;
      this.activity_time = activityTime;
      this.avg_heart_rate = avgHeartRate;
      this.activity_duration = activityDuration;
      this.calories_burned = caloriesBurnt;
  }
}
