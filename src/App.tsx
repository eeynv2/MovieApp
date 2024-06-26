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
              <br></br>
              <div className="container top-rated-container pt-24">
                <div className="row">
                  <h5 className="top-rated text-white text-start font-weight-bold pb-3 pt-3">Top Rated</h5>
                  <div className="top-rated-cards">
                    {topRatedMovies.map((movie, index) => (
                      <Card
                        key={index}
                        type={movie.type}
                        title={movie.title}
                        imgUrl={movie.imgUrl}
                        genre={movie.genre}
                        rating={movie.rating}
                        ageRating={movie.ageRating}
                        isTopRated={true}
                      ></Card>
                    ))}
                  </div>
                </div>
              </div>

              <div className="container all-movies">
                <div className="row">
                  <h5 className="top-rated text-white text-start font-weight-bold pb-3 pt-5">All Movies</h5>
                  {filteredMovies.map((movie, index) => (
                    <Card
                      key={index}
                      type={movie.type}
                      title={movie.title}
                      imgUrl={movie.imgUrl}
                      genre={movie.genre}
                      rating={movie.rating}
                      ageRating={movie.ageRating}
                      isTopRated={false}

                    ></Card>
                  ))}

                </div>
              </div>
            </>
          }>
          </Route>
        </Routes>
      </div>
    </div >
  );
}

export default App;
