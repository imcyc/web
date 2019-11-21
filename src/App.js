import React from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import Header from './componentes/Header/Header';
import Footer from './componentes/Footer/Footer';
import Home from './componentes/Home/Home';

import './App.css';

function App() {
  return (
    <HashRouter basename="/">
      <div class="Site">
        <Header />
        <main class="Site-content">
          <Route exact path="/" component={Home} />
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
