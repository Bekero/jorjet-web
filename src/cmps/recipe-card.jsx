
export function RecipeCard({ index, recipe, onGoToRecipe }) {

    return (
        <div onClick={() => onGoToRecipe(recipe)} className="card">
            <div className="recipe">
                <img src={require(`../assets/imgs/${recipe.srcName}`)} alt="" />
                <div className="recipe-info">
                    <div className="title-and-mini-title">
                        <h3 className="recipe-mini-title">{recipe.miniTitle}</h3>
                        <p className="title">{recipe.title}</p>
                    </div>
                    <div className="btns">
                        <button onClick={() => onGoToRecipe(recipe)}>למתכון{index}</button>
                    </div>
                </div>
            </div>
        </div>


    )
}
