import React from "react";
import { Link } from "react-router-dom";
import './SellForm.css'

export default class MainPage extends React.Component {
  render() {
    return (
      <div>
        <Link to="sell/"><button className="input-button">I want to sell</button></Link>
        <Link to="posts/"><button className="input-button">I want to buy</button></Link>
      </div>
    );
  }
}
