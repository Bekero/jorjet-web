
import RecipeImgHomePage1 from '../assets/imgs/recipe-img-home-page-1.jpeg';
import RecipeImgHomePage2 from '../assets/imgs/recipe-img-home-page-2.jpeg';
import RecipeImgHomePage3 from '../assets/imgs/recipe-img-home-page-3.jpeg';

export function RecipeHomePage() {

    return (
        <div className="recipe-home-page">
            <div className="imgs-container">
                <img src={RecipeImgHomePage1} alt="" />
                <img src={RecipeImgHomePage2} alt="" />
                <img src={RecipeImgHomePage3} alt="" />
            </div>
            <div className="recipe-info">
                <p className="title">מתכונים</p>
                <p className="under-title">bla bla bla</p>
                <hr></hr>
                <p className="info">Lorem 60 ipsum dolor sit amet consectetur adipisicing elit. Cupiditate officiis porro fuga rem? Quibusdam adipisci temporibus, dolorum accusamus laboriosam earum nobis mollitia numquam? Omnis, quaerat. Ab praesentium consectetur aliquam totam placeat modi suscipit impedit consequatur explicabo, voluptatum minus officiis facere aut error sequi a nam, eligendi reprehenderit. Nulla, quis dolorum numquam, aliquam praesentium eaque et repudiandae dolor facere molestiae exercitationem.</p>
                <p className="view-more">View More</p>
            </div>
        </div>
    )
}