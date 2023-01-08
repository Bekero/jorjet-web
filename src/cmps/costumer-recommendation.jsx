
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import mediumZoom from "medium-zoom"

export function CostumerRecommendation() {

    // mediumZoom('.img-container', {
    mediumZoom('.product-img', {
        margin: 100,
        // background: '#9b9c98',
        background: '#0000001a',
    })

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 620, min: 0 },
            items: 1
        }
    };

    return (
        <div className="costumer-recommendation">
            <Carousel responsive={responsive}>
                <div className="costumer">
                    <p className="recommendation">לורם איפסום בלה בלה בלה אני אוהב חציל בפיתה עם חומוס בצד וקצת חמוצים</p>
                    <div className="img-container">
                        <img className="product-img" src={require(`../assets/imgs/products/product1.jpeg`)} alt="" />
                    </div>
                    <h2 className="costumer-name">שולה זקן</h2>
                </div>
                <div className="costumer">
                    <p className="recommendation">לורם איפסום בלה בלה בלה אני אוהב חציל בפיתה עם חומוס בצד וקצת חמוצים</p>
                    <div className="img-container">
                        <img className="product-img" src={require(`../assets/imgs/products/product2.jpeg`)} alt="" />
                    </div>
                    <h2 className="costumer-name">בנימין נתניהו</h2>
                </div>
                <div className="costumer">
                    <p className="recommendation">לורם איפסום בלה בלה בלה אני אוהב חציל בפיתה עם חומוס בצד וקצת חמוצים</p>
                    <div className="img-container">
                        <img className="product-img" src={require(`../assets/imgs/products/product3.jpeg`)} alt="" />
                    </div>
                    <h2 className="costumer-name">יאיר לפיד</h2>
                </div>
                <div className="costumer">
                    <p className="recommendation">לורם איפסום בלה בלה בלה אני אוהב חציל בפיתה עם חומוס בצד וקצת חמוצים</p>
                    <div className="img-container">
                        <img className="product-img" src={require(`../assets/imgs/products/product4.jpeg`)} alt="" />
                    </div>
                    <h2 className="costumer-name">אור בקר</h2>
                </div>
            </Carousel>;
        </div>
    )
}
