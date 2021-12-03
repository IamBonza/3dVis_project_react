import React from 'react';

class CounterClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            likes: 0,
        }
        this.Inc = this.Inc.bind(this)
        this.Dec = this.Dec.bind(this)
        this.Clean = this.Clean.bind(this)
    }

    Inc() {
        this.setState({likes: this.state.likes + 1})
    }

    Dec() {
        this.setState({likes: this.state.likes - 1})
    }

    Clean() {
        this.setState({likes: this.state.likes = 0})
    }


    render() {
        return (
            <div>
                <h1 onClick={this.Clean}>{this.state.likes}</h1>
                <button onClick={this.Inc}>Inc</button>
                <button onClick={this.Dec}>Dec</button>
            </div>
        )
    }
}

export default CounterClass;