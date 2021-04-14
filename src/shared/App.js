import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import Menu from "../components/Menu";
import { Home, About, Solutions, Services, Support } from "../pages";

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Switch>
          <Route path="/solutions/:tab" component={Solutions} />
          <Route path="/solutions" component={Solutions} />
        </Switch>
        <Switch>
          <Route path="/services/:tab" component={Services} />
          <Route path="/services" component={Services} />
        </Switch>
        <Route path="/support" component={Support} />
        <Footer />
      </div>
    );
  }
}

export default App;
