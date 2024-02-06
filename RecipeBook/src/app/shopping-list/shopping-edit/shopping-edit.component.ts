import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit ,OnDestroy{
subscription:Subscription
editedItem:Ingredient
editMode=false
editedItemIndex:number
@ViewChild("f") slForm:NgForm
  constructor(private shoppingService:ShoppingListService) { 

  }
  ngOnInit() {
    this.subscription=this.shoppingService.startEditing
    .subscribe((
     index:number
    )=>{
      this.editedItem=this.shoppingService.getIngredient(index)
this.editMode=true
this.editedItemIndex=index;
this.slForm.setValue({
  name:this.editedItem.name,amount:this.editedItem.amount
})
    })}
onSubmit(form:NgForm) {
    const value=form.value;
    const newIngredient = new Ingredient(value.name,value.amount);
    if(this.editMode){
      this.shoppingService.updateIngredient(this.editedItemIndex,newIngredient)
    }
    else{
        this.shoppingService.addIngredient(newIngredient)
      } 
      this.editMode=false
    form.reset()}
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
  onClear(){
    this.editMode=false;
    this.slForm.reset()
  }
  onDelete(){
    this.shoppingService.deleteIngredient(this.editedItemIndex)
    this.onClear()
  }
}
