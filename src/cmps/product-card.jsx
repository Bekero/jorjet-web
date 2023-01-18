import { useState } from "react";

export function ProductCard({ index, product, onGoToProduct }) {

    const [image, setImage] = useState("");

    (function (imageName) {
        if (!product?.srcName) return
        import(
            `../assets/imgs/${imageName}`
        ).then((image) => setImage(image.default)).catch(e => console.log('e :', e));;
    })(product?.srcName);

    return (
        <div onClick={() => onGoToProduct(product)} className="card">
            <div className="product">
                {/* <img src={require(`../assets/imgs/${product.srcName}`)} alt="" /> */}
                {/* <img src={`../assets/imgs/${product.srcName}`} alt="" /> */}
                {image && <img alt="" className="recipe-img" src={image} />}
                <div className="product-info">
                    <div className="name-and-price">
                        <h3 className="product-name">{product.title}</h3>
                        <div className="product-price">
                            <p>ש"ח</p>
                            <p>{product.price}</p>
                        </div>
                    </div>
                    <div className="btns">
                        <button onClick={() => onGoToProduct(product)}>למוצר{index}</button>
                    </div>
                </div>
            </div>
        </div>


    )
}
