import React, {useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import LoginForm from './components/LoginForm/LoginForm';
import SignUpForm from './components/SignUpForm/SignUpForm';
import Home from './components/Home/Home';
import ViewArticle from './components/ViewArticle/ViewArticle';
import PrivateRoute from './utils/PrivateRoute';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  const [title, updateTitle] = useState(null);
  const [errorMessage, updateErrorMessage] = useState(null);
  return (
    <Router>
    <div className="App">
      <Header title={title}/>
        <div className="container d-flex align-items-center flex-column">
          <Switch>
            <Route path="/" exact={true}>
              <SignUpForm showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <Route path="/signup">
              <SignUpForm showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <Route path="/login">
              <LoginForm showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <PrivateRoute path="/home">
              <Home/>
            </PrivateRoute>
          </Switch>
          <AlertComponent errorMessage={errorMessage} hideError={updateErrorMessage}/>
        </div>
    </div>
    </Router>
  );
}

export default App;