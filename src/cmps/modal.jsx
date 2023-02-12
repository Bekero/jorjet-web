import LironsJLogo from '../assets/imgs/j-logo.png'

export function Modal({ recipe, setModalOpen, modalOpen, printRecipe }) {


    if (!recipe) return <div>No Recipe</div>
    return (
        <div id="myModal" className={modalOpen ? 'modal open' : 'modal'} >
            <img className="j-logo" src={LironsJLogo} alt="" />
            <div className="button-container">
                {/* <button className="close" onClick={() => printRecipe()}>Print</button> */}
                <button className="close" onClick={() => setModalOpen(false)}>סגור</button>
            </div>
            <div className="modal-content">
                <h1 className="title-recipe">{recipe.title}</h1>
                <p className="recipe-modal-short-description">{recipe.shortDescription}</p>
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
                            <div className="instructions-list-container" key={instruction.instructionsTitle}>
                                <h2 className="category-title">{instruction.instructionsTitle}</h2>
                                {/* <p>{instruction.instructionsString}</p> */}
                                <ul>{instruction.instructionsArray.map(line => {
                                    return <li key={line} >{line}</li>
                                })}</ul>
                            </div>
                        )
                    })}
                </div>
                <button className="send-whatsapp">שלח בוואטסאפ</button>
            </div>
        </div>
    )
}
