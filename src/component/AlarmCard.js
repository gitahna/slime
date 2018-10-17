import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
var   me = require( '../dynamoSample/read.js');
//import {DayPilotScheduler} from "daypilot-pro-react";

let data = me.read();


class Alarmcard extends Component {
    render() {
        return (
          <div>asdasd
            {data}
          </div>
        );
    }
}

export default Alarmcard;
