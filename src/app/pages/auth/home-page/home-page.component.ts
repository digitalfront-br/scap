import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'df-home-page',
  templateUrl: './home-page.component.html',
  styles: [
  ]
})
export class HomePageComponent implements OnInit {

  constructor(public http: CategoryService) { }

  ngOnInit(): void {
    this.loadCategories();
  }

  public categories;

  loadCategories() {
    return this.http.getCategories().subscribe(
      success => {
        this.categories = success;
        console.log(this.categories);
      },
      error => {
        console.log(error)
      },
      () => console.warn('completo')
    )
  }

}
