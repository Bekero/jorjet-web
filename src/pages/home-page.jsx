import { MainBgc } from "../cmps/main-bgc";
import { MyStoryShort } from "../cmps/my-story-short";
import { BgcImg2 } from "../cmps/bgc-img-2";
import { RecipeProduct } from "../cmps/recipe-product";
import { BgcImg3 } from "../cmps/bgc-img-3";
import { useEffect } from "react";
import { CostumerRecommendation } from "../cmps/costumer-recommendation";
import { useDispatch, useSelector } from "react-redux";
import { loadRecipes } from '../store/actions/recipe.action'


export function HomePage() {

    const { recipes } = useSelector(state => state.recipeModule)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadRecipes())
    }, [])

    useEffect(() => {
    }, [recipes])

    return (
        <div id="xxxx" className="home-page-container">
            <MainBgc />
            <MyStoryShort />
            <BgcImg2 />
            <RecipeProduct />
            <BgcImg3 />
            <CostumerRecommendation />
            {/* <Contact /> */}
        </div>
    )
}
