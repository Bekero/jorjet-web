
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import mediumZoom from "medium-zoom"
import review1 from '../assets/imgs/reviews-imgs/review1.jpeg'
import { useState } from "react";

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
            breakpoint: { max: 1400, min: 1300 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 1300, min: 1024 },
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

    let reviews = [
        {
            recommendation: 'אלופה מספק אחת, אין על העוגות שלך הן עשויות בקפידה ומוריי גלם איכותיים. מי שמכיר אותך יודע שאינך מסתפקת בחומריי    גלם פשוטים ומי שלא מכיר אותך זה הזמן להזמין מלירון מבטיחה שלא תתאכזבו .',
            name: 'אור '
        },
        {
            recommendation: 'אלופה מספק אחת, אין על העוגות שלך הן עשויות בקפידה ומוריי גלם איכותיים. מי שמכיר אותך יודע שאינך מסתפקת בחומריי    גלם פשוטים ומי שלא מכיר אותך זה הזמן להזמין מלירון מבטיחה שלא תתאכזבו .',
            name: 'אור '
        },
        {
            recommendation: 'אלופה מספק אחת, אין על העוגות שלך הן עשויות בקפידה ומוריי גלם איכותיים. מי שמכיר אותך יודע שאינך מסתפקת בחומריי    גלם פשוטים ומי שלא מכיר אותך זה הזמן להזמין מלירון מבטיחה שלא תתאכזבו .',
            name: 'אור '
        },
        {
            recommendation: 'אלופה מספק אחת, אין על העוגות שלך הן עשויות בקפידה ומוריי גלם איכותיים. מי שמכיר אותך יודע שאינך מסתפקת בחומריי    גלם פשוטים ומי שלא מכיר אותך זה הזמן להזמין מלירון מבטיחה שלא תתאכזבו .',
            name: 'אור '
        },
        {
            recommendation: 'אלופה מספק אחת, אין על העוגות שלך הן עשויות בקפידה ומוריי גלם איכותיים. מי שמכיר אותך יודע שאינך מסתפקת בחומריי    גלם פשוטים ומי שלא מכיר אותך זה הזמן להזמין מלירון מבטיחה שלא תתאכזבו .',
            name: 'אור '
        },
        {
            recommendation: 'אלופה מספק אחת, אין על העוגות שלך הן עשויות בקפידה ומוריי גלם איכותיים. מי שמכיר אותך יודע שאינך מסתפקת בחומריי גלם פשוטים ומי שלא מכיר אותך זה הזמן להזמין מLiron Gorzat מבטיחה שלא תתאכזבו',
            name: 'XXX2'
        },
        {
            recommendation: 'review1',
            name: 'XXX3'
        },
        {
            recommendation: 'review1',
            name: 'XXX4'
        },
    ]

    return (
        <div className="costumer-recommendation">
            <Carousel responsive={responsive}>
                {reviews.map((review, index) => {
                    return <div className="costumer">
                        <p>{review.recommendation}</p>
                        <h2 className="costumer-name">{review.name}</h2>
                    </div>
                })}
                {/* <div className="costumer">
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
                </div> */}
            </Carousel>
        </div>
    )
}
