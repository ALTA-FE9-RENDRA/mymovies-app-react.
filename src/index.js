import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./routes";

// import NowPlaying from "./pages/NowPlaying";
// import DetailMovie from "./pages/DetailMovie";
// import ListFavorite from "./pages/ListFavorite";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
