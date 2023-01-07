import { useNavigate } from "react-router-dom";
import PrevPageSvg from '../cmps/svg/prev-page'

export function GoBack() {

    const navigate = useNavigate();

    const onBack = () => {
        navigate(-1);
    };

    return (
        <div className="go-back-container">
            <button onClick={onBack} className='go-back-btn'>
                <PrevPageSvg />
            </button>
        </div>
    )
}