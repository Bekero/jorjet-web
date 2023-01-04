
// import RecipeImgHomePage1 from '../assets/imgs/for-home-page/recipe-img-home-page-1.jpeg';
// import RecipeImgHomePage2 from '../assets/imgs/for-home-page/recipe-img-home-page-2.jpeg';
// import RecipeImgHomePage3 from '../assets/imgs/for-home-page/recipe-img-home-page-3.jpeg';
import { useState } from 'react'
import recipes from '../data/recipes-for-home-page.json'

export function RecipeHomePage() {

    const [modalOpened, setModalOpened] = useState(null)

    const imgClicked = (img) => {
        console.log('img :', img)
        setModalOpened(true)
    }

    return (
        <div className="recipe-home-page">
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

            <div className="recipe-info">
                <p className="title">מתכונים</p>
                <p className="under-title">bla bla bla</p>
                <hr></hr>
                <p className="info">Lorem 60 ipsum dolor sit amet consectetur adipisicing elit. Cupiditate officiis porro fuga rem? Quibusdam adipisci temporibus, dolorum accusamus laboriosam earum nobis mollitia numquam? Omnis, quaerat. Ab praesentium consectetur aliquam totam placeat modi suscipit impedit consequatur explicabo, voluptatum minus officiis facere aut error sequi a nam, eligendi reprehenderit. Nulla, quis dolorum numquam, aliquam praesentium eaque et repudiandae dolor facere molestiae exercitationem.</p>
                <p className="view-more">View More</p>
            </div>
            {/* {modalOpened && <div class="modal">
                    <div class="modal-wrap">
                        <img src="https://assets.codepen.io/1462889/sl3.jpg" alt="" />
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                    </div>
                </div> } */}
        </div>
    )
}