import {
    Recipe
} from './recipe.model';
import {
    EventEmitter, Injectable
} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()

export class RecipeService {
    public recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Tasty Schnitzel', 'A super-tasty Schnitzel - Just awesome!', './assets/recipeImage1.jpeg', [new Ingredient('Meat', 1), new Ingredient('Fries', 20)]),
        new Recipe('Big Fat Burger', 'What else you need to say?', './assets/recipeImage2.jpeg', [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]),
    ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}
