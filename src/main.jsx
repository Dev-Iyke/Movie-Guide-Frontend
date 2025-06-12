import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import AppLayout from "./components/AppLayout.jsx";
import AuthProvider from "./context/authContext.jsx";
import WatchListProvider from "./context/WatchlistContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <WatchListProvider>
        <Router>
          <AppLayout>
            <App />
          </AppLayout>
        </Router>
      </WatchListProvider>
    </AuthProvider>
  </StrictMode>
);
