
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

        <div className="container">
            <div className="row">
                <div className="card form-card">
                    <form onSubmit={handleSubmit} className="bg-dark">
                        <div className="mb-3">
                            <label className="form-label" htmlFor="title">
                                Movie Title
                            </label>

                            <input
                                className="form-control mb-3 text-black"
                                placeholder="Movie Name"
                                type="text"
                                name="title"
                                id="title"
                                aria-describedby="titleEntry"
                                value={formData.title}
                                onChange={handleChange}
                            ></input>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">
                                Movie Rating
                            </span>
                            <input
                                className="input-group mb-3 text-black"
                                placeholder="Movie Rating"
                                type="text"
                                name="rating"
                                id="rating"
                                value={formData.rating}
                                onChange={handleChange}
                            ></input>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">
                                Movie Genre
                            </span>
                            <input
                                className="input-group mb-3 text-black"
                                placeholder="Movie Genre"
                                type="text"
                                name="genre"
                                id="genre"
                                value={formData.genre}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">
                                Movie Url
                            </span>
                            <input
                                className="input-group mb-3 text-black"
                                placeholder="Movie img url"
                                type="text"
                                name="imgUrl"
                                id="imgUrl"
                                value={formData.imgUrl}
                                onChange={handleChange}
                            />
                        </div>

                        <button className="btn btn-primary" type="submit">
                            Add
                        </button>
                    </form>
                </div>
            </div>

        </div>

    )
}


export default AddMovie;



