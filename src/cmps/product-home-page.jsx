
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import ProductImgHomePage1 from '../assets/imgs/for-home-page/product-img-home-page-1.jpeg';
import ProductImgHomePage2 from '../assets/imgs/for-home-page/product-img-home-page-2.jpeg';
import ProductImgHomePage3 from '../assets/imgs/for-home-page/product-img-home-page-3.jpeg';
import products from '../data/products-for-home-page.json'

export function ProductHomePage() {

    const navigate = useNavigate();

    const onGoToProduct = (product) => {
        navigate(`/confectionery/${product._id}`)
    }

    return (
        <div className="product-home-page">
            <div className="imgs-container">

                {products.map((product, index) => {
                    index += 1
                    return (
                        <div className="product" onClick={() => onGoToProduct(product)} key={product._id}>
                            <img src={require(`../assets/imgs/${product.srcName}`)} alt="" />
                            <button>למוצר</button>
                        </div>
                    )
                })}

            </div>


            <div className="home-page-product-info">
                <p className="title">מה בתפריט</p>
                <p className="under-title">bla bla bla</p>
                <hr></hr>
                <p className="info">Lorem 60 ipsum dolor sit amet consectetur adipisicing elit. Cupiditate officiis porro fuga rem? Quibusdam adipisci temporibus, dolorum accusamus laboriosam earum nobis mollitia numquam? Omnis, quaerat. Ab praesentium consectetur aliquam totam placeat modi suscipit impedit consequatur explicabo, voluptatum minus officiis facere aut error sequi a nam, eligendi reprehenderit. Nulla, quis dolorum numquam, aliquam praesentium eaque et repudiandae dolor facere molestiae exercitationem.</p>
                <button onClick={() => navigate('/confectionery')} className="view-more">View More</button>
            </div>
        </div>
    )
}

