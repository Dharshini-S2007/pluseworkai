import { useState } from "react";
import "./App.css";

import LandingPage from "./components/LandingPage";
import CardDemo from "./components/ui/cardcom";
import Signup from "./components/Signup.jsx";
import CreateTask from "./components/CreateTask";

function App() {

    const [currentPage, setCurrentPage] = useState("landing");

    return (
        <>
            {currentPage === "landing" && (
                <LandingPage
                    onGetStarted={() => setCurrentPage("login")}
                    onSignUp={() => setCurrentPage("signup")}
                />
            )}

            {currentPage === "login" && (
                <CardDemo
                    onLoginSuccess={() => setCurrentPage("tasks")}
                    onSignUp={() => setCurrentPage("signup")}
                />
            )}

            {currentPage === "signup" && (
                <Signup
                    onBackToLogin={() => setCurrentPage("login")}
                />
            )}

            {currentPage === "tasks" && (
                <CreateTask />
            )}
        </>
    );
}

export default App;