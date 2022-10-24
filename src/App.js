import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import PostListContainer from "./components/PostsListContainer";
import PostDetailsContainer from "./components/PostDetailsContainer";
import MainPage from './components/MainPage'
import SellForm from './components/SellForm'

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={MainPage} />
      <Route path="/sell" exact component={SellForm} />
      <Route path="/posts" exact component={PostListContainer} />
      <Route path="/posts/:id" component={PostDetailsContainer} />
    </div>
  );
}

export default App;
