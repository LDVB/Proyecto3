import './ListCard.css'
import { useNavigate, Link } from 'react-router-dom'

const ListCard = () => {

    return (

        <ul class="cards">
            <li>
                <Link to="/coworking" class="card">
                    <img src="https://cdn-3.expansion.mx/dims4/default/6aa6b7c/2147483647/strip/true/crop/6720x4480+0+0/resize/1200x800!/format/webp/quality/90/?url=https%3A%2F%2Fcdn-3.expansion.mx%2Fc3%2Fd4%2Faaf43ad04980a0e40d372f986845%2Fistock-1163824625.jpg" class="card__image" alt="Eventos" />
                    <div class="card__overlay">
                        <div class="card__header">
                            <div class="card__header-text">
                                <h3 class="card__title">COWORKING</h3>
                            </div>
                        </div>
                        <p class="card__description">Amplia tu red de contactos profesionales. Así, podrás generar oportunidades de negocio y/o empleo.</p>
                    </div>
                </Link>
            </li>
            <li>
                <Link to="/libros" class="card">
                    <img src="https://img.huffingtonpost.com/asset/61e93ab120000034908d7ed0.jpg?cache=VgUdVxTfzZ&ops=scalefit_720_noupscale" class="card__image" alt="Eventos" />
                    <div class="card__overlay">
                        <div class="card__header">
                            <div class="card__header-text">
                                <h3 class="card__title">LIBROS</h3>
                            </div>
                        </div>
                        <p class="card__description">La formación es básica a la hora de emprender. No puedes dejar de lado aquellos libros y manuales que te pueden ayudar para comenzar tu negocio.</p>
                    </div>
                </Link>
            </li>
        </ul>
    )


}

export default ListCard