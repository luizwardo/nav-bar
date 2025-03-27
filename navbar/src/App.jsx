import React, { useState } from 'react';
import './App.css';

function App() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <body>
        <header>
          <nav>
            <a className="logo" href="/">NAVBAR</a>
            <div
              className={`mobile-menu ${isActive ? 'active' : ''}`}
              onClick={handleClick}
            >
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
            <ul className={`nav-list ${isActive ? 'active' : ''}`}>
              <li><a href="#">Início</a></li>
              <li><a href="#">Sobre</a></li>
              <li><a href="#">Projetos</a></li>
              <li><a href="#">Contato</a></li>
            </ul>
          </nav>
        </header>
        <main></main>
      </body>
    </>
  );
}

export default App;