import aboutimg from './assets/mountain.jpg'
import './About.css'

export default () => 
{
    return ( 
        <div className="about">

            <div className="about-img">
                <img src={aboutimg} className="mountain" />
            </div>

            <div className="about-content">
                <p>
                    Viage para lugares incríveis, conheça novas culturas e tenha experiências novas. Contrate nossos serviços.
                </p>
            </div>

    </div>
    );
}