import React, { PureComponent } from 'react';

class CounterRCC extends PureComponent{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            themes: 'light',
        }
        console.log('constructor');
        console.log(this);
    }

    plus(){
        this.setState({
            count: this.state.count + 1
        });
    }
    render(){
        return (
            <>
                <h2>Counter</h2>
                <div>{this.state.count}</div>
                <button onClick={this.plus.bind(this)}>Plus</button>
            </>
        )
    }
}

export default CounterRCC;