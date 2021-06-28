import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Main, About } from "../pages";
import ImageLoaded from "react-images-loaded";

class App extends Component {
  render() {
    return (
      <ImageLoaded className="container">
        <Header />
        <Route path="/" component={Main} />
        <Route path="/about" component={About} />
        <Footer />
      </ImageLoaded>
    );
  }
}

export default App;
