
import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Modal } from "./modal";
import { storageService } from '../services/async-storage.service'
import { productService } from '../services/product.service'
import { ProductCard } from "./product-card";
// import products from '../data/products.json'

export function Confectionery() {

    const navigate = useNavigate();

    const [filterValue, setFilterValue] = useState(null)
    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(productService.getProducts())
    }, [])

    const imgClicked = () => {

    }

    const onGoToProduct = (product) => {
        navigate(`/collection/${product._id}`)
    }

    return (
        <div className="confectionery-container">
            <ul className="confectionery-links">
                <li onClick={(ev) => setFilterValue('designed-cakes')} value="designed-cakes" >עוגות מעוצבות</li>
                <li onClick={(ev) => setFilterValue('showcase-cakes')} value="showcase-cakes" >עוגות ראווה</li>
                <li onClick={(ev) => setFilterValue('mousse-cakes')} value="mousse-cakes" >עוגות מוס</li>
                <li onClick={(ev) => setFilterValue('desserts')} value="desserts" >קינוחים</li>
            </ul>
            <div className="gallery">
                {products.map((product, index) => {
                    index += 1
                    return <ProductCard
                        key={product._id}
                        product={product}
                        index={index}
                        onGoToProduct={onGoToProduct}
                        imgClicked={imgClicked}
                    />
                })}
            </div>
        </div>
    )
}
