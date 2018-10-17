import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {DayPilotScheduler} from "daypilot-pro-react";

class Alarmcard extends Component {
    render() {
        return (
          <div>
  <DayPilotScheduler
      startDate={"2018-06-01"}
      days={30}
      scale={"Day"}
      timeHeaders={ [{groupBy: "Month"}, {groupBy: "Day", format: "d"}] }
      resources={[
        { name: "Resource 1", id: "R1"},
        { name: "Resource 2", id: "R2"},
        { name: "Resource 3", id: "R3"},
      ]}
  />
</div>
        );
    }
}

export default Alarmcard;
