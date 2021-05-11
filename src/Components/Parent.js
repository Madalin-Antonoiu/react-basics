import React from "react"
import Child from "./Child"

class Parent extends React.Component {
    state = {value1: '', value2: ''};

    handleChange = (value, type) => {
        type === "first" ? this.setState({value1: value}) : this.setState({value2: value});

        if (value === this.state.value2) {
            console.log("YAY, equal")
        }

    }

    render() {
        const value1 = this.state.value1;
        const value2 = this.state.value2;
        const onChange = this.handleChange;

        return <>
            <Child
                type="first"
                value={value1}
                onChange={onChange} />

            <Child
                type="second"
                value={value2}
                onChange={onChange} />
        </>
    }
}

export default Parent