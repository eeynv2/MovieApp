import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
  return (
    <div className="App ">
      <div className="container ">
        <Navbar name="Hello"></Navbar>
        
        <Card
          title="string"
          rating={1}
          genre="string"
          imgUrl="string"
          ageRating="string"
          type="string"
        ></Card>
          <Card
          title="string"
          rating={1}
          genre="string"
          imgUrl="string"
          ageRating="string"
          type="string"
        ></Card>
          <Card
          title="string"
          rating={1}
          genre="string"
          imgUrl="string"
          ageRating="string"
          type="string"
        ></Card>
          <Card
          title="string"
          rating={1}
          genre="string"
          imgUrl="string"
          ageRating="string"
          type="string"
        ></Card>
      </div>
    </div>
  );
}

export default App;
