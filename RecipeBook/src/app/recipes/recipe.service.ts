import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  constructor(private shoppinglistService:ShoppingListService){}
  recipeSelected = new EventEmitter<Recipe>();
 private recipes: Recipe[] = [
    new Recipe('Crown Crust', 'This is simply a test', '/assets/pic/pizza.jpg',[new Ingredient('Meat',1),new Ingredient('FrenchFries',20)]),
    new Recipe('Chicken Microni', 'This is simply a test', '/assets/pic/microni.jpg',[new Ingredient('Meat',1),new Ingredient('FrenchFries',20)]),
    new Recipe('Chicken Tikka', 'This is simply a test', '/assets/pic/chickentikka.jpg',[new Ingredient('Meat',1),new Ingredient('FrenchFries',20)]),
    new Recipe('cake', 'This is simply a test', '/assets/pic/cake.jpg',[new Ingredient('Meat',1),new Ingredient('buns',20)]),
    new Recipe('junk food', 'This is simply a test', '/assets/pic/junkfood.jpg',[new Ingredient('Meat',1),new Ingredient('burger',20)])
  ];  
  
  getRecipes(){
    return this.recipes.slice();
  }
addIngredientsToShoppingList(ingredients:Ingredient[]){
this.shoppinglistService.addIngredients(ingredients);
}

}
