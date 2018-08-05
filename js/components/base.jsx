import React from 'react';
import {Offers} from './offers.jsx'

class Base extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sort: ''
        }
    }
    sortAscending = () => {
        this.setState ({
            sort: 'asc'
        })
    }

    sortDescending= () => {
        this.setState ({
            sort: 'desc'
        })
    }

    render() {
        return (
            <div>
                <div className="container heading">
                    <div className="col-6">
                        <h3 className="heading-title">GORĄCE OFERTY</h3>
                    </div>
                    <div className="col-6">
                        <div className="heading-sorting">
                            <span className="sorting-title">SORTUJ:</span>
                            <div className="sorting-price">
                                CENA
                                <i className="sorting-up fas fa-caret-up" onClick={this.sortAscending}></i>
                                <i className="sorting-down fas fa-caret-down" onClick={this.sortDescending}></i>
                            </div>
                        </div>
                    </div>
                </div>
                <Offers
                    sort={this.state.sort}
                />
            </div>
        )
    }
}

export {Base}
