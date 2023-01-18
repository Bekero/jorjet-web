
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Pagination } from '../cmps/pagination'
import { RecipeCard } from '../cmps/recipe-card'
import { productService } from '../services/product.service'

export function Recipe() {

    const [recipes, setRecipes] = useState([])
    const [originalRecipes, setOriginalRecipes] = useState([])

    const navigate = useNavigate();


    //?Pagination ***
    const [currentPage, setCurrentPage] = useState(1);
    // User is currently on this page
    const [recipesPerPage] = useState(8);
    // No of Recipes to be displayed on each page   
    const indexOfLastRecipe = currentPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
    // Recipes to be displayed on the current page
    // const currentRecipes = originalRecipes.slice(indexOfFirstRecipe,
    const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);
    // const nPages = Math.ceil(originalRecipes.length / recipesPerPage)
    const nPages = Math.ceil(recipes.length / recipesPerPage)



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
            <h1>המתכונים שלי</h1>
            <div className="gallery">
                {currentRecipes?.map((recipe, index) => {
                    return <RecipeCard
                        key={recipe._id}
                        recipe={recipe}
                        index={index}
                        onGoToRecipe={onGoToRecipe}
                    />
                })}
            </div>
            <Pagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />

        </div>
    )
}
