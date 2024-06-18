import React from "react";
import "./Card.css";

export interface CardProps {
  title: string;
  rating: number;
  genre: string;
  imgUrl: string;
  ageRating: string;
  type: string;
}

function Card(props: CardProps) {


  return (
    <div className="col-md-3 mb-3">
      <div className="card action-card">
        <img
          src={props.imgUrl}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <div className="card-info">
            <span className="rating">⭐ {props.rating} | </span>
            <span className="genre">{props.genre}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
