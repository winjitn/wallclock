import React from "react";
import Clock from "./Clock";

import "./Clock.css";

class App extends React.Component {
  //hour hand first
  position = [
    [
      [90, 180],
      [270, 90],
      [270, 90],
      [270, 180],
      [360, 180],
      [90, 180],
      [270, 180],
      [360, 180],
      [360, 180],
      [360, 180],
      [360, 180],
      [360, 180],
      [360, 180],
      [360, 180],
      [360, 180],
      [360, 180],
      [360, 180],
      [90, 360],
      [360, 270],
      [360, 180],
      [360, 90],
      [270, 90],
      [270, 90],
      [270, 360]
    ],
    [
      [],
      [90, 180],
      [270, 90],
      [270, 180],
      [],
      [360, 90],
      [270, 180],
      [360, 180],
      [],
      [],
      [360, 180],
      [360, 180],
      [],
      [],
      [360, 180],
      [360, 180],
      [],
      [],
      [360, 180],
      [360, 180],
      [],
      [],
      [360, 90],
      [360, 270]
    ],
    [
      [90, 180],
      [270, 90],
      [270, 90],
      [270, 180],
      [360, 90],
      [270, 90],
      [270, 180],
      [360, 180],
      [90, 180],
      [90, 270],
      [360, 270],
      [360, 180],
      [360, 180],
      [180, 90],
      [90, 270],
      [360, 270],
      [360, 180],
      [90, 360],
      [270, 90],
      [270, 180],
      [360, 90],
      [270, 90],
      [270, 90],
      [270, 360]
    ],
    [
      [180, 90],
      [270, 90],
      [270, 90],
      [270, 180],
      [90, 360],
      [90, 270],
      [180, 270],
      [360, 180],
      [180, 90],
      [270, 90],
      [270, 360],
      [180, 360],
      [90, 360],
      [270, 90],
      [270, 180],
      [360, 180],
      [180, 90],
      [270, 90],
      [360, 270],
      [360, 180],
      [90, 360],
      [90, 270],
      [90, 270],
      [360, 270]
    ],
    [
      [180, 90],
      [270, 180],
      [180, 90],
      [270, 180],
      [180, 360],
      [180, 360],
      [180, 360],
      [180, 360],
      [180, 360],
      [90, 360],
      [360, 270],
      [360, 180],
      [360, 90],
      [90, 270],
      [180, 270],
      [180, 360],
      [],
      [],
      [180, 360],
      [180, 360],
      [],
      [],
      [360, 90],
      [360, 270]
    ],
    [
      [180, 90],
      [270, 90],
      [270, 90],
      [270, 180],
      [180, 360],
      [90, 180],
      [90, 270],
      [360, 270],
      [180, 360],
      [360, 90],
      [270, 90],
      [270, 180],
      [90, 360],
      [90, 270],
      [180, 270],
      [360, 180],
      [180, 90],
      [270, 90],
      [270, 360],
      [360, 180],
      [90, 360],
      [90, 270],
      [90, 270],
      [360, 270]
    ],
    [
      [90, 180],
      [270, 90],
      [270, 90],
      [180, 270],
      [180, 360],
      [90, 180],
      [270, 90],
      [360, 270],
      [360, 180],
      [360, 90],
      [270, 90],
      [180, 270],
      [360, 180],
      [90, 180],
      [180, 270],
      [360, 180],
      [360, 180],
      [360, 90],
      [360, 270],
      [360, 180],
      [360, 90],
      [270, 90],
      [270, 90],
      [360, 270]
    ],
    [
      [90, 180],
      [90, 270],
      [90, 270],
      [270, 180],
      [360, 90],
      [270, 90],
      [270, 180],
      [360, 180],
      [],
      [],
      [360, 180],
      [360, 180],
      [],
      [],
      [360, 180],
      [360, 180],
      [],
      [],
      [360, 180],
      [360, 180],
      [],
      [],
      [360, 90],
      [360, 270]
    ],
    [
      [90, 180],
      [270, 90],
      [270, 90],
      [270, 180],
      [360, 180],
      [90, 180],
      [180, 270],
      [360, 180],
      [180, 360],
      [360, 90],
      [270, 360],
      [360, 180],
      [180, 360],
      [90, 180],
      [180, 270],
      [360, 180],
      [180, 360],
      [90, 360],
      [270, 360],
      [360, 180],
      [90, 360],
      [90, 270],
      [90, 270],
      [360, 270]
    ],
    [
      [90, 180],
      [270, 90],
      [270, 90],
      [270, 180],
      [360, 180],
      [90, 180],
      [180, 270],
      [360, 180],
      [180, 360],
      [360, 90],
      [270, 360],
      [360, 180],
      [360, 90],
      [270, 90],
      [270, 180],
      [180, 360],
      [],
      [],
      [360, 180],
      [360, 180],
      [],
      [],
      [360, 90],
      [360, 270]
    ],
    [
      [],
      [],
      [90, 180],
      [270, 180],
      [90, 360],
      [360, 270],
      [90, 180],
      [180, 270],
      [90, 360],
      [360, 270],
      [],
      []
    ]
  ];
  letters = ["b", "c", "d", "e", "f"];
  mincounter = 20 * 60;
  hourcounter = 10 * 60;
  assign = { b: 0, c: 0, d: 0, e: 0, f: 10 };
  old = { b: 10, c: 10, d: 10, e: 10 };

