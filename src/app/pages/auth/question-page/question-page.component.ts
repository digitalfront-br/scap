import { QuestionService } from 'src/app/services/question.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'df-question-page',
  templateUrl: './question-page.component.html',
  styles: [
  ]
})
export class QuestionPageComponent implements OnInit {

  constructor(public http: QuestionService) { }

  ngOnInit(): void {
    this.loadQuestions();
    this.checkStatus();
  }

  public questions;
  public mode;

  checkStatus() {
    if(window.localStorage.getItem('editMode')) {
      this.mode = true;
    } else {
      this.mode = false;
    }
  }
  loadQuestions() {
    return this.http.getAllQuestions().subscribe(
      success => {
        this.questions = success
      },
      error => {
        console.log(error)
      }
    )
  }

}
