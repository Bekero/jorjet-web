import { useState } from "react"
import { motion } from 'framer-motion'

export function RecipeCard({ index, recipe, onGoToRecipe }) {

    if (!recipe) return <div>No Recipe</div>
    return (
        <motion.div
            layout
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            onClick={() =>
                onGoToRecipe(recipe)}
            className="card">
            <div className="recipe">
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
        </motion.div>
    )
}
