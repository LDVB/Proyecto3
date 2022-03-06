<<<<<<< HEAD
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
=======

import "./Books.css"
import { useState, Link } from React


const Books = ({ material }) => {

    return (
        <>
            < section class="cards" >
                <article class="card card--2">
                    <div class="card__info-hover">
                        <svg class="card__like"  >
                        </svg>
                        <div class="card__clock-info">
                            <svg class="card__clock">
                            </svg>
                        </div>
                    </div>
                    <div class="card__img"></div>
                    <div class="card__img--hover"></div>

                    <div class="card__info">
                        <span class="card__category"> {material.details} </span>
                        <h3 class="card__title">{material.name}</h3>
                        <span class="card__by" class="card__author" title="author">{material.description}</span>
                    </div>
                </article >
            </section >

        </>
>>>>>>> 92de60675273f1f91fbfa2dccfe9b1f9ad4e83bb

    )

}
export default Books