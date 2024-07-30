import React from "react";
import ReactDOM from "react-dom/client";
import {GifsExpertApp} from "./GifsExpertApp.jsx";
import "./ResetStyles.css";
import "./Main.css";

ReactDOM.createRoot( document.getElementById("root")).render(
    <React.StrictMode>
        <GifsExpertApp/>
    </React.StrictMode>
);