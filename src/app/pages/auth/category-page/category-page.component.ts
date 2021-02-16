import { CategoryService } from 'src/app/services/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'df-category-page',
  templateUrl: './category-page.component.html',
  styles: [
  ]
})
export class CategoryPageComponent implements OnInit {

  constructor(public http: CategoryService) { }

  ngOnInit(): void {
    this.loadCategories();
  }

  public categories;

  loadCategories() {
    return this.http.getAllCategories().subscribe(
      success => {
        this.categories = success
      },
      error => {
        console.log(error)
      }
    )
  }

}
