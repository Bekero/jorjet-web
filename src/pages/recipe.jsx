
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Pagination } from '../cmps/pagination'
import { RecipeCard } from '../cmps/recipe-card'
import { loadRecipes } from '../store/actions/recipe.action'

export function Recipe() {

    // const [recipes, setRecipes] = useState([])
    const { recipes } = useSelector(state => state.recipeModule)

    const [originalRecipes, setOriginalRecipes] = useState([])

    const navigate = useNavigate();
    const dispatch = useDispatch()

    //?Pagination ***
    const [currentPage, setCurrentPage] = useState(1);
    const [currentRecipes, setCurrentRecipes] = useState([]);
    const [numPages, setNumPages] = useState(null);
    const [recipesPerPage] = useState(8);
    const indexOfLastRecipe = currentPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;

    useEffect(() => {
        dispatch(loadRecipes())
    }, [])

    useEffect(() => {
        if (!recipes?.length) return
        setOriginalRecipes(recipes)
        setCurrentRecipes(recipes?.slice(indexOfFirstRecipe, indexOfLastRecipe))
        setNumPages(Math.ceil(recipes?.length / recipesPerPage))
    }, [recipes])

    const onGoToRecipe = (recipe) => {
        navigate(`/recipe/${recipe._id}`)
    }

    if (!currentRecipes?.length) return <div>Loading...</div>
    return (
        <div className="recipe-container">
            <h1>המתכונים שלי</h1>
            <div className="gallery">
                {currentRecipes.map((recipe, index) => {
                    return <RecipeCard
                        key={recipe._id}
                        recipe={recipe}
                        index={index}
                        onGoToRecipe={onGoToRecipe}
                    />
                })}
            </div>
            <Pagination
                numPages={numPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />

        </div>
    )
}
