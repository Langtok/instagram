// src/App.js
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom'; // Add useLocation
import { getCurrentUser, signOut } from '@aws-amplify/auth';
import Login from './components/Login';
import Signup from './components/Signup';
import Confirm from './components/Confirm'; // Add this
import Home from './pages/Home';
import Explore from './pages/Explore';
import ProfilePage from './pages/ProfilePage';
import About from './pages/About';
import Help from './pages/Help';
import NotFound from './pages/NotFound';
import SearchBar from './components/SearchBar';
import NotificationBar from './components/NotificationBar';
import './App.css';

const App = () => {
  const [user, setUser] = useState(null);
  const [notification, setNotification] = useState('');
  const location = useLocation(); // Add this to access route state

  useEffect(() => {
    checkUser();
  }, []);

  console.log('User state:', user);

  const checkUser = async () => {
    try {
      const currentUser = await getCurrentUser();
      setUser({ attributes: { sub: currentUser.userId, username: currentUser.username } });
    } catch (error) {
      setUser(null);
    }
  };

  const handleLogin = () => checkUser();
  const handleSignup = () => setUser(null);
  const handleConfirm = () => checkUser(); // Add this to update user after confirmation
  const handleLogout = async () => {
    await signOut();
    setUser(null);
  };

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(''), 3000);
  };

  return (
    <div className="app">
      {user ? (
        <>
          <header className="top-bar">
            <div className="logo">Instagram</div>
            <SearchBar onResults={(results) => console.log(results)} />
            <nav className="nav-icons">
              <Link to="/"><i className="icon-home"></i></Link>
              <Link to="/explore"><i className="icon-explore"></i></Link>
              <Link to={`/profile/${user.attributes.sub}`}><i className="icon-profile"></i></Link>
              <button onClick={handleLogout}><i className="icon-logout"></i></button>
            </nav>
          </header>
          <main className="content">
            <Routes>
              <Route path="/" element={<Home user={user} showNotification={showNotification} />} />
              <Route path="/explore" element={<Explore user={user} />} />
              <Route path="/profile/:userId" element={<ProfilePage user={user} />} />
              <Route path="/about" element={<About />} />
              <Route path="/help" element={<Help />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          {notification && <NotificationBar message={notification} onClose={() => setNotification('')} />}
        </>
      ) : (
        <Routes>
          <Route path="/" element={
            <div className="auth-container">
              <Login onLogin={handleLogin} />
              <Link to="/signup" className="auth-switch">Don't have an account? Sign Up</Link>
            </div>
          } />
          <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
          <Route path="/confirm" element={
            <div className="auth-container">
              <Confirm email={location.state?.email || ''} onConfirm={handleConfirm} />
            </div>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </div>
  );
};

// Wrap App with Router since useLocation needs it
const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;