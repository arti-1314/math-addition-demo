import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  firstNumber : number = 0;
  secondNumber : number = 0;
  actualAnswer : number = 0;
  userAnswer : string = '';
  noOfTimes : number = 0
  totalTime : number = 0;
  startTime: number = 0;
  isWrongAnswer = false;
  ngOnInit() {
    this.generateNumber();
  }

  generateNumber() {
    this.startTime = new Date().getTime()
    this.firstNumber = Math.floor(Math.random() * 10);
    this.secondNumber = Math.floor(Math.random() * 10);
    this.actualAnswer = this.firstNumber + this.secondNumber
  }

  checkAnswer() {
    this.isWrongAnswer = false;
    if (this.userAnswer && this.actualAnswer === Number(this.userAnswer)) {
      this.noOfTimes += 1
      setTimeout(() => {
        this.userAnswer = ''
      },0)
      const difference = new Date().getTime() - this.startTime;
      this.totalTime += difference
      this.startTime = 0
      this.generateNumber();
    } else if(this.userAnswer){
      this.isWrongAnswer = true;
    }
  }

  getAvagateTime() {
    return (this.totalTime) ? Math.floor(this.totalTime/1000/this.noOfTimes) : 0
  }

  getTotalTime() {
    return Math.floor(this.totalTime/1000)
  }
}
