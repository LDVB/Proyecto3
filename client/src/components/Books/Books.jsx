import "./Books.css"



const Books = ({ image, name, description, details }) => {

    return (
        <>
            <div class="cols">
                <div class="col" ontouchstart="this.classList.toggle('hover');">
                    <div class="container">
                        <div class="front" src={image}>
                            <div class="inner">
                                <p>{name}</p>
                                <span>{details}</span>
                            </div>
                        </div>
                        <div class="back">
                            <div class="inner">
                                <p>{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </>

    )

}
export default Books