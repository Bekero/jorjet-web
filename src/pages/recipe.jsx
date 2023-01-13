
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RecipeCard } from '../cmps/recipe-card'
import { productService } from '../services/product.service'

export function Recipe() {

    const [recipes, setRecipes] = useState([])
    const [originalRecipes, setOriginalRecipes] = useState([])

    const navigate = useNavigate();

    useEffect(() => {
        setRecipes(productService.getRecipes())
        setOriginalRecipes(productService.getRecipes())
    }, [])

    useEffect(() => { }, [recipes])

    const onGoToRecipe = (recipe) => {
        navigate(`/recipe/${recipe._id}`)
    }

    return (
        <div className="recipe-container">

            <div className="gallery">
                {recipes.map((recipe, index) => {
                    return <RecipeCard
                        key={recipe._id}
                        recipe={recipe}
                        index={index}
                        onGoToRecipe={onGoToRecipe}
                    />
                })}
            </div>
        </div>
    )
}
