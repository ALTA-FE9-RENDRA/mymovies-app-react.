import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useMemo, useEffect } from "react";
import { useDispatch } from "react-redux";

import Index from "pages";
import Detail from "pages/DetailMovie";
import NotFound from "pages/NotFound";
import TestEvent from "pages/TestEvent";
import Favorite from "pages/ListFavorites";

import { ThemeContext } from "utils/Context";
import { setFavorites } from "utils/redux/reducers/reducer";

function App() {
  const dispatch = useDispatch();
  const [isLight, setIsLight] = useState(true);
  const theme = useMemo(() => ({ isLight, setIsLight }), [isLight]);

  useEffect(() => {
    if (isLight) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [isLight]);

  useEffect(() => {
    const getMovies = localStorage.getItem("favMovies");
    if (getMovies) {
      dispatch(setFavorites(JSON.parse(getMovies)));
    }
  }, []);

  return (
    <ThemeContext.Provider value={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/detail/:id_movie" element={<Detail />} />
          <Route path="/TestEvent" element={<TestEvent />} />
          <Route path="/ListFavorites" element={<Favorite />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
