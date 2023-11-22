import React from "react";
import FormattedDate from "./FormattedDate";


export default function WeatherInfo(props) {
    return (
        <div className="Weatherinfo">

   <h1>{props.data.city}</h1>
        <ul>
            <li>
              <FormattedDate date={props.data.date}  />
            </li>
            <li className="text-capitalization">{props.data.description}</li>
        </ul>
        <div className="row mt-5">
            <div className="col-6">
              <div className="clearfix"></div>
                <div className="float-left"></div>
                <weatherIcon code={props.data.icon} alt={props.data.description} />
            <div className="float-left">
              <span className="temperature">{Math.round(props.data.temperature)}</span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.dataata.humidity}%</li>
            <li>Wind: {props.dataata.wind}km/h</li>
          </ul>
        </div>
        </div>
    );
}