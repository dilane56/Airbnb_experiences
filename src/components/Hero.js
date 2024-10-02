import heroimg from '../image/photo-grid.png'
import '../style/Hero.css'
export default function Hero() {
    return (
        <section>

            <img src={heroimg} alt='hero-image'></img>
            <div className='textbloc'>
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>
            </div>

        </section>
    )
}