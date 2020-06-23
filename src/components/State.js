import React from 'react'

class State extends React.Component{
    constructor () {
        super()
        this.state={
            answer:'in'
        }
    }

    render() {
        return (
            <div>
                <h2>You are currently logged {this.state.answer} as</h2>
            </div>
        )
    }
}

export default State