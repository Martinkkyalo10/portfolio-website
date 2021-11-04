import React from "react";
import "./App.css";
import Articles from "./components/Articles";
import Banner from "./components/Banner.js";
import Footer from "./components/Footer.js";
import Contact from "./components/Contact.js";
import Projects from "./components/Projects.js";
import Navigation from "./components/Navigation";
import ContactInfo from "./components/ContactInfo";

function App() {
  return (
    <div className="App body">
      <Banner />
      <Projects />
      <Articles />
      <Contact />
      <ContactInfo />
      <Footer />
      <Navigation />
    </div>
  );
}

export default App;
