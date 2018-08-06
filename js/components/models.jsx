import React from "react";


class Model extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: props.item,
            isChecked: true,
            checkedItems: []
        }
    }
    componentWillReceiveProps(props) {
        this.setState ({
            item: props.item
        })
    }
    //sending child's state to parent
    toggleChange = () => {
        if(typeof this.props.toggleModel == "function"){
            this.props.toggleModel(this.state.item.model)
        }

    }

    render() {
        return (
            <div className="choice-model">
                <label className="model-name">
                    <input
                        type="checkbox"
                        className="model"
                        value={this.state.item.model}
                        onChange={this.toggleChange}
                    />
                        {this.state.item.model}
                </label>
            </div>
        )
    }
}

export {Model}
