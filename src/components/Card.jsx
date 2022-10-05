import React, { Component } from "react";
import { ButtonDetail } from "./Button";
import { ButtonFavorite } from "./Button";
class Card extends Component {
  render() {
    return (
      <div className="flex flex-col justify-center p-4 shadow-lg rounded-lg border">
        <img
          src={`https://image.tmdb.org/t/p/w500${this.props.image}`}
          alt={this.props.title}
        />
        <p className="text-center">{this.props.title}</p>
        <div className="grid grid-cols-2 gap-4 justify-between">
          <ButtonFavorite label={`Favorite`} />
          <ButtonDetail label={`Detail`} />
        </div>
      </div>
    );
  }
}

export default Card;
