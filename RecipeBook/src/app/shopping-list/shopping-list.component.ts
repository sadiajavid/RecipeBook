import { Component, OnDestroy, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] ;
  private igChnageSub:Subscription;

  constructor(private shoppingService:ShoppingListService) { }

  ngOnInit() {
    this.ingredients=this.shoppingService.getShopping()
    this.igChnageSub=this.shoppingService.IngredientsChanged.subscribe((ingredients:Ingredient[])=>{this.ingredients=ingredients})
  }

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
  ngOnDestroy(): void {
    this.igChnageSub.unsubscribe
  }
}
