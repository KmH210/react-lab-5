import React from 'react';
import './App.css';
import Coke from './components/ViewStoryRoute';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import Header from "./components/Header"
import { StoryContextProvider } from "./context/story-context";
import  ViewStoryRoute  from "./components/ViewStoryRoute";
import { ListStoriesRoute } from './components/ListStoriesRoute';


function App() {
  return (
    <Router>
      <StoryContextProvider>
        <div className="App">
          {" "}
          <Header />
          <Switch>
            <Route path="/stories/:num">
              <ViewStoryRoute />
            </Route>
          </Switch>
          <ListStoriesRoute />
        </div>
      </StoryContextProvider>
    </Router>
  );
}

export default App;