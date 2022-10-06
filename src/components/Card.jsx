import React, { Component } from "react";
import { ButtonDetail } from "./Button";
import { ButtonFavorite } from "./Button";
class Card extends Component {
  render() {
    return (
      <div className="flex flex-col  justify-center p-4 shadow-lg rounded-lg border">
        <img
          className="w-full h-full"
          src={`https://image.tmdb.org/t/p/w500${this.props.image}`}
          alt={this.props.title}
        />
        <p className="text-center p-2">{this.props.title}</p>
        <div className="grid grid-cols-2 gap-4 justify-between">
          <div onClick={this.props.onNavigate}>
            <ButtonDetail label={`Details`} />
          </div>
          <div onClick={this.props.addFavorite}>
            <ButtonFavorite label={`Favorite`} />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
