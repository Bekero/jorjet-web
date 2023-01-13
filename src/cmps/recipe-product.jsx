import { ProductHomePage } from "./product-home-page";
import { RecipeHomePage } from "./recipe-home-page";

export function RecipeProduct() {

    return (
        <div className="recipe-product">
            <RecipeHomePage />
            <ProductHomePage />
        </div>
    )
}