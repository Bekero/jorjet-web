
import { useEffect, useState } from "react";
import products from '../data/products.json'

export function ConfectioneryCases() {

    const [filterValue, setFilterValue] = useState(null)

    useEffect(() => {
        console.log('filterValue :', filterValue)
    }, [filterValue])

    const imgClicked = () => {

    }

    return (
        <div className="">
            {/* <ul className="">
                <li onClick={(ev) => setFilterValue('designed-cakes')} value="designed-cakes" >עוגות מעוצבות</li>
                <li onClick={(ev) => setFilterValue('showcase-cakes')} value="showcase-cakes" >עוגות ראווה</li>
                <li onClick={(ev) => setFilterValue('mousse-cakes')} value="mousse-cakes" >עוגות מוס</li>
                <li onClick={(ev) => setFilterValue('desserts')} value="desserts" >קינוחים</li>
            </ul> */}
        </div>
    )
}
