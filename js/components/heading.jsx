import React from 'react';

class Heading extends React.Component {
    render() {
        return (
            <div className="container heading">
                <div className="col-6">
                    <h3 className="heading-title">GORĄCE OFERTY</h3>
                </div>
                <div className="col-6">
                    <div className="heading-sorting">
                        <span className="sorting-title">SORTUJ:</span>
                        <div className="sorting-price">
                            CENA
                            <i className="sorting-up fas fa-caret-up"></i>
                            <i className="sorting-down fas fa-caret-down"></i>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export {Heading}
