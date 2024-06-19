
import React from "react";
import "./AddMovie.css";
import { useState, useEffect } from "react";
import { CardProps } from "./Card";

function AddMovie({ onMovieAdded }: any) {
    const cardData = {
        title: "",
        rating: 0,
        genre: "",
        imgUrl: "",
        ageRating: "",
        type: ""
    };

    const [formData, setFormData] = useState<CardProps>(cardData);
    const [maxID, setMaxID] = useState(0);

    const fetchMovies = () => {
        fetch("http://localhost:3000/movies")
            .then((response) => response.json())
            .then((json) => {
                const maxID = json.length > 0 ? Math.max(...json.map((movie: any) => movie.id)) : 0;
                setMaxID(maxID);

            })
            .catch((error) => console.error(error));
    }

    useEffect(() => {
        fetchMovies();
    }, []);

    const saveMovie = () => {
        const newID = maxID + 1;
        fetch("http://localhost:3000/movies", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: formData.title,
                rating: formData.rating,
                imgUrl: formData.imgUrl,
                genre: formData.genre,
                type: formData.type,
                id: newID,
            }),
        })
            .then((res) => res.json())
            .then(() => {
                onMovieAdded();
                setFormData(cardData);
                setMaxID(newID);
            })
            .catch((err) => console.log("error"));
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        saveMovie();
        setFormData(cardData);
    };

    const handleChange = (event: any) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };
    return (
        <div className="container w-50 mt-5">
            <div className="row justify-content-center">
                <div className="card form-card p-4 shadow-lg bg-light">
                    <form onSubmit={handleSubmit}>
                        <h2 className="text-center mb-4">Add a Movie</h2>
                        <div className="row">
                            <div className="col-md-6 mb-3 text-start">
                                <label className="form-label" htmlFor="title">
                                    Movie Title
                                </label>
                                <input
                                    className="form-control"
                                    placeholder="Movie Name"
                                    type="text"
                                    name="title"
                                    id="title"
                                    aria-describedby="titleEntry"
                                    value={formData.title}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-6 mb-3 text-start">
                                <label className="form-label" htmlFor="rating">
                                    Movie Rating
                                </label>
                                <input
                                    className="form-control"
                                    placeholder="Movie Rating"
                                    type="text"
                                    name="rating"
                                    id="rating"
                                    value={formData.rating}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3 text-start">
                                <label className="form-label" htmlFor="genre">
                                    Movie Genre
                                </label>
                                <input
                                    className="form-control"
                                    placeholder="Movie Genre"
                                    type="text"
                                    name="genre"
                                    id="genre"
                                    value={formData.genre}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-6 mb-3 text-start">
                                <label className="form-label" htmlFor="imgUrl">
                                    Movie URL
                                </label>
                                <input
                                    className="form-control"
                                    placeholder="Movie img URL"
                                    type="text"
                                    name="imgUrl"
                                    id="imgUrl"
                                    value={formData.imgUrl}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <button className="btn btn-primary w-100" type="submit">
                            Add Movie
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}


export default AddMovie;



