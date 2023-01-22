
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import productImg1 from '../assets/imgs/for-home-page/product-img-home-page-1.jpeg'
import productImg2 from '../assets/imgs/for-home-page/product-img-home-page-2.jpeg'
import productImg3 from '../assets/imgs/for-home-page/product-img-home-page-3.jpeg'

import products from '../data/products-for-home-page.json'

export function ProductHomePage() {

    const navigate = useNavigate();

    const onGoToProduct = (productId) => {
        navigate(`/confectionery/${productId}`)
    }

    const productsFileName = [
        {
            imgImportName: productImg1,
            name: 'unicornCake',
            _id: 'wdasefrgtfyui'

        },
        {
            imgImportName: productImg2,
            name: 'goldCrown',
            _id: 'ikujghftdrse'

        },
        {
            imgImportName: productImg3,
            name: 'sunFlower',
            _id: 'qeawrsfdtgfyju'

        }
    ]

    return (
        <div className="product-home-page">
            <div className="imgs-container">
                {productsFileName.map((product, index) => {
                    index += 1
                    return (
                        <div onClick={() => onGoToProduct(product._id)} key={product._id}>
                            <img src={product.imgImportName} alt="" />
                            <button>למתכון</button>
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


// {products.map((product, index) => {
//     index += 1
//     return (
//         <div className="product" onClick={() => onGoToProduct(product)} key={product._id}>
//             {/* <img src={require(`../assets/imgs/${product.srcName}`)} alt="" /> */}
//             <img src={`../assets/imgs/${product.srcName}`} alt="" />
//             <button>למוצר</button>
//         </div>
//     )
// })}