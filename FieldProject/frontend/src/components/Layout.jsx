import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

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
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
        <div className="container-fluid">
          <span className="navbar-brand mx-auto fs-1">
            MentorConnect.vnrvjiet
          </span>
          <div className="d-flex flex-column align-items-end">
            <span className="navbar-text fs-4">
              👋🏻 {name}
              <span className="fs-6"> ({userRole})</span>
            </span>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div className="d-flex flex-grow-1">
        <div className="bg-primary" style={{ width: '220px' }}>
          <nav className="navbar navbar-dark bg-primary flex-column p-3" style={{ height: '100vh' }}>
            <ul className="nav nav-pills flex-column mb-auto">
              <li className="nav-item mb-2">
                <Link className="nav-link text-white" to="/user/dashboard">
                  <i className="bi bi-speedometer2"></i> Dashboard
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link className="nav-link text-white" to="/user/jobs">
                  <i className="bi bi-briefcase"></i> Jobs
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link className="nav-link text-white" to="/user/myjobs">
                  <i className="bi bi-building"></i> My Jobs
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link className="nav-link text-white" to="/user/profile">
                  <i className="bi bi-person-circle"></i> Profile
                </Link>
              </li>
            </ul>
            <button className="btn btn-danger mt-auto" onClick={handleLogout}>
              <i className="bi bi-box-arrow-right"></i> Logout
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <main className="flex-grow-1 p-3" style={{ overflow: 'auto', marginTop: '56px' }}>
          {children}
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-primary text-white text-center py-2" style={{ position: 'fixed', bottom: 0, width: '100%' }}>
        @MentorConnect.vnrvjiet.
      </footer>
    </div>
  );
};

export default Layout;
