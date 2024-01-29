import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
 private recipes: Recipe[] = [
    new Recipe('Crown Crust', 'This is simply a test', '/assets/pic/pizza.jpg'),
    new Recipe('Chicken Microni', 'This is simply a test', '/assets/pic/microni.jpg'),
    new Recipe('Chicken Tikka', 'This is simply a test', '/assets/pic/chickentikka.jpg'),
    new Recipe('cake', 'This is simply a test', '/assets/pic/cake.jpg'),
    new Recipe('junk food', 'This is simply a test', '/assets/pic/junkfood.jpg')
  ];  
  
  getRecipes(){
    return this.recipes.slice();
  }
}
