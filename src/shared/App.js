import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Main, About, Academy, BoardView, BooksAll, Bookstore, Details, Downloads, Errata, GroupBuying, LectureMaterial, List, Login, Mypage, Notice, Order, OrderList, Policy, Privacy, Publish, QnA, Returns, SampleBooks, ShoppingBag, SignUp } from "../pages";
import ImageLoaded from "react-images-loaded";

class App extends Component {
  render() {
    return (
      <ImageLoaded className="container">
        <Header />
        <Route path="/" exact component={Main} />
        <Route path="/about" component={About} />
        <Route path="/academy" component={Academy} />
        <Route path="/board-view" component={BoardView} />
        <Route path="/books-all" component={BooksAll} />
        <Route path="/bookstore" component={Bookstore} />
        <Route path="/details" component={Details} />
        <Route path="/downloads" component={Downloads} />
        <Route path="/errata" component={Errata} />
        <Route path="/group-buying" component={GroupBuying} />
        <Route path="/lecture-material" component={LectureMaterial} />
        <Route path="/list" component={List} />
        <Route path="/login" component={Login} />
        <Route path="/mypage" component={Mypage} />
        <Route path="/notice" component={Notice} />
        <Route path="/order" component={Order} />
        <Route path="/order-list" component={OrderList} />
        <Route path="/policy" component={Policy} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/publish" component={Publish} />
        <Route path="/qna" component={QnA} />
        <Route path="/returns" component={Returns} />
        <Route path="/sample-books" component={SampleBooks} />
        <Route path="/shopping-bag" component={ShoppingBag} />
        <Footer />
      </ImageLoaded>
    );
  }
}

export default App;
