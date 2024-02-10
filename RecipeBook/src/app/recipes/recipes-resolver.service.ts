// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
// import { Recipe } from './recipe.model';
// import { Observable } from 'rxjs';
// import { DataStorageService } from '../shared/data-storage.service';
// import { RecipeService } from './recipe.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class RecipesResolverService implements Resolve<Recipe[]>{
// const data:Recipe
//   constructor(private dataStorageService:DataStorageService, private recipeService:RecipeService) { }
//   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//     const recipes=this.recipeService.getRecipes();
//     if(this.dataStorageService.length===0)
//     {

//       return this.dataStorageService.fetchRecipe()
//     }else{
//       return recipes;
//     }
//   }
  
// }

import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { Recipe } from './recipe.model';
import { DataStorageService } from '../shared/data-storage.service';
import { RecipeService } from './recipe.service';

@Injectable({ providedIn: 'root' })
export class RecipesResolverService implements Resolve<Recipe[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private recipesService: RecipeService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const recipes = this.recipesService.getRecipes();

    if (recipes.length === 0) {
      return this.dataStorageService.fetchRecipe();
    } else {
      return recipes;
    }
  }
}