import React, { useState } from 'react';
import Navigation from "./Navigation";

import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

export default function Header() {
  const [currentPage, setCurrentPage] = useState("AboutMe");

  const renderPage = () => {
    if (currentPage === "AboutMe") {
      return <AboutMe />;
    }
    if (currentPage === "ContactMe") {
      return <ContactMe />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}