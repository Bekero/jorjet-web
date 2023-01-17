import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { productService } from "../services/product.service"
import WhatsappSvg from '../assets/svgs/whatsapp'
import mediumZoom from "medium-zoom"
import { Modal } from "../cmps/modal"

export function RecipeDetails() {

    const params = useParams()
    const recipeId = params.id
    const [recipe, setRecipe] = useState(null)
    const [recipes, setRecipes] = useState([])
    const [modalOpen, setModalOpen] = useState(null)

    useEffect(() => {
        setRecipes(productService.getRecipes)
        setRecipe(recipes.find(recipe => recipe._id === recipeId))
    }, [recipe])

    useEffect(() => {
    }, [recipe, recipes])

    useEffect(() => {
        const body = document.querySelector("body");
        if (modalOpen) {
            body.style.overflow = "hidden";
        } else {
            body.style.overflow = "auto";
        }
    }, [modalOpen])

    mediumZoom('.recipe-img', {
        margin: 100,
        background: '#0000001a',
    })

    mediumZoom('.ingredients-container', {
        margin: 30,
        background: '#0000001a',
    })

    if (!recipe) return <div>No Recipe</div>
    return (
        <div className="recipe-details-container">
            <div className="first-section">
                <div className="recipe-info">
                    <div className="button-expand"><button onClick={() => setModalOpen(!modalOpen)} className="view-more">מסך מלא</button></div>

                    <h1 className="title">{recipe.title}</h1>
                    <p className="recipe-short-description">{recipe.shortDescription}</p>
                    <p className="time-to-make">זמן הכנה: {recipe.timeToMake}</p>
                    <div className="ingredients-container">
                        <h2 className="main-title">🛒למצרכים🛒</h2>
                        {recipe.mainIngredients.map((section, index) => {
                            return <ul className="ingredients-ul" key={index}>
                                <h3 className="ingredient-title">{section.ingredientsTitle}</h3>
                                {section.ingredients.map(ingredient => {
                                    return <li key={ingredient} className="ingredient">{ingredient}</li>
                                })}
                            </ul>
                        })}
                    </div>

                    <div className="instructions ">
                        {recipe.mainInstructions.map(instruction => {
                            return (
                                <div className="instruction-container" key={instruction.instructionsTitle}>
                                    <h2 className="category-title">{instruction.instructionsTitle}</h2>
                                    <ul>{instruction.instructionsArray.map(line => {
                                        return <li key={line} >{line}</li>
                                    })}</ul>
                                </div>
                            )
                        })}

                    </div>

                </div>
                <div className="img-container">
                    <img className="recipe-img" src={require(`../assets/imgs/${recipe.srcName}`)} alt="" />
                </div>
            </div>
            <div className="other-links">
                <div className="warning">
                    <h3>Warning Warning Warning</h3>
                </div>
                <div className="whatsapp-contact">
                    <li><a target="_blank" href="https://wa.me/+972558813232"><WhatsappSvg /></a></li>
                    <h3>  הזמנה מהירה דרך הוואטסאפ</h3>
                    <li><a target="_blank" href="https://wa.me/+972558813232"><WhatsappSvg /></a></li>
                </div>

            </div>
            {modalOpen &&
                <Modal
                    recipe={recipe}
                    modalOpen={modalOpen}
                    setModalOpen={setModalOpen}
                />}
        </div>
    )
}
