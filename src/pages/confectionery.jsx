
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductCard } from "../cmps/product-card";
import { Pagination } from "../cmps/pagination";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts } from '../store/actions/product.action'

export function Confectionery() {

    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { products } = useSelector(state => state.productModule)

    // const [products, setProducts] = useState([])
    const [originalProducts, setOriginalProducts] = useState([])
    const [wantedValue, setWantedValue] = useState(null)

    //?Pagination ***
    const [currentPage, setCurrentPage] = useState(1);
    const [currentProducts, setCurrentProducts] = useState([]);
    const [numPages, setNumPages] = useState(null);
    const [productsPerPage] = useState(8);
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

    useEffect(() => {
        dispatch(loadProducts())
    }, [])

    useEffect(() => {
        if (!products?.length) return
        // setOriginalProducts(products)
        setCurrentProducts(products?.slice(indexOfFirstProduct, indexOfLastProduct))
        setNumPages(Math.ceil(products?.length / productsPerPage))
    }, [products])

    // useEffect(() => {
        // console.log('products :', products)
        // if (!products?.length) {
        //     dispatch(loadProducts())
        //     return
        // }
        // if (!currentPage === 1) { setCurrentPage(1) }
        // filterProducts()
    // }, [wantedValue])

    const filterProducts = () => {
        // if (wantedValue === 'all') {
        // dispatch(loadProducts())
        // setOriginalProducts(products)
        // return
        // }
        const filteredProducts = products?.filter(product => {
            return product.category === wantedValue
        })
        setCurrentProducts(filteredProducts?.slice(indexOfFirstProduct, indexOfLastProduct))
        // setOriginalProducts(filteredProducts)
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

    if (!currentProducts?.length) return <div>Nada</div>
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
                {currentProducts?.map((product, index) => {
                    return <ProductCard
                        key={product._id}
                        product={product}
                        index={index}
                        onGoToProduct={onGoToProduct}
                    />
                })}
            </div>
            <Pagination
                numPages={numPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    )
}
