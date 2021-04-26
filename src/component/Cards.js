import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import waterfall from '../assets/images/img-9.jpg';
import island from '../assets/images/img-2.jpg';
import desert from '../assets/images/img-8.jpg';
import pitch from '../assets/images/img-4.jpg';
import ocean from '../assets/images/img-3.jpg';

const Cards = () => (
    <div className="cards">
        <h1>Check out these EPIC Destination!</h1>
        <div className="cards__container">
            <div className="cards__wraper">
                <ul className="cards__items">
                    <CardItem
                        src={waterfall}
                        text="Explore the hidden waterfall deep inside the Amazon Jungle"
                        label="Adventure"
                        path="/services"
                    />
                    <CardItem
                        src={island}
                        text="Travel through the Island of Bali in a Private Cruise"
                        label="Luxury"
                        path="/services"
                    />
                </ul>
                <ul className="cards__items">
                    <CardItem
                        src={ocean}
                        text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
                        label="Mystery"
                        path="/services"
                    />
                    <CardItem
                        src={pitch}
                        text="Experience Football on Top of the Himilayan Mountains"
                        label="Adventure"
                        path="/products"
                    />
                    <CardItem
                        src={desert}
                        text="Ride through the Sahara Desert on a guided camel tour"
                        label="Adrenaline"
                        path="/sign-up"
                    />
                </ul>
            </div>
        </div>
    </div>
);

export default Cards;
