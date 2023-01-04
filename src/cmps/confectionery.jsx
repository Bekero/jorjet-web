
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "./modal";
import { storageService } from '../services/async-storage.service'
import { productService } from '../services/product.service'
// import products from '../data/products.json'

export function Confectionery() {

    const [filterValue, setFilterValue] = useState(null)
    const [modalOpen, setModalOpen] = useState(null)
    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(productService.getProducts())
    }, [])

    const imgClicked = () => {

    }

    const handleModal = (product) => {
        setModalOpen(!modalOpen)
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
                    return (
                        <div className="product" onClick={() => imgClicked(product)} key={product._id}>
                            <img src={require(`../assets/imgs/products/product${index}.jpeg`)} alt="" />
                            <div className="product-info">
                                <h3 className="product-name">{product.title}</h3>
                                <div className="name-and-price">
                                    <p className="product-price">{product.price}</p>
                                </div>
                                <div className="btns">
                                    <button>הוספה לסל</button>
                                    <Link to={`/collection/${product._id}`} onClick={() => handleModal(product)}>למוצר{index}</Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            {modalOpen && <Modal />}
        </div>
    )
}
