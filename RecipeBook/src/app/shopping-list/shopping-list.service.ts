import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  IngredientsChanged=new EventEmitter<Ingredient[]>()
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  constructor() { }
  getShopping(){
   return this.ingredients.slice()
  }
  addIngredient(ingredient:Ingredient){
this.ingredients.push(ingredient)
this.IngredientsChanged.emit(this.ingredients.slice())
  }
}
