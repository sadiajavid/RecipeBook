import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipechildComponent } from "./recipes/recipechild/recipechild.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { AuthComponent } from "./auth/auth.component";
const route:Routes=[{path:"",redirectTo:"/recipes",pathMatch:"full"},{path:"recipes",component:RecipesComponent,
children:[{path:"", component:RecipechildComponent},{path:"new",component:RecipeEditComponent},
{path:":id",component:RecipeDetailComponent},{path:":id/edit",component:RecipeEditComponent}]},
{path:"shopping-list",component:ShoppingListComponent},{path:"auth",component:AuthComponent}]
@NgModule({
    imports:[RouterModule.forRoot(route)],
    exports :[RouterModule]
})
export class AppRoutingModule{

}