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
    <div className="container col-md-3 mb-3 py-24 movie-cards horizontal-scrollable">
      
      {props.isTopRated ? (
        <>
          <div className="card action-card bg-dark text-white top-rated-card">
            <div className="rating-number">1</div>
            <img src={props.imgUrl} className="card-img-top" alt="Movie Poster" />
            <div className="card-img-overlay custom">
              <span className="card-text">🎞️{props.genre}</span>
              <span className="card-text rating-text">CBFC: {props.ageRating}</span>
            </div>
          </div>
          <div className="card-title text-white text-start film-caption">{props.title}</div>
          <div className="card-title text-white text-start film-rating">⭐ {props.rating}</div>
        </>
      ) :
        (
          <div className="card action-card">
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
