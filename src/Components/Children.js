import React from "react"

const Children = ({value, onChange}) => {

    const handleChange = e => onChange(e.target.value);

    return <>
        <input
            type="text"
            placeholder="Search..."
            value={value}
            onChange={handleChange}
        />
    </>

}

export default Children