import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { VideoProvider, AuthProvider } from "./context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <VideoProvider>
          <App />
        </VideoProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
