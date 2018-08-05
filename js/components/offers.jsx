import React from 'react';
import {Model} from './models.jsx';
import {OfferSingle} from './offer.jsx';

class Offers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            models: [],
            offers: [],
            sort: props.sort,
            model: ''
        }
    }
    componentWillReceiveProps(props) {
        console.log(props);
        this.setState ({
            sort: props.sort
        })
        this.callApi(props.sort, this.state.model)
    }
    callApi(sort, model) {
        let options = [];
        if (sort != '') {
            options.push("sort[hot_price]=" + sort)
        }
        if (model != '') {
            options.push("model=" + model)
        }
        console.log(options.join('&'))


        const urlModel = `https://stock.ssangyong.pl/api/getHotModels/`;
        const urlOffer = 'https://stock.ssangyong.pl/api/getHotoffers/';

        fetch(urlModel, {
            method: 'post',
        })
            .then( resp => resp.json() )
            .then( models=> {
                this.setState({
                    models: models
                })
            })
            .catch((error) => console.log(error));

        fetch(urlOffer, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: options.join('&')
        })
            .then( resp => resp.json() )
            .then( offers=> {
                this.setState({
                    offers: offers
                })
            })
            .catch((error) => console.log(error));
    }

    componentDidMount() {
       this.callApi('', '');
    }
    renderOffers() {
        return this.state.offers.map (function(item) {
            //creating src url for photos
            let model = item.params.model.toLowerCase()
            let color = item.params.color.toLowerCase().replace(" ", "_")
            const src = `https://www.ssangyong.pl/konfigurator-images/images/${model}/${item.params.my}/colors/cars/${color}.png`

            //replacing "&nbsp;" into space
            let srp = item.params.price.srp.replace("&nbsp;", " ")
            let discount = item.params.price.discount.replace("&nbsp;", " ")
            let hotPrice = item.params.price.hot_price.replace("&nbsp;", " ")
            return <OfferSingle
                        key={item.id_pojazdy}
                        item={item}
                        src={src}
                        srp={srp}
                        discount={discount}
                        hotPrice={hotPrice}
                        status={item.status}
            />
        })
    }

    renderModels() {
        return this.state.models.map (function (item) {
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

