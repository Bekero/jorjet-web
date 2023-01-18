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
    const [divAddingParveExpends, setDivAddingParveExpends] = useState(null)
    const [divAddingMilkyExpends, setDivAddingMilkyExpends] = useState(null)

    useEffect(() => {
        setProducts(productService.getProducts)
        setProduct(products.find(product => product._id === productId))
    }, [product])

    useEffect(() => {
    }, [product, products])

    mediumZoom('.product-img', {
        margin: 100,
        background: '#0000001a',
    })

    const [image, setImage] = useState("");

    (function (imageName) {
        if (!product?.srcName) return
        import(
            `../assets/imgs/${imageName}`
        ).then((image) => setImage(image.default)).catch(e => console.log('e :', e));;
    })(product?.srcName);

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
                        <div className="addings-parve">
                            <p onClick={() => setDivAddingParveExpends(!divAddingParveExpends)}> <span>{divAddingParveExpends ? '-' : '+'}</span><span>: תוספות ל{product.title} (פרווה)</span></p>
                            <ul className={divAddingParveExpends ? 'expends-parve expends' : 'expends-parve'}>
                                {product?.addingParve?.map((ingredient, index) =>
                                    // <li key={ingredient}>{index >= 1 ? ',' : ''}{ingredient}</li>
                                    <li key={ingredient}>{ingredient}&nbsp;·</li>
                                )}
                            </ul>
                        </div>
                        <div className="addings-milky">
                            <p onClick={() => setDivAddingMilkyExpends(!divAddingMilkyExpends)} ><span>{divAddingMilkyExpends ? '-' : '+'}</span><span>: תוספות ל{product.title} (חלבי)</span></p>
                            <ul className={divAddingMilkyExpends ? 'expends-milky expends' : 'expends-milky'} >
                                {product?.addingMilky?.map((ingredient, index) =>
                                    // <li key={ingredient}>{index >= 1 ? ',' : ''}{ingredient}</li>
                                    <li key={ingredient}>{ingredient}&nbsp;·</li>
                                )}
                            </ul>
                        </div>
                    </div>
                    <div className="last-info">
                        <h4>{product.note}</h4>
                        <h4><span>.מתאים ל-{product.productSizeForPeople} פרוסות </span> <span>&nbsp; קוטר ({product.diameter}) </span></h4>
                    </div>
                </div>

                <div className="img-container">
                    {/* <img className="product-img" src={require(`../assets/imgs/${product.srcName}`)} alt="" /> */}
                    {/* <img className="product-img" src={`../assets/imgs/${product.srcName}`} alt="" /> */}
                    {image && <img alt="" className="recipe-img" src={image} />}
                </div>
            </div>
            <div className="other-links">
                <div className="warning">
                    <h3>Warning Warning Warning</h3>
                </div>
                <div className="whatsapp-contact">
                    <li><a target="_blank" href="https://wa.me/+972558813232"><WhatsappSvg /></a></li>
                    <h3>  הזמנה מהירה דרך הוואטסאפ</h3>
                    <li><a target="_blank" href="https://wa.me/+972558813232"><WhatsappSvg /></a></li>
                </div>

            </div>
        </div>
    )
}
