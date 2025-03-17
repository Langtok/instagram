import { useState } from "react";
import { Link } from "react-router-dom";
import { signIn } from "@aws-amplify/auth";
import "./Login.css";

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    try {
      console.log("Attempting to log in:", formData.username); // Debugging

      // Ensure username or email is provided
      if (!formData.username || !formData.password) {
        setError("Please enter both username and password.");
        return;
      }

      await signIn(formData.username, formData.password);
      console.log("Login successful");
      onLogin();
    } catch (err) {
      console.error("Login Error:", err); // Debugging

      // Show a more specific error message
      if (err.message) {
        setError(err.message);
      } else {
        setError("Invalid login credentials. Please try again.");
      }
    }
  };

  return (
    <div className="auth-container">
      {/* Left-Side Image Section */}
      <div className="auth-left">
        <img src={process.env.PUBLIC_URL + "/assets/instagram-phones.png"} alt="Instagram mobile preview" />
      </div>

      {/* Right-Side Login Form */}
      <div className="auth-right">
        <div className="login-box">
          <h1 className="instagram-logo">Instagram</h1>
          {error && <p className="error">{error}</p>}

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Phone number, username, or email"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button type="submit" className="login-btn">Log in</button>
          </form>

          <div className="or-divider">
            <span></span>OR<span></span>
          </div>

          <button className="facebook-login">Log in with Facebook</button>
          <Link to="/forgot-password" className="forgot-password">Forgot password?</Link>
        </div>

        {/* Sign Up Section */}
        <div className="signup-box">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </div>

        {/* App Download Section */}
        <div className="get-the-app">
          <p>Get the app.</p>
          <div className="app-buttons">
            <img src={process.env.PUBLIC_URL + "/assets/google-play.png"} alt="Google Play" />
            <img src={process.env.PUBLIC_URL + "/assets/microsoft-store.png"} alt="Microsoft Store" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
