import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http:HttpClient,private recipeService:RecipeService) { }
  storeRecipes(){
    const recipes=this.recipeService.getRecipes()
   return  this.http.put("https://ng-recipe-book-ba4e8-default-rtdb.firebaseio.com/recipes.json",recipes)
   .subscribe(response=>{
    console.log(response)
   })
  }
  fetchRecipe(){
    this.http.get("https://ng-recipe-book-ba4e8-default-rtdb.firebaseio.com/recipes.json").subscribe(recipe=>{
      console.log(recipe)
    })
  }
}