  componentDidMount() {
    const obj = this;
    setTimeout(function() {
      obj.setCurrent();
      obj.setTime();
    }, 500);
    setInterval(function() {
      obj.setCurrent();
    }, 60000);

    setInterval(function() {
      obj.setTime();
    }, 60000);
  }

  setTime() {
    const array = document.querySelectorAll(".a");
    array.forEach(clock => {
      const minHand = clock.firstChild.firstChild.children[1];
      const hourHand = clock.firstChild.firstChild.children[2];
      var amount = Number(minHand.getAttribute("rmin")) + this.mincounter;
      minHand.style.transform = `translate(50%) rotate(${amount}deg)`;
      minHand.setAttribute("rmin", amount);

      amount = Number(hourHand.getAttribute("rhour")) + this.hourcounter;
      hourHand.style.transform = `translate(50%, -100%) rotate(${amount}deg)`;
      hourHand.setAttribute("rhour", amount);
    });
  }

  helper(hand, type, posi) {
    var amount = 0;
    var movement = 0;

    var current = Number(hand.getAttribute(`${type}`));
    if (posi.length == 0) {
      amount = (type == "rmin" ? 20 : 10) * 60 + current;
      hand.style.transition = "60s linear";
    } else {
      const pos = posi[type == "rmin" ? 0 : 1];
      if (current % 360 > pos) {
        movement = pos + 360 - (current % 360);
        amount = movement + current;
      } else {
        movement = pos - (current % 360);
        amount = current + movement;
      }
      hand.style.transition = `${movement / 40}s linear`;
    }
    hand.style.transform = `${
      type == "rmin" ? "translate(50%)" : "translate(50%, -100%)"
    } rotate(${amount}deg)`;
    hand.setAttribute(`${type}`, amount);
  }

  setCurrent() {
    const time = new Date();
    var hours = (time.getHours() % 12).toString();
    var minutes = time.getMinutes().toString();
    if (hours.length == 1) hours = "0" + hours;
    if (minutes.length == 1) minutes = "0" + minutes;
    this.assign["b"] = Number(hours.substr(0, 1));
    this.assign["c"] = Number(hours.substr(1, 1));
    this.assign["d"] = Number(minutes.substr(0, 1));
    this.assign["e"] = Number(minutes.substr(1, 1));

    for (var x of this.letters) {
      if (this.assign[x] != this.old[x]) {
        const array = document.querySelectorAll(`.${x}`);
        for (var i = 0; i < array.length; i++) {
          const minHand = array[i].firstChild.firstChild.children[1];
          const hourHand = array[i].firstChild.firstChild.children[2];
          const pos = this.position[this.assign[x]][i];
          this.helper(minHand, "rmin", pos);

          this.helper(hourHand, "rhour", pos);
          this.old[x] = this.assign[x];
        }
      }
    }
  }

  renderWall() {
    const height = Math.floor(window.innerHeight / 100);
    const width = Math.floor(window.innerWidth / 100);
    const wallArray = [];
    //control i 1-18
    //control j 2-7
    var letter = "";
    var temp = [];
    for (var j = 0; j < height + 1; j++) {
      for (var i = 0; i < width + 1; i++) {
        letter = "a";
        if (j >= 2 && j <= 7 && i >= 1 && i <= 4) letter = "b";
        if (j >= 2 && j <= 7 && i >= 5 && i <= 8) letter = "c";
        if (j >= 2 && j <= 7 && i >= 9 && i <= 10) letter = "f";
        if (j >= 2 && j <= 7 && i >= 11 && i <= 14) letter = "d";
        if (j >= 2 && j <= 7 && i >= 15 && i <= 18) letter = "e";
        const rmin = Math.floor(Math.random() * 360);
        const rhour = Math.floor(Math.random() * 360);
        temp.push(
          <span className={`${letter}`} key={i + j}>
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
