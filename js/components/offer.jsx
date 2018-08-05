import React from "react";

const OfferSingle = ({item, src, srp, discount, hotPrice}) => (
    <div className="offer-box row container">
        <div className="col-4">
            <div className="offer-image">
                <img
                    src={src}
                    alt=""/>
            </div>
            <div className="offer-titles">
                <h4 className="offer-title"><span className="bold">{item.title}</span></h4>
                <h4 className="new-title">NOWY</h4>
            </div>
        </div>
        <div className="col-8">
            <div className="offer-info container">
                <div className="col-7 info">
                    <div className="info-title"><span className="bold"> {item.params.engine_capacity} {item.params.fuel_type}</span> {item.params.transmission} {item.params.gearbox}| {item.params.color}
                    </div>
                    <ul className="info-list">
                        <li className="info-list-el">
                            <span className="left">Wersja:</span>
                            <span className="right">{item.params.trim}</span>
                        </li>
                        <li className="info-list-el">
                            <span className="left">Rok produkcji:</span>
                            <span className="right">{item.params.year}</span>
                        </li>
                        <li className="info-list-el">
                            <span className="left">Rok modelowy:</span>
                            <span className="right">{item.params.my}</span>
                        </li>
                        <li className="info-list-el">
                            <span className="left">Wyposażenie:</span>
                            <span className="right">{item.params.option}</span>
                        </li>
                    </ul>
                </div>
                <div className="col-5">
                    <ul className="info-prices">
                        <li className="info-prices-el">
                            <span className="prices-title">cena bazowa:</span>
                            <span className="prices-price">{srp}</span>
                        </li>
                        <li className="info-prices-el">
                            <span className="prices-title">rabat:</span>
                            <span className="prices-price">-{discount}</span>
                        </li>
                        <li className="info-prices-el special-price">
                            <span className="prices-title">gorąca cena:</span>
                            <span className="prices-price">{hotPrice}</span>
                        </li>
                    </ul>
                    <button className="button">ZAPYTAJ</button>
                </div>
            </div>
        </div>
    </div>
)


export {OfferSingle}