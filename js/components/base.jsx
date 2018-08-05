import React from 'react';
import {Heading} from './heading.jsx';
import {Offers} from './offers.jsx'

class Base extends React.Component {

    render() {
        return (
            <div>
                <Heading/>
                <Offers/>
            </div>
        )
    }
}

export {Base}
