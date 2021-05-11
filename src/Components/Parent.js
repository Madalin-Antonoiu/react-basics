import React from "react"
import Child from "./Child"

class Parent extends React.Component {
    state = {value: ''};

    handleChange = (value) => this.setState({value});

    render() {
        const value = this.state.value;
        const onChange = this.handleChange;

        return <>
            <Child
                value={value}
                onChange={onChange} />

            <Child
                value={value}
                onChange={onChange} />

        </>
    }
}

export default Parent