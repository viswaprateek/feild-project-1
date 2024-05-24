import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';

const Layout = ({ children }) => {
  const { userRole, name, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };





  return (
    
    <div className="d-flex flex-column min-vh-100">
      {/* App Bar */}
      <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  {/*--======== CSS ======== */}
  <link rel="stylesheet" href="layout.css" />
  {/*--===== Boxicons CSS ===== */}
  <link
    href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css"
    rel="stylesheet"
  />
  <nav className="sidebar close">
    <header>
      <div className="image-text">
        <span className="image">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAZxJREFUSEu11L1vjWEYx/HPSecmmgpCajHUaOofIF5K01EbU/8CidCkpoYNIQzduyojUukLo9UmBgtB21RIGQnPldxtTh7nPveTU+da7/v6fa/3lj5bq8/6mgImq0Bu4kQK6D3m8bwUYBPAHG5nhGZxvxukBDiPF9hAgFaS2DncwRGcwXoOUgKsJoFpPK6JTGEJy7jYK+AbDlRlGMTPmsgwtvEZx3oFbOIQDuJrBhB/olQdrVSiqPlZRDmeZEoUPbrQK6C9yTEx0ZOBBL2Lw/ttcgR2DSEWwu32u+pLQB/uZ0x3fUdxHTGev/Ayzf+7/7FoJY2u792aHOMZUY/hVJqmdrEtvMHrlM2PTqQcIKZiMTWxSQaxCzNYq3/uBJjAs/TxKW4hjtv3mnNkGMcv3sMnLAKLsd2zOmAIb1PkcWtuNAkf91I5v+BkNXk7u351wFU8wCucbige30InljIO35Vq8xdygDhol0rLkwGPp8P3CJdzgA8YQZSqXvNSQkfxCR9xPAf4kx5KNyoH+8e/V6FSNtkpauzY9GPfM/gL5dBHGcZ57nQAAAAASUVORK5CYII=" />
        </span>
        <div className="text logo-text">
          <span className="name">MentorConnect</span>
        </div>
      </div>
      <i className="bx bx-chevron-right toggle" />
    </header>
    <div className="menu-bar">
      <div className="menu">
        <li className="search-box">
          <i className="bx bx-search icon" />
          <input type="text" placeholder="Search..." />
        </li>
        <ul className="menu-links">
          <li className="nav-link">
            <a href="#">
              <i className="bx bx-bar-chart-alt-2 icon" />
              <span className="text nav-text">Attendance</span>
            </a>
          </li>
          <li className="nav-link">
            <a href="#">
              <i className="bx bx-heart icon" />
              <span className="text nav-text">Approvals</span>
            </a>
          </li>
          <li className="nav-link">
            <a href="#">
              <i className="bx bx-pie-chart-alt icon" />
              <span className="text nav-text">Schedule Meeting</span>
            </a>
          </li>
          <div className="bottom-content">
            <li className="">
              <a href="#">
                <i className="bx bx-log-out icon" />
                <span className="text nav-text">Logout</span>
              </a>
            </li>
            <li className="mode">
              <div className="sun-moon">
                <i className="bx bx-moon icon moon" />
                <i className="bx bx-sun icon sun" />
              </div>
              <span className="mode-text text">Dark mode</span>
              <div className="toggle-switch">
                <span className="switch" />
              </div>
            </li>
          </div>
        </ul>
      </div>
    </div>
  </nav>
  <section className="home">
    <div className="text">Welcome 23CSE027 - Vatte Vijaya Bhaskara Reddy</div>
  </section>
  {}
</>


      {/* Sidebar */}
      <div className="d-flex flex-grow-1">
        

        {/* Main Content */}
        <main className="flex-grow-1 p-3" style={{ overflow: 'auto', marginTop: '56px' }}>
          {children}
        </main>
      </div>

      {/* Footer */}

    </div>
  );
};

export default Layout;