import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
    return (
        <div>
          <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<h1>This is on Home Page</h1>} />
                <Route path={"/contact"} element={<h1>This is on Contact Page</h1>} />
                <Route path={"/about"} element={<h1>This is on About Page</h1>} />
            </Routes>
            </BrowserRouter>
        </div>
    );
};
export default App;
________________________________________________________________________________________________

import React from "react";

const Header = () => {
    return (
        <nav>
            <a href="/home">Home</a>
            <a href="/contact">Contact</a>
            <a href="/about">About</a>
            <a href="/signup">Sign Up</a>
        </nav>
    )
};
export default Header;