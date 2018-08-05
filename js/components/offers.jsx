import React from 'react';
import {Model} from './models.jsx';
import {OfferSingle} from './offer.jsx';

class Offers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            models: [],
            offers: []
        }
    }

    componentDidMount() {
        const urlModel = `https://stock.ssangyong.pl/api/getHotModels/`;
        const urlOffer = 'https://stock.ssangyong.pl/api/getHotoffers/';

        fetch(urlModel)
            .then( resp => resp.json() )
            .then( data=> {
                this.setState({
                    models: data
                })
            })
            .catch((error) => console.log(error));


        fetch(urlOffer)
            .then( resp => resp.json() )
            .then( offers=> {
                this.setState({
                    offers: offers
                })
            })
            .catch((error) => console.log(error));
    }
    renderOffers() {
        return this.state.offers.map (function(item) {
            return <OfferSingle key={item.id_pojazdy} item={item}/>
        })
    }

    renderModels() {
        return this.state.models.map (function (item) {
            console.log(item.model)
            return <Model key={item.id} item={item} />
        })
    }

    render() {
        return (
            <div className = "container offers" >
                <div className = "col-3 offers-choice">
                    <div className = "choice">
                        <h3 className = "choice-title" > WYBIERZ MODEL </h3>
                        {this.renderModels()}
                    </div>
                </div>
                <div className="col-9 offers-boxes">
                    {this.renderOffers()}
                </div>
            </div>
        )
    }
}

export {Offers};

