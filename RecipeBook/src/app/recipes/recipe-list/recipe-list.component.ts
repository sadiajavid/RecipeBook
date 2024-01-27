import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Crown Crust', 'This is simply a test', '/assets/pic/pizza.jpg'),
    new Recipe('Chicken Microni', 'This is simply a test', '/assets/pic/microni.jpg'),
    new Recipe('Chicken Tikka', 'This is simply a test', '/assets/pic/chickentikka.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
   this.recipeWasSelected.emit(recipe);
  }

}
