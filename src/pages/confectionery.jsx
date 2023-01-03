
import { useEffect, useState } from "react";
import products from '../data/products.json'

export function Confectionery() {

    const [filterValue, setFilterValue] = useState(null)

    useEffect(() => {
        console.log('filterValue :', filterValue)
    }, [filterValue])

    const imgClicked = () => {

    }

    const listOfLinks = [
        'designed-cakes',
        'Showcase-cakes',
        'mousse-cakes',
        'desserts'
    ]

    return (
        <div className="confectionery-container">
            <h2>קונדיטוריה</h2>

            <ul className="confectionery-links">
                <li onClick={(ev) => setFilterValue('designed-cakes')} value="designed-cakes" >עוגות מעוצבות</li>
                <li onClick={(ev) => setFilterValue('showcase-cakes')} value="showcase-cakes" >עוגות ראווה</li>
                <li onClick={(ev) => setFilterValue('mousse-cakes')} value="mousse-cakes" >עוגות מוס</li>
                <li onClick={(ev) => setFilterValue('desserts')} value="desserts" >קינוחים</li>
            </ul>

            <div className="gallery">
                {products.map((product, index) => {
                    index += 1
                    return (
                        <div className="product" onClick={() => imgClicked(product)} key={product._id}>
                            <img src={require(`../assets/imgs/products/product${index}.jpeg`)} alt="" />
                            <div className="product-info">
                                <div className="name-and-price">
                                    <h3 className="product-name">{product.title}</h3>
                                    <p className="product-price">{product.price}</p>
                                </div>
                                <div className="btns">
                                    <button>הוספה לסל</button>
                                    <button>למוצר{index}</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
