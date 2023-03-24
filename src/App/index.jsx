import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Landing from "../pages/Landing";

import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Landing />} path="/" />
          <Route element={<Home />} path="/home" />
          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
