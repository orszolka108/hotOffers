import React from "react";

class OfferSingle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: this.props.item,
            src: this.props.src,
            srp: this.props.srp,
            discount: this.props.discount,
            hotPrice: this.props.hotPrice,
            status: this.props.status
        }
    }

    render() {
        return (
            <div className= {this.state.status === "sold" ? "offer-box row container sold" : "offer-box row container"}>
                <div className="col-4">
                    <div className="offer-image">
                        <img
                            src={this.state.src}
                            alt=""/>
                    </div>
                    <div className="offer-titles">
                        <h4 className="offer-title"><span className="bold">{this.state.item.title}</span></h4>
                        <h4 className="new-title">NOWY</h4>
                    </div>
                </div>
                <div className="col-8">
                    <div className="offer-info container">
                        <div className="col-7 info">
                            <div className="info-title"><span className="bold"> {this.state.item.params.engine_capacity} {this.state.item.params.fuel_type}</span> {this.state.item.params.transmission} {this.state.item.params.gearbox}| {this.state.item.params.color}
                            </div>
                            <ul className="info-list">
                                <li className="info-list-el">
                                    <span className="left">Wersja:</span>
                                    <span className="right">{this.state.item.params.trim}</span>
                                </li>
                                <li className="info-list-el">
                                    <span className="left">Rok produkcji:</span>
                                    <span className="right">{this.state.item.params.year}</span>
                                </li>
                                <li className="info-list-el">
                                    <span className="left">Rok modelowy:</span>
                                    <span className="right">{this.state.item.params.my}</span>
                                </li>
                                <li className="info-list-el">
                                    <span className="left">Wyposażenie:</span>
                                    <span className="right">{this.state.item.params.option}</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-5">
                            <ul className="info-prices">
                                <li className="info-prices-el">
                                    <span className="prices-title">cena bazowa:</span>
                                    <span className="prices-price">{this.state.srp}</span>
                                </li>
                                <li className="info-prices-el">
                                    <span className="prices-title">rabat:</span>
                                    <span className="prices-price">-{this.state.discount}</span>
                                </li>
                                <li className="info-prices-el special-price">
                                    <span className="prices-title">gorąca cena:</span>
                                    <span className="prices-price">{this.state.hotPrice}</span>
                                </li>
                            </ul>
                            <button className="button">ZAPYTAJ</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



export {OfferSingle}