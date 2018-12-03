import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.less']
})
export class GuideComponent implements OnInit {
  creatingCustom: boolean = false;
  experienceLevel: number;
  cardioPreference: number;
  workoutType: number;
  days: number;
  showSuggestion: boolean = false;
  cardioDays: string;
  constructor() { }

  ngOnInit() {
  }

  createCustom() {
    this.creatingCustom = true;
  }

  suggestWorkout(){

    //0: beginner 1: intermediate 2: expert
    this.experienceLevel = +(<HTMLInputElement>document.getElementById("experience")).value
    //0:cardio 1: HIIT
    this.cardioPreference = +(<HTMLInputElement>document.getElementById("cardio")).value
    //0:isolate 1: split
    this.workoutType = +(<HTMLInputElement>document.getElementById("workoutType")).value
    //0:3 days, 1:4 days, 2:5 days, 3:6 days, 4:7 days
    this.days = +(<HTMLInputElement>document.getElementById("days")).value
    this.showSuggestion = true;

    if (this.cardioPreference == 0){
      if (this.days == 0){
        this.cardioDays = "one day"
      } else if (this.days == 1){
        this.cardioDays = "two days"
      } else {
        this.cardioDays = "three days"
      }
    }
  }

  upperLower(){
    if (this.workoutType == 1){
      return true;
    }else if (this.cardioPreference == 0 && this.workoutType == 0 && this.days == 0){
      return true;
    } else{
      return false;
    }
  }

}
