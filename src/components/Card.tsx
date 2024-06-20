import "./Card.css";

export interface CardProps {
  title: string;
  rating: number;
  genre: string;
  imgUrl: string;
  ageRating: string;
  type: string;
  isTopRated?: boolean;
}

function Card(props: CardProps) {
  return (
    <div className="container col-md-3 mb-3 py-24 movie-cards">
      {props.isTopRated ? (
        <div className="card top-rated-card border-black">
          <img
            src={props.imgUrl}
            className="card-img-top"
            alt="Movie Poster"
          />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>

            <div className="card-info">
              <span className="rating"><span className="star-rating-emoji pe-1">⭐</span>{props.rating}</span>
              <span className="genre">{props.genre}</span>
            </div>
          </div>
        </div>
      ) :
        (
          <div className="card action-card border-black">
            <img
              src={props.imgUrl}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body ">
              <h5 className="card-title">{props.title}</h5>

              <div className="card-info">
                <span className="rating"><span className="star-rating-emoji pe-1">⭐</span>{props.rating} | </span>
                <span className="genre">{props.genre}</span>
              </div>
            </div>
          </div>
        )}
    </div>
  );
}

export default Card;
