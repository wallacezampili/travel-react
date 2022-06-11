import './Display.css'
import displayimg from './assets/city.png'

export default () =>
{
    return(
        <div className="display">
            <div className="display-img">
                <img src={displayimg} className="display-image" />
            </div>

        <div className="display-content">
            <h1>Conheça lugares que você nunca imaginou por um preço acessivel.</h1>
            <button className="display-btn">Clique Aqui</button>    
        </div>
        </div>
    )
}