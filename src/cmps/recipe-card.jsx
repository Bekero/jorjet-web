import { useState } from "react"

export function RecipeCard({ index, recipe, onGoToRecipe }) {

    // const [image, setImage] = useState("");

    // (function (imageName) {
    //     import(
    //         `../assets/imgs/${imageName}`
    //     ).then((image) => setImage(image.default)).catch(e => console.log('e :', e));;
    // })(recipe.srcName);


    if (!recipe) return <div>No Recipe</div>
    return (
        <div onClick={() => onGoToRecipe(recipe)} className="card">
            <div className="recipe">
                {/* {image && <img alt="" className="img-responsive" src={image} />} */}
                {/* <img src={require(`../assets/imgs/${product.srcName}`)} alt="" /> */}
                <img src={`../assets/imgs/${recipe.srcName}`} alt="" />
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
