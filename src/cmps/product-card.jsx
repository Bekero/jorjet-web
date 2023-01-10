import { useEffect } from "react"


export function ProductCard({ index, product, imgClicked, onGoToProduct, category }) {

    useEffect(() => {
        // console.log('product :', product)
        // console.log('category :', category)
    }, [])

    const blabla = product.srcName

    return (
        <div onClick={() => onGoToProduct(product)} className="card">
            <div className="product" onClick={() => imgClicked(product)}>
                <img src={require(`../assets/imgs/${blabla}`)} alt="" />
                {/* <img src={require(`../assets/imgs/products/product${index}.jpeg`)} alt="" /> */}
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
