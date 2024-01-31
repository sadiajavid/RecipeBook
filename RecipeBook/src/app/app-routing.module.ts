import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipechildComponent } from "./recipes/recipechild/recipechild.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
const route:Routes=[{path:"",redirectTo:"/recipes",pathMatch:"full"},{path:"recipes",component:RecipesComponent,children:[{path:"", component:RecipechildComponent},{path:":id",component:RecipeDetailComponent}]},{path:"shopping-list",component:ShoppingListComponent}]
@NgModule({
    imports:[RouterModule.forRoot(route)],
    exports :[RouterModule]
})
export class AppRoutingModule{

}