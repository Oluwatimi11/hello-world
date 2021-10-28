import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        const {name, mentorName} = this.props
        // const {state1, state2} = this.state
        return 
        (
        <h1>Welcome {name}, your teacher is {mentorName}</h1>
        )
    }
}

export default Welcome