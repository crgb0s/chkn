import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out this really nice chicken</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                    <CardItem 
                        src="../../public/images/chicken-1.jpg"
                        text="Try the legs, they're crispy!"
                        label="Yum"
                        path="services"
                        />
                        <CardItem 
                        src="../../public/images/chicken-2.jpeg"
                        text="Bold new flavors from Seoul, Korea"
                        label="I'm Hungry"
                        path="services"
                        />
                        <CardItem 
                        src="../../public/images/chicken-3.jpeg"
                        text="Our chicken fajitas are loved by young and old"
                        label="So delicious"
                        path="services"
                        />

                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards
