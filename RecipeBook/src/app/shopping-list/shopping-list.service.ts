import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  IngredientsChanged=new Subject <Ingredient[]>()
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
this.IngredientsChanged.next(this.ingredients.slice())
  }
  addIngredients(ingredents:Ingredient[]){
    this.ingredients.push(...ingredents)
    this.IngredientsChanged.next(this.ingredients.slice())

  }
}
