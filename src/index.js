import React from "react";
import ReactDOM from "react-dom"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "../node_modules/react-toastify/dist/ReactToastify.css"
import "./index.scss"
import App from "./Components/App/App";
import MediaContextProvider from "./Context/MediaContext";

ReactDOM.render(
    <MediaContextProvider>
        <App />
    </MediaContextProvider>,
    document.getElementById("root")
)