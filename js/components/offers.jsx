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
            checkedModels: []
        }
    }
    componentWillReceiveProps(props) {
        this.setState ({
            sort: props.sort
        })
        this.callApi(props.sort, this.state.checkedModels)
    }


    //method for fetch API
    callApi(sort, checkedModels) {
        let options = [];
        if (sort === 1) {
            options.push("sort[hot_price]=asc")
        } else if (sort === 2) {
            options.push("sort[hot_price]=desc")
        }
        console.log(options.join('&'))

        if (checkedModels.length !== 0) {
            options.push("model=" + checkedModels.join(','))
        }

        let bodyOptions = options.join('&')
        console.log(bodyOptions)


        const urlModel = 'https://stock.ssangyong.pl/api/getHotModels/';
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
            body: "sort[hot_price]=desc&model=Korando,XLV"
                    //bodyOptions

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
    //method for creating offers accordingly to the API offers
    renderOffers() {
        return this.state.offers.map ((item, index) => {
            //creating src url for img
            let model = item.params.model.toLowerCase()
            let color = item.params.color.toLowerCase().replace(" ", "_")
            const src = `https://www.ssangyong.pl/konfigurator-images/images/${model}/${item.params.my}/colors/cars/${color}.png`

            //replacing "&nbsp;" into space
            let srp = item.params.price.srp.replace("&nbsp;", " ")
            let discount = item.params.price.discount.replace("&nbsp;", " ")
            let hotPrice = item.params.price.hot_price.replace("&nbsp;", " ")
            return <OfferSingle
                        key={index}
                        item={item}
                        src={src}
                        srp={srp}
                        discount={discount}
                        hotPrice={hotPrice}
                        status={item.status}
            />
        })
    }
    //method responsible for pushing checked models into array, which is being placed into state
    toggleModel = (model) => {
        let checkedModels = this.state.checkedModels
        if (checkedModels.includes(model)){
            checkedModels.pop(model)
        } else {
            checkedModels.push(model)
        }
        this.setState ({
            checkedModels: checkedModels
        })
        this.callApi(this.state.sort, this.state.checkedModels)
    }
    //method for creating list of available models
    renderModels() {
        return this.state.models.map ((item, index) => {
            return <Model
                key={index}
                item={item}
                toggleModel={this.toggleModel}
            />
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

