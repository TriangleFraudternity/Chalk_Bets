// App.js
import React from "react";
import { AuthProvider } from "./config/firebase.js";
import Navigation from "./navigation/navigation";

const App = () => {
    return (
        <Navigation />
    );
};

export default App;
