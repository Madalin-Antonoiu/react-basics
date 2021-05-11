import React from "react"

class Child extends React.Component {
    handleChange = (e) => this.props.onChange(e.target.value, this.props.type);

    render() {
        const value = this.props.value;
        const onChange = this.handleChange;

        return <>
            <input value={value} onChange={onChange} />
            <button onClick={() => console.log(this.props)}>Debug</button>
        </>
    }
}

export default Child;