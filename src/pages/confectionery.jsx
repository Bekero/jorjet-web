
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { productService } from '../services/product.service'
import { ProductCard } from "../cmps/product-card";
import { Pagination } from "../cmps/pagination";

export function Confectionery() {

    const navigate = useNavigate();

    const [products, setProducts] = useState([])
    const [originalProducts, setOriginalProducts] = useState([])
    const [wantedValue, setWantedValue] = useState(null)

    //?Pagination ***
    const [currentPage, setCurrentPage] = useState(1);
    // User is currently on this page
    const [productsPerPage] = useState(8);
    // No of Products to be displayed on each page   
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    // Products to be displayed on the current page
    // const currentProducts = originalProducts.slice(indexOfFirstProduct,
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
    // const nPages = Math.ceil(originalProducts.length / productsPerPage)
    const nPages = Math.ceil(products.length / productsPerPage)

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
        setCurrentPage(1)
        filterProducts()
    }, [wantedValue])

    const filterProducts = () => {
        if (wantedValue === 'all') {
            setProducts(originalProducts)
            return
        }
        const filteredProducts = originalProducts?.filter(product => {
            return product.category === wantedValue
        })
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
                            value={radio.category}>
                            {radio.categoryHebrew}</li>
                    })}
                </ul>
            </div>

            <div className="gallery">
                {currentProducts.map((product, index) => {
                    return <ProductCard
                        key={product._id}
                        product={product}
                        index={index}
                        onGoToProduct={onGoToProduct}
                    />
                })}
            </div>
            <Pagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    )
}
