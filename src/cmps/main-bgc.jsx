import Type from "../services/Type";
import nutDonut from '../assets/imgs/donut-nut.jpg'

export function MainBgc() {

    return (
            <div
                className="bgc-img"
                style={{ backgroundImage: `url(${nutDonut})` }}>
                <div className="darker-the-photo">
                    <div>
                        <p>Jorjet <span>Patticerie</span></p>
                    </div>
                    <div className="products-writer"
                        style={{ padding: 50, textAlign: "left" }}>
                        <Type />
                    </div>
                </div>

            </div>
    )
}