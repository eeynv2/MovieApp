import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { CardProps } from "./components/Card";
import { Route, Routes } from "react-router-dom";
import AddMovie from "./components/AddMovie";

function App() {

  const [movies, setMovies] = useState<CardProps[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<CardProps[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [topRatedMovies, setTopRatedMovies] = useState<CardProps[]>([]);

  const handleSearchChange = (event: any) => {
    const query = event.target.value;
    setSearchQuery(query);
    filterMovies(query);
  }

  useEffect(() => {
    let sortedMovies = [...movies];
    sortedMovies.sort((a, b) => b.rating - a.rating);
    setTopRatedMovies(sortedMovies);
  }, [movies]);

  const fetchMovies = () => {
    fetch("http://localhost:3000/movies")
      .then(response => response.json())
      .then(json => { setMovies(json); setFilteredMovies(json) })
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  const filterMovies = (query: string) => {
    if (!query) {
      setFilteredMovies(movies);
      return;
    }
    const filtered = movies.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()));
    setFilteredMovies(filtered);
  }


  return (
    <div className="App ">
      <div className="container ">
        <Navbar name="Hello" searchQuery={searchQuery} handleSearchChange={handleSearchChange}></Navbar>
        <Routes>
          <Route path="/AddMovie" element={<AddMovie onMovieAdded={fetchMovies} ></AddMovie>}></Route>
          <Route path="/" element={
            <>
              <div className="container">
                <div className="row">

                  {filteredMovies.map((movie, index) => (
                    <Card
                      key={index}
                      type={movie.type}
                      title={movie.title}
                      imgUrl={movie.imgUrl}
                      genre={movie.genre}
                      rating={movie.rating}
                      ageRating={movie.ageRating}
                    ></Card>
                  ))}
                </div>
              </div>

              <div className="container">
                <div className="row">
                  {topRatedMovies.map((movie, index) => (
                    <Card
                      key={index}
                      type={movie.type}
                      title={movie.title}
                      imgUrl={movie.imgUrl}
                      genre={movie.genre}
                      rating={movie.rating}
                      ageRating={movie.ageRating}
                    ></Card>
                  ))}
                </div>
              </div>
            </>
          }>
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
