
import { motion } from 'framer-motion'

export function ProductCard({ index, product, onGoToProduct }) {

    return (
        <motion.div
            layout
            animate={{ opacity: 1 }}
            initial={{ opacity: 0.3 }}
            exit={{ opacity: 0.3 }}
            onClick={() => onGoToProduct(product)} className="card">
            <div className="product">
                {/* <img src={require(`../assets/imgs/${product.srcName}`)} alt="" /> */}
                <img src={`../assets/imgs/${product.srcName}`} alt="" />
                <div className="product-info">
                    <div className="name-and-price">
                        <h3 className="product-name">{product.title}</h3>
                        <div className="product-price">
                            <p>ש"ח</p>
                            <p>{product.price}</p>
                        </div>
                    </div>
                    {/* <div className="btns">
                        <button onClick={() => onGoToProduct(product)}>למוצר{index}</button>
                    </div> */}
                </div>
            </div>
        </motion.div>


    )
}
