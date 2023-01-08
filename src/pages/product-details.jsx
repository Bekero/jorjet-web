import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { productService } from "../services/product.service"
import WhatsappSvg from '../assets/svgs/whatsapp'
import mediumZoom from "medium-zoom"

export function ProductDetails() {

    const params = useParams()
    const productId = params.id
    const [product, setProduct] = useState(null)
    const [products, setProducts] = useState([])
    const [productIndex, setProductIndex] = useState(null)
    const [divExpends, setDivExpends] = useState(null)

    useEffect(() => {
        setProducts(productService.getProducts)
        getProductById()
    }, [product, products])

    mediumZoom('.product-img', {
        margin: 100,
        // background: '#9b9c98',
        background: '#0000001a',
    })

    const getProductById = () => {
        setProduct(products.find(product => product._id === productId))
        setProductIndex(products.findIndex(product => product._id === productId) + 1)
    }

    if (!product) return <div>No Product</div>
    return (
        <div className="product-details-container">
            <div className="first-section">
                <div className="product-info">
                    <h1 className="title">{product.title}</h1>
                    <div className="product-price">
                        <p>ש"ח</p>
                        <p>{product.price}</p>
                    </div>
                    <p className="short-description">{product.shortDescription}</p>
                    <div className="ingredients-list">
                        : מרכיבים
                        <ul>
                            {product?.ingredients?.map(ingredient =>
                                <li key={ingredient}>{ingredient}</li>
                            )}
                        </ul>
                    </div>
                    <div onClick={() => setDivExpends(!divExpends)} className="allergy-info">
                        <p className="container">
                            <p>{divExpends ? '-' : '+'}</p>
                            <p>מידע על אלרגנים </p>
                        </p>
                        <div className={divExpends ? 'expends-allergy expends' : 'expends-allergy'} >
                            <p className="milk-section"> {product?.isContainsMilk ? 'חלבי' : 'פרווה'}</p>
                            <p className="milk-section"> {product?.isContainsNut ? 'מכיל אגוזים' : 'לא מכיל אגוזים'}</p>
                        </div>
                    </div>

                </div>
                <div className="img-container">
                    <img className="product-img" src={require(`../assets/imgs/products/product${productIndex}.jpeg`)} alt="" />
                </div>
            </div>
            <div className="other-links">
                <div className="whatsapp-contact">
                    <li><a target="_blank" href="https://wa.me/+972558813232"><WhatsappSvg /></a></li>
                    <h3>  הזמנה מהירה דרך הוואטסאפ</h3>
                    <li><a target="_blank" href="https://wa.me/+972558813232"><WhatsappSvg /></a></li>
                </div>

            </div>
        </div>
    )
}
