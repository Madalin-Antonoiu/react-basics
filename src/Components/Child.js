import React from "react"

class Child extends React.Component {
    handleChange = (e) => this.props.onChange(e.target.value);

    render() {
        const value = this.props.value;
        const onChange = this.handleChange;

        return <input value={value} onChange={onChange} />
    }
}

export default Child