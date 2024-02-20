import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import {  map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  length: number;

  constructor(private http:HttpClient,private recipeService:RecipeService) { }
  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put("https://ng-recipes-3beef-default-rtdb.firebaseio.com/recipes/recipes.json", recipes)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.error('Error saving recipes:', error);
        }
      );}
  
  fetchRecipe() {
    this.http.get<Recipe[]>("https://ng-recipes-3beef-default-rtdb.firebaseio.com/recipes/recipes.json")
      .pipe(
        map(recipes => {
          return recipes.map(recipe => {
            return { ...recipe, ingredient: recipe.ingredients ? recipe.ingredients : [] }
          })
        })
      )
      .subscribe(recipes => {
        this.recipeService.setRecipe(recipes);
      });
  }}
