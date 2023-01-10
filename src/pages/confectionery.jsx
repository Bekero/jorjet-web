
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { productService } from '../services/product.service'
import { ProductCard } from "../cmps/product-card";
// import PrevPageSvg from '../cmps/svg/prev-page'
// import { ConfectioneryCases } from "../cmps/confectionery-cases"
// import { ConfectioneryCakes } from "../cmps/confectionery-cakes";
// import { ConfectioneryMin90 } from "../cmps/confectionery-min-90";
// import { ConfectioneryDesserts } from "../cmps/confectionery-desserts";
// import { GoBack } from "../cmps/go-back";

// import products from '../data/products.json'

export function Confectionery() {

    const navigate = useNavigate();

    // const [filterValue, setFilterValue] = useState(null)
    const [products, setProducts] = useState([])
    const [wantedValue, setWantedValue] = useState('confectionery')

    useEffect(() => {
        setProducts(productService.getProducts())
        console.log('products :', products)
    }, [])

    const imgClicked = () => {

    }

    const onGoToProduct = (product) => {
        navigate(`/collection/${product._id}`)
    }

    return (
        <div className="confectionery-container">
            <div className="radio-btns">
                <ul>
                    <li className={wantedValue === 'min-90' ? 'highlight' : ''} onClick={() => setWantedValue('min-90')} value="min-90">דקה 90</li>
                    <li className={wantedValue === 'desserts' ? 'highlight' : ''} onClick={() => setWantedValue('desserts')} value="desserts">קינוחים</li>
                    <li className={wantedValue === 'cakes' ? 'highlight' : ''} onClick={() => setWantedValue('cakes')} value="cakes">עוגות</li>
                    <li className={wantedValue === 'cases' ? 'highlight' : ''} onClick={() => setWantedValue('cases')} value="cases">מארזים</li>
                </ul>
            </div>

            <div className="gallery">
                {products.map((product, index) => {
                    // return category.map((product, index) => {
                    return <ProductCard
                        // category={category}
                        key={product._id}
                        product={product}
                        index={index}
                        onGoToProduct={onGoToProduct}
                        imgClicked={imgClicked}
                    />
                    // })
                })}



                {/* {products.map((product, index) => {
                    index += 1
                    return <ProductCard
                        key={product._id}
                        product={product}
                        index={index}
                        onGoToProduct={onGoToProduct}
                        imgClicked={imgClicked}
                    />
                })} */}
            </div>
        </div>
    )
}
