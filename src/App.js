import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import "./App.css";
import Navigation from "./components/Navigation";

function App() {
  const MIN_DURATION = 10;
  const body = document.querySelector("body");

  function makeSnowFlake() {
    const snowFlake = document.createElement("div");
    const delay = Math.random() * 10;
    const initialOpacity = Math.random();
    const duration = Math.random() * 20 + MIN_DURATION;

    snowFlake.classList.add("snowFlake");
    snowFlake.style.left = `${Math.random() * window.screen.width}px`;
    snowFlake.style.animationDelay = `${delay}s`;
    snowFlake.style.opacity = initialOpacity;
    snowFlake.style.animation = `fall ${duration}s linear`;

    body.appendChild(snowFlake);
  }

  makeSnowFlake();

  for (let index = 0; index < 50; index++) {
    setInterval(makeSnowFlake, 500 * index);
  }
  return (
    <BrowserRouter>
      <Navigation />
        <Routes>
          <Route path="/" exact={ true } element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/movie-detail" element={<Detail />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;