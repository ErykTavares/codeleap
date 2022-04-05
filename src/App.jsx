import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainScreen from "./pages/MainScreen/MainScreen";
import Signup from "./pages/Signup/Signup";
import { GlobalStyle } from "./styles/GlobalStyle";
import { UserStorage } from "./UseContext";

function App() {
  return (
    <main>
      <GlobalStyle />
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route exact path="*" element={<Navigate to="/signup" replace />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/mainscreen" element={<MainScreen />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </main>
  );
}

export default App;
