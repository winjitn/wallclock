import React from "react";

import "./Clock.css";

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.min = React.createRef();
    this.hour = React.createRef();
    this.rmin = this.props.rmin;
    this.rhour = this.props.rhour;
  }

  componentDidMount() {
    this.min.current.style.transform = `translate(50%) rotate(${this.rmin}deg)`;
    this.hour.current.style.transform = `translate(50%, -100%) rotate(${this.rhour}deg)`;
  }
  render() {
    return (
      <div className="clock">
        <div className="clock-inner">
          <div className="pin"></div>
          <div className="minute-hand" rmin={this.rmin} ref={this.min}></div>
          <div className="hour-hand" rhour={this.rhour} ref={this.hour}></div>
        </div>
      </div>
    );
  }
}

export default Clock;
