
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import recipes from '../data/recipes-for-home-page.json'
import LironsJLogo from '../assets/imgs/j-logo.png'
import recipeImg1 from '../assets/imgs/for-home-page/recipe-img-home-page-1.JPG'
import recipeImg2 from '../assets/imgs/for-home-page/recipe-img-home-page-2.JPG'
import recipeImg3 from '../assets/imgs/for-home-page/recipe-img-home-page-3.JPG'

export function RecipeHomePage() {

    const navigate = useNavigate();

    const onGoToProduct = (productId) => {
        navigate(`/recipe/${productId}`)
    }

    const recipesFileName = [
        {
            imgImportName: recipeImg1,
            _id: 'wedsrfdtgfuyjhkilok'

        },
        {
            imgImportName: recipeImg2,
            _id: 'edsrftguyjhiklok;p'

        },
        {
            imgImportName: recipeImg3,
            _id: 'ewdsrfgtuyjiklok'

        }
    ]


    return (
        <div className="recipe-home-page">
            <img className="j-logo" src={LironsJLogo} alt="" />
            <div className="imgs-container">
                {recipesFileName.map((recipe, index) => {
                    index += 1
                    return (
                        <div onClick={() => onGoToProduct(recipe._id)} key={recipe._id}>
                            {/* <img src={`../assets/imgs/for-home-page/recipe-img-home-page-${index}.JPG`} alt="" /> */}
                            <img src={recipe.imgImportName} alt="" />
                            <button>למתכון</button>
                        </div>
                    )
                })}
                {/* <img alt="" className="recipe-img" src={recipeImg1} />
                <img alt="" className="recipe-img" src={recipeImg2} />
                <img alt="" className="recipe-img" src={recipeImg3} /> */}
            </div>
            <div className="home-page-recipe-info">
                <p className="title">מתכונים</p>
                <p className="under-title">bla bla bla</p>
                <hr></hr>
                <p className="info">Lorem 60 ipsum dolor sit amet consectetur adipisicing elit. Cupiditate officiis porro fuga rem? Quibusdam adipisci temporibus, dolorum accusamus laboriosam earum nobis mollitia numquam? Omnis, quaerat. Ab praesentium consectetur aliquam totam placeat modi suscipit impedit consequatur explicabo, voluptatum minus officiis facere aut error sequi a nam, eligendi reprehenderit. Nulla, quis dolorum numquam, aliquam praesentium eaque et repudiandae dolor facere molestiae exercitationem.</p>
                <button onClick={() => navigate('/recipe')} className="view-more">View More</button>
            </div>
        </div>
    )
}