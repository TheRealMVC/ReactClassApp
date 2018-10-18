import React from 'react';

export default class Clock extends React.Component { //implements the class our app using react
    constructor(props) {
        super(props);
        var date = this.getTimeString();
        this.state = {
            time: date
        }
    }

    getTimeString() {// we dont hold any parameters //get time now
        const date = new Date(Date.now()).toLocaleTimeString();//from getting the local time on our time zone
        return date;// see results
    }

    componentDidMount() {
        const _this = this;
        this.timer = setInterval(function () {
            var date = _this.getTimeString();
            _this.setState({
                time: date
            })
        }, 1000)
    }

    componentWillUnmount() {// refresh rate with an interval that makes sense...by seconds
        clearInterval(this.timer);// removing current and putting in current current
    }

    render() {
        return (
            <div className="main">
                <div className="mainDiv">
                    <h1>React Clock</h1> 
                    <hr className="explanation" /> 
                    <p>{this.state.time}</p>
                </div>
            </div>
        )
    } //hr is a break between h1 and ptag is holding the function
}

//