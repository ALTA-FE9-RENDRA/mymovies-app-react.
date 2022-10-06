import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "../pages";
import Detail from "../pages/DetailMovie";
import NotFound from "../pages/NotFound";
import TestEvent from "../pages/TestEvent";
import Favorite from "../pages/ListFavorites";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/detail/:id_movie" element={<Detail />} />
          <Route path="/TestEvent" element={<TestEvent />} />
          <Route path="/ListFavorites" element={<Favorite />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
