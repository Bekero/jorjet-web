import { useState, useEffect, useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useDebounce } from "../cmps/use-debounce"
import { productService } from "../services/product.service";

let useClickOutside = (handler) => {
    let domNode = useRef()

    useEffect(() => {
        let maybeHandler = (event) => {
            if (!domNode.current.contains(event.target)) {
                handler()
            }
        }
        document.addEventListener("mousedown", maybeHandler);

        return () => {
            document.removeEventListener("mousedown", maybeHandler)
        }
    }, [])
    return domNode
}

export function SearchBar() {

    const [term, setTerm] = useState([]);
    const [searchDetails, setSearchDetails] = useState([]);
    const [products, setProducts] = useState([])

    const navigate = useNavigate();

    const DebounceSearch = useDebounce(term, 600)
    const elem = document.getElementById('search-bar');

    useEffect(() => {
        if (DebounceSearch === '' || !DebounceSearch.length) return setSearchDetails([])
        search()
    }, [DebounceSearch]);

    useEffect(() => {
        setProducts(productService.getProducts())
    }, [])

    useEffect(() => {
        setProducts(productService.getProducts())
    }, [])

    let domNode = useClickOutside(() => {
        setSearchDetails([])
    })

    const onGoToProduct = (product) => {
        navigate(`confectionery/${product._id}`)
        setSearchDetails([])
        document.getElementById('search-bar').value = ''
        setTerm([])
    }

    const checkIfInputClicked = (ev) => {
        if (ev.target.value) {
            search()
        }
    }

    const search = async () => {
        if (!term.length) return setTerm([])
        const resultProducts = products.filter(product => {
            return product.title.includes(term)
                || product.description.includes(term)
                || product.addingParve.filter(adding => adding.includes(term)).length
                || product.addingMilky.filter(adding => adding.includes(term)).length
        })
        setSearchDetails(resultProducts)
    }

    return (
        <div ref={domNode} className="search-bar-container">
            <input
                id='search-bar'
                type='text'
                placeholder='...חפש'
                onClick={(ev) => checkIfInputClicked(ev)}
                onChange={(ev) => setTerm(ev.target.value)}
            />
            {searchDetails && <ul className={searchDetails.length > 0 ? 'search-result has-focus' : 'search-result'}>
                {searchDetails?.map(product => {
                    return <li onClick={() => onGoToProduct(product)} key={product._id}>
                        <img src={require(`../assets/imgs/${product.srcName}`)} alt="" />
                        <span>{product.title}</span>
                    </li>
                })}
            </ul>
            }
        </div>
    )
}