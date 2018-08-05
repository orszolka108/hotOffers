import React from "react";

class Model extends React.Component {
    render() {

    }
}

const Model = ({item}) => (
    <div className="choice-model">
        <label className="model-name">
            <input type="checkbox" className="model" value={item.model}/>
            {item.model}
        </label>
    </div>
)

export {Model}
