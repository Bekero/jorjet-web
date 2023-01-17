
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import recipes from '../data/recipes-for-home-page.json'
import LironsJLogo from '../assets/imgs/j-logo.png'

export function RecipeHomePage() {

    const [modalOpened, setModalOpened] = useState(null)

    const navigate = useNavigate();

    const imgClicked = (img) => {
        console.log('img :', img)
        setModalOpened(true)
    }

    return (
        <div className="recipe-home-page">
            <img className="j-logo" src={LironsJLogo} alt="" />
            <div className="imgs-container">
                {recipes.map((recipe, index) => {
                    index += 1
                    return (
                        <div onClick={() => imgClicked(recipe)} key={recipe._id}>
                            <img src={require(`../assets/imgs/for-home-page/recipe-img-home-page-${index}.jpeg`)} alt="" />
                            <button>למתכון</button>
                        </div>
                    )
                })}
            </div>
            <div className="home-page-recipe-info">
                <p className="title">מתכונים</p>
                <p className="under-title">bla bla bla</p>
                <hr></hr>
                <p className="info">Lorem 60 ipsum dolor sit amet consectetur adipisicing elit. Cupiditate officiis porro fuga rem? Quibusdam adipisci temporibus, dolorum accusamus laboriosam earum nobis mollitia numquam? Omnis, quaerat. Ab praesentium consectetur aliquam totam placeat modi suscipit impedit consequatur explicabo, voluptatum minus officiis facere aut error sequi a nam, eligendi reprehenderit. Nulla, quis dolorum numquam, aliquam praesentium eaque et repudiandae dolor facere molestiae exercitationem.</p>
                <button onClick={() => navigate('/recipe')}  className="view-more">View More</button>
            </div>
        </div>
    )
}