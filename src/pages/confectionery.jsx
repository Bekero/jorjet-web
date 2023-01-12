
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
    const [originalProducts, setOriginalProducts] = useState([])
    const [wantedValue, setWantedValue] = useState('cases')

    useEffect(() => {
        setProducts(productService.getProducts())
        setOriginalProducts(productService.getProducts())
    }, [])

    useEffect(() => {
        filterProducts()
    }, [wantedValue])

    const filterProducts = () => {
        const filteredProducts = originalProducts?.filter(product => product.category.includes(wantedValue))
        setProducts(filteredProducts)
    }

    const onGoToProduct = (product) => {
        navigate(`/confectionery/${product._id}`)
    }

    let radioBtns = [
        {
            category: 'min-90',
            categoryHebrew: 'דקה-90'
        },
        {
            category: 'desserts',
            categoryHebrew: 'קינוחים'
        },
        {
            category: 'cakes',
            categoryHebrew: 'עוגות'
        },
        {
            category: 'cases',
            categoryHebrew: 'מארזים'
        },
    ]

    return (
        <div className="confectionery-container">
            <div className="radio-btns">
                <ul>
                    {radioBtns.map(radio => {
                        return <li
                        key={radio.category}
                        className={wantedValue === `${radio.category}` ? 'highlight' : ''} 
                        onClick={() => setWantedValue(radio.category)} 
                        value={radio.category}>{radio.categoryHebrew}</li>
                    })}
                    {/* <li className={wantedValue === 'min-90' ? 'highlight' : ''} onClick={() => setWantedValue('min-90')} value="min-90">דקה 90</li>
                    <li className={wantedValue === 'desserts' ? 'highlight' : ''} onClick={() => setWantedValue('desserts')} value="desserts">קינוחים</li>
                    <li className={wantedValue === 'cakes' ? 'highlight' : ''} onClick={() => setWantedValue('cakes')} value="cakes">עוגות</li>
                    <li className={wantedValue === 'cases' ? 'highlight' : ''} onClick={() => setWantedValue('cases')} value="cases">מארזים</li> */}
                </ul>
            </div>

            <div className="gallery">
                {products.map((product, index) => {
                    return <ProductCard
                        key={product._id}
                        product={product}
                        index={index}
                        onGoToProduct={onGoToProduct}
                    />
                })}
            </div>
        </div>
    )
}
