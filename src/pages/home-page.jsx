import { MainBgc } from "../cmps/main-bgc";
import { MyStoryShort } from "../cmps/my-story-short";
import { BgcImg2 } from "../cmps/bgc-img-2";
import { RecipeProduct } from "../cmps/recipe-product";
import { BgcImg3 } from "../cmps/bgc-img-3";
import { Contact } from "../cmps/contact";
import { useEffect } from "react";
import { productService } from "../services/product.service"


export function HomePage() {

    useEffect(() => {
        productService.query()
    }, [])

    return (
        <div className="home-page-container">
            <MainBgc />
            <MyStoryShort />
            <BgcImg2 />
            <RecipeProduct />
            <BgcImg3 />
            <Contact />

        </div>
    )
}
