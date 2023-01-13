
import LironsImage from '../assets/imgs/lironron.png'
export function MyStoryShort() {

    return (
        <div className="my-story-short">
            <div className="img-container" >
                <img src={LironsImage} alt="" />
            </div>
            <div className="story-container">
                <p className="my-story-title"><span>הסיפור שלי</span></p>
                <p className="about-me">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus nam dolorem officia saepe asperiores modi. Deserunt libero est magnam similique fugiat? Quas corporis aspernatur, fugit quidem voluptas quos. Vel consectetur optio cupiditate qui recusandae non nisi repudiandae maiores aut minima reiciendis quasi officiis, dolorum, tempora nesciunt aliquam Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus nam dolorem officia saepe asperiores modi. Deserunt libero est magnam similique fugiat? Quas corporis aspernatur, fugit quidem voluptas quos. Vel consectetur optio cupiditate qui recusandae non nisi repudiandae maiores aut minima reiciendis quasi officiis, dolorum, tempora nesciunt aliquam ratione nostrum, alias dolores beatae molestiae? Ex, eum.</p>
                <p className="read-more"><span>Read more Arrow</span></p>
            </div>
        </div >
    )
}