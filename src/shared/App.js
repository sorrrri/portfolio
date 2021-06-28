import React, { Component } from "react"
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import ImageLoaded from "react-images-loaded"


class App extends Component {

  render() {
    return (
      <ImageLoaded>
        <Header />
        <Footer />
      </ImageLoaded>
    )
  }
}

export default App;