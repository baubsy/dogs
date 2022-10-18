import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { Box, ThemeProvider } from "@mui/system";
import "./App.css";
import Main from "./components/Main";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import SearchByStat from "./components/SearchByStat";

function App() {
    return (
        <BrowserRouter>
            <Box>
                <Route path="/" component={Header} />
                <Route path="/" exact component={Main} />
                <Route path="/about" exact component={About} />
                <Route path="/statsearch" component={SearchByStat} />
                <Route path="/" component={Footer} />
            </Box>
        </BrowserRouter>
    );
}

export default App;
