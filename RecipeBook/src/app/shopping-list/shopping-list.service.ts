import {  Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
 startEditing=new Subject<number>()
  IngredientsChanged=new Subject <Ingredient[]>()
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  constructor() { }
  getShopping(){
   return this.ingredients.slice()
  }
  getIngredient(index:number){
    return this.ingredients[index]
  }
  addIngredient(ingredient:Ingredient){
this.ingredients.push(ingredient)
this.IngredientsChanged.next(this.ingredients.slice())
  }
  addIngredients(ingredents:Ingredient[]){
    this.ingredients.push(...ingredents)
    this.IngredientsChanged.next(this.ingredients.slice())
  }
  updateIngredient(index:number,newIngredient:Ingredient){
    this.ingredients[index]=newIngredient
    this.IngredientsChanged.next(this.ingredients.slice())
  }
  deleteIngredient(index:number){
    this.ingredients.splice(index,1)
    this.IngredientsChanged.next(this.ingredients.slice())
  }
}
