import { useEffect, useState } from "react"
import { Cases } from "../cmps/cases"
import { Confectionery } from "../cmps/confectionery"

export function Collection() {

    const [wantedValue, setWantedValue] = useState(null)

    return (
        <div className="collection-container">
            <div className="radio-btns">
                <ul>
                    {/* <li className={wantedValue === 'all' ? 'highlight' : ''} onClick={() => setWantedValue('all')} value="all">הכל</li> */}
                    <li className={wantedValue === 'confectionery' ? 'highlight' : ''} onClick={() => setWantedValue('confectionery')} value="confectionery">קונדיטוריה</li>
                    <li className={wantedValue === 'cases' ? 'highlight' : ''} onClick={() => setWantedValue('cases')} value="cases">מארזים</li>
                </ul>
            </div>
            {wantedValue === 'confectionery' && <Confectionery /> }
            {wantedValue === 'cases' && <Cases /> }
        </div>
    )
}