import './Footer.css'

export default () => 
{
    return (
        <div className="footer">
            <footer>
                <div className="info">
                    <i className="gg-instagram"></i>
                    <span>@viagens</span>
                </div>

                <div className="info">
                    <i className="gg-phone"></i>
                    <span>+55 (21)9999-9999</span>
                </div>

                <div className="endereco">
                    <p>Rio de Janeiro</p>
                    <p>Copacabana - Rua Macieras dourads N° 69</p>
                </div>
            </footer>
        </div>
    )
}