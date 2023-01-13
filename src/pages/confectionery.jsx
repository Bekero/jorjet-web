
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { productService } from '../services/product.service'
import { ProductCard } from "../cmps/product-card";

export function Confectionery() {

    const navigate = useNavigate();

    const [products, setProducts] = useState([])
    const [originalProducts, setOriginalProducts] = useState([])
    const [wantedValue, setWantedValue] = useState([])

    useEffect(() => {
        setProducts(productService.getProducts())
        setOriginalProducts(productService.getProducts())
    }, [])

    useEffect(() => { }, [products])

    useEffect(() => {
        if (!products.length) {
            setProducts(productService.getProducts())
            return
        }
        filterProducts()
    }, [wantedValue])

    const filterProducts = () => {
        if (wantedValue === 'all') {
            setProducts(originalProducts)
            return
        }
        // const filteredProducts = originalProducts?.filter(product => product.category.includes(wantedValue))
        setProducts(originalProducts?.filter(product => product.category.includes(wantedValue)))
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
        {
            category: 'all',
            categoryHebrew: 'הכל'
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
