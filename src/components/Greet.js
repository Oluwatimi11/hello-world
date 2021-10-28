import React from 'react'

const Greet = props => {
    const {name, mentorName} = props
    return (
        <div>
            <h1>
                Hello {name}, your mentor is {mentorName} 
            </h1>
            {/* {props.children} */}
        </div>
    )
}

export default Greet