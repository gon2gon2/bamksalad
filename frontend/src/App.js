import React from 'react';
import { Route } from 'react-router';

import Header from './components/header';
import Main from './components/main';
import Signin from './components/signin';
import Signup from './components/signup';
import Finduser from './components/finduser';

function App() {
  return (
    <div className="App">
      <Header />

      <div className="contents">
        <Route path="/" component={Main} exact />
        <Route path="/Main" component={Main} exact />
        <Route path="/signin" component={Signin} exact />
        <Route path="/signup" component={Signup} exact />
        <Route path="/finduser" component={Finduser} exact />

      </div>


    </div>
  );
}

export default App;
