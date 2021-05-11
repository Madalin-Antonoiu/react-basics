import React from "react"
import Children from "./Children"

class Parent extends React.Component {
    state = {value: ''};

    handleChange = (value) => this.setState({value});

    render() {
        return <>
            <Children
                value={this.state.value}
                onChange={this.handleChange}
            />
        </>
    }
}

export default Parent;