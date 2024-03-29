import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit ,OnDestroy{
  subscription:Subscription;
  recipes: Recipe[]
  constructor(private recipeService:RecipeService,private router:Router,private route:ActivatedRoute ) { }

  ngOnInit() {
    this.recipeService.recipesChanged
    .subscribe((recipe:Recipe[])=>{
      this.recipes=recipe
    })
    this.recipes=this.recipeService.getRecipes()
  }
  newRecipe(){
    this.router.navigate(['new'],{relativeTo:this.route})
  }
  
    ngOnDestroy() {
     
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
  }
  
}
