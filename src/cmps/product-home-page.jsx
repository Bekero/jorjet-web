
import ProductImgHomePage1 from '../assets/imgs/product-img-home-page-1.jpeg';
import ProductImgHomePage2 from '../assets/imgs/product-img-home-page-2.jpeg';
import ProductImgHomePage3 from '../assets/imgs/product-img-home-page-3.jpeg';

export function ProductHomePage() {

    return (
        <div className="product-home-page">
            <div className="imgs-container">
                <img src={ProductImgHomePage1} alt="" />
                <img src={ProductImgHomePage2} alt="" />
                <img src={ProductImgHomePage3} alt="" />
            </div>
            <div className="product-info">
                <p className="title">מה בתפריט</p>
                <p className="under-title">bla bla bla</p>
                <hr></hr>
                <p className="info">Lorem 60 ipsum dolor sit amet consectetur adipisicing elit. Cupiditate officiis porro fuga rem? Quibusdam adipisci temporibus, dolorum accusamus laboriosam earum nobis mollitia numquam? Omnis, quaerat. Ab praesentium consectetur aliquam totam placeat modi suscipit impedit consequatur explicabo, voluptatum minus officiis facere aut error sequi a nam, eligendi reprehenderit. Nulla, quis dolorum numquam, aliquam praesentium eaque et repudiandae dolor facere molestiae exercitationem.</p>
                <p className="view-more">View More</p>
            </div>
        </div>
    )
}