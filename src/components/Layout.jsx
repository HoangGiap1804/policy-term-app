import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <div className="layout">
      <header className="header">
        <Link to="/" className="logo">
          Constellation Finder
        </Link>
        <nav className="nav-links">
          <Link
            to="/policy"
            className={`nav-link ${location.pathname === '/policy' ? 'active' : ''}`}
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms"
            className={`nav-link ${location.pathname === '/terms' ? 'active' : ''}`}
          >
            Terms of Service
          </Link>
        </nav>
      </header>

      <main className="main-content">
        {children}
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Our Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
