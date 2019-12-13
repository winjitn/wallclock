import React from "react";
import Clock from "./Clock";

import "./Clock.css";

class App extends React.Component {
  mincounter = 6;
  hourcounter = 3;

  componentDidMount() {
    const obj = this;
    setInterval(function() {
      obj.setTime(obj);
    }, 2000);
  }

  setTime(obj) {
    const width = Math.floor(window.innerWidth / 100);
    for (var i = 0; i < width + 1; i++) {
      const array = document.querySelectorAll(`.a${i}`);
      array.forEach(clock => {
        const minHand = clock.firstChild.firstChild.children[1];
        const hourHand = clock.firstChild.firstChild.children[2];
        minHand.style.transform = `translate(50%) rotate(${Number(
          minHand.getAttribute("rmin")
        ) + this.mincounter}deg)`;
        hourHand.style.transform = `translate(50%, -100%) rotate(${Number(
          hourHand.getAttribute("rhour")
        ) + this.hourcounter}deg)`;
      });

      this.mincounter += 6;
      this.hourcounter += 3;
    }
  }
  renderWall() {
    // console.log(this.mincounter);
    const height = Math.floor(window.innerHeight / 100);
    const width = Math.floor(window.innerWidth / 100);
    const wallArray = [];
    var temp = [];
    for (var j = 0; j < height + 1; j++) {
      for (var i = 0; i < width + 1; i++) {
        const rmin = Math.floor(Math.random() * 360);
        const rhour = Math.floor(Math.random() * 360);
        temp.push(
          <span className={`a${i}`} key={i + j}>
            <Clock rmin={rmin} rhour={rhour} />
          </span>
        );
      }
      wallArray.push(<div key={j}>{temp}</div>);
      temp = [];
    }
    return wallArray;
  }
  render() {
    return (
      <div className="body">
        <div className="wall">{this.renderWall()}</div>
      </div>
    );
  }
}
export default App;
