import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
function App() {
  return (
    <div className="business-card">
      <div className="content">
        <Header />
        <MainContent />
        <Footer />
      </div>
      
    </div>
  );
}

export default App;
