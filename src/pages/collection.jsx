import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Cases } from "../cmps/cases"
import { Confectionery } from "../cmps/confectionery"
import PrevPageSvg from '../cmps/svg/prev-page'
export function Collection() {

    const [wantedValue, setWantedValue] = useState('confectionery')
    const navigate = useNavigate();

    const onBack = () => {
        navigate(-1);
      };

    return (
        <div className="collection-container">
            <button onClick={onBack} className='go-back-btn'>
                <PrevPageSvg />
            </button>
            <div className="radio-btns">
                <ul>
                    {/* <li className={wantedValue === 'all' ? 'highlight' : ''} onClick={() => setWantedValue('all')} value="all">הכל</li> */}
                    <li className={wantedValue === 'confectionery' ? 'highlight' : ''} onClick={() => setWantedValue('confectionery')} value="confectionery">קונדיטוריה</li>
                    <li className={wantedValue === 'cases' ? 'highlight' : ''} onClick={() => setWantedValue('cases')} value="cases">מארזים</li>
                </ul>
            </div>
            {wantedValue === 'confectionery' && <Confectionery />}
            {wantedValue === 'cases' && <Cases />}
        </div>
    )
}