import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import AboutMe from "./components/pages/AboutMe";
import ContactMe from "./components/pages/ContactMe";
import Portfolio from "./components/pages/Portfolio";
import Resume from "./components/pages/Resume";

function App() {
  const [pages] = useState([
    {
      name: "about me"
    }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <Header>
        <Navigation
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        >
          Nav
        </Navigation>
      </Header>
      <main>
        {/* <Page currentPage={currentPage}></Page> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
