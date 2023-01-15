
export function Modal({ recipe, setModalOpen, modalOpen }) {

    if (!recipe) return <div>No Recipe</div>
    return (
        <div id="myModal" className={modalOpen ? 'modal open' : 'modal'} >
            <button className="close" onClick={() => setModalOpen(false)}>X</button>
            <div className="modal-content">
                <h1 className="mini-title-recipe">{recipe.miniTitle}</h1>
                <p className="title-recipe">{recipe.title}</p>
                <p className="time-to-make">זמן הכנה: {recipe.timeToMake}</p>
                <div className="ingredients-container">
                    <h2 className="main-title"><span>🛒למצרכים🛒</span></h2>
                    {recipe.mainIngredients.map((section, index) => {
                        return <ul className="ingredients" key={index}>
                            <h3 className="ingredient-title category-title">{section.ingredientsTitle}</h3>
                            {section.ingredients.map(ingredient => {
                                return <li key={ingredient} className="ingredient">{ingredient}</li>
                            })}
                        </ul>
                    })}

                </div>
                <div className="instructions ">
                    {recipe.mainInstructions.map(instruction => {
                        return (
                        <div className="xxx" key={instruction.instructionsTitle}>
                            <h2 className="category-title">{instruction.instructionsTitle}</h2>
                            {/* <p>{instruction.instructionsString}</p> */}
                            <ul>{instruction.instructionsArray.map(line => {
                                return <li key={line} >{line}</li>
                            })}</ul>
                        </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
