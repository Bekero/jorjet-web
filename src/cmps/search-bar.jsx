import { useState, useEffect } from "react";
import { useDebounce } from "../cmps/use-debounce"
import { productService } from "../services/product.service";

export function SearchBar() {

    const [term, setTerm] = useState([]);
    const DebounceSearch = useDebounce(term, 600)
    const [searchDetails, setSearchDetails] = useState([]);
    const [products, setProducts] = useState([])

    useEffect(() => {
        if (DebounceSearch === '' || !DebounceSearch.length) return setSearchDetails([])
        search()
    }, [DebounceSearch]);

    useEffect(() => {
    }, [term])

    const search = async () => {
        setProducts(productService.getProducts())
        if (!term.length) return setTerm([])
        console.log('term :', term)
        const resultProducts = products.filter(product => {
            return product.title.includes(term)
                || product.description.includes(term)
                || product.addingParve.map(adding => adding.includes(term))
            // || product.addingParve.filter(adding => adding.includes(term))
            // || product.addingMilky.includes(term)
        })
        console.log('products :', products)
        console.log('resultProducts :', resultProducts)
        setSearchDetails(resultProducts)
    }

    return (
        <div className="search-bar-container">
            {/* <input id='search-btn' type='checkbox' /> */}
            {/* <label for='search-btn'>Show search bar</label> */}
            <input
                id='search-bar'
                type='text'
                placeholder='Search...'
                onChange={(ev) => setTerm(ev.target.value)}
            />

        </div>
    )
}