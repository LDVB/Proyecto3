import './MaterialCard.css'
import { Link } from 'react-router-dom'

const MaterialCard = () => {

    return (

        <ul class="cards">
            <li>
                <Link to="/eventos/listado" class="card">
                    <img src="https://galiapuerto.es/wp-content/uploads/2019/04/20190410-ImportanciaNetworkingEnCoworking.jpg" class="card__image" alt="Eventos" />
                    <div class="card__overlay">
                        <div class="card__header">
                            <div class="card__header-text">
                                <h3 class="card__title">NETWORKING</h3>
                            </div>
                        </div>
                        <p class="card__description">Amplia tu red de contactos profesionales. Así, podrás generar oportunidades de negocio y/o empleo.</p>
                    </div>
                </Link>
            </li>
            <li>
                <Link to="/material" class="card">
                    <img src="https://www.esri.ie/system/files/styles/traditional_television/private/media/images/2018-12/18%20December%202018%20Hero%20image%20for%20B%20E.jpg?h=ce5f084e&itok=H3eMa6qE" class="card__image" alt="Eventos" />
                    <div class="card__overlay">
                        <div class="card__header">
                            <div class="card__header-text">
                                <h3 class="card__title">MATERIAL</h3>
                            </div>
                        </div>
                        <p class="card__description">La formación es básica a la hora de emprender. No puedes dejar de lado aquellos libros y manuales que te pueden ayudar para comenzar tu negocio.</p>
                    </div>
                </Link>
            </li>
        </ul>
    )


}

export default MaterialCard