import React from "react";

export default function Navigation({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
        href="#about-me"
        onClick={() => handlePageChange('AboutMe')}
        className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      
      <li className="nav-item">
        <a
        href="#portfolio"
        onClick={() => handlePageChange('Portfolio')}
        className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>

      <li className="nav-item">
        <a
        href="#contact-me"
        onClick={() => handlePageChange('ContactMe')}
        className={currentPage === 'ContactMe' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>


      <li className="nav-item">
        <a
        href="#resume"
        onClick={() => handlePageChange('Resume')}
        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
      
    </ul>
  );
}