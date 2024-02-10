import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  length: number;

  constructor(private http:HttpClient,private recipeService:RecipeService) { }
  storeRecipes(){
    const recipes=this.recipeService.getRecipes()
   return  this.http.put("https://ng-recipe-book-ba4e8-default-rtdb.firebaseio.com/recipes.json",recipes)
   .subscribe(response=>{
    console.log(response)
   })
  }
  fetchRecipe(){
    this.http.get<Recipe[]>("https://ng-recipe-book-ba4e8-default-rtdb.firebaseio.com/recipes.json")
    .pipe(map(recipes=>{
      return recipes.map(recipe=>{
        return {...recipe, ingredient:recipe.ingredients?recipe.ingredients:[]}
      })

    }))
    .subscribe(recipes=>{
     return this.recipeService.setRecipe(recipes);
    })
  }
}
