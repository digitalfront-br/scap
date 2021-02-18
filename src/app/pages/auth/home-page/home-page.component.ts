import { QuestionService } from './../../../services/question.service';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'df-home-page',
  templateUrl: './home-page.component.html',
  styles: [
  ]
})
export class HomePageComponent implements OnInit {

  constructor(public httpCategory: CategoryService, public httpQuestion: QuestionService) { }

  ngOnInit(): void {
    this.loadCategories();
    this.loadQuestions();
    this.checkStatus();
  }

  public categories;
  public questions;
  public mode;

  checkStatus() {
    if(window.localStorage.getItem('editMode')) {
      this.mode = true;
    } else {
      this.mode = false;
    }
  }
  loadCategories() {
    return this.httpCategory.getCategories(5).subscribe(
      success => {
        this.categories = success
      },
      error => {
        console.log(error)
      }
    )
  }
  loadQuestions() {
    return this.httpQuestion.getQuestions(20).subscribe(
      success => {
        this.questions = success
      },
      error => {
        console.log(error)
      }
    )
  }

}
