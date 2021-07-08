import React from 'react';

import {Provider} from 'react-redux'
import store from './redux/store'
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './views/Home'
import Login from './views/login/Login'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar';
import Page from './components/page/Page';
import Jobs from './views/jobs/Jobs';
import Controller from './components/Controller'
import Mapa from './views/mapas/Mapa'

function App() {
  return (
    <div className="App">
      <Provider store={store} >
        <BrowserRouter>
        
          <Header />
          <Sidebar />
          <Page>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/jobs" component={Jobs} />
              <Route path="/login" component={Login} />
              <Route path="/mapas" component={Mapa} />
            </Switch>
          </Page>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
