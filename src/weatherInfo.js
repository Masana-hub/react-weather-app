import React from "react";
import formattedDate from "./formattedDate";

export default function weatherInfo(props) {
    return (
        <div className="Weatherinfo">

   <h1>{props.data.city}</h1>
        <ul>
            <li>
              <formattedDate date={props.dataata.date}  />
            </li>
            <li className="text-capitalization">{props.data.description}</li>
        </ul>
        <div className="row mt-5">
            <div className="col-6">
              <div className="clearfix"></div>
                <img 
                  src={props.data.iconUrl}
                  alt={props.data.description}
                  className="float-left"
                />
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