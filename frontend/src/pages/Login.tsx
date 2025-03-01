import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import API_BASE_URL from "../config";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  // Enhanced styles
  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    formWrapper: {
      width: "400px",
      padding: "30px 40px",
      backgroundColor: "#fff",
      borderRadius: "12px",
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
      transition: "transform 0.3s ease",
    },
    header: {
      margin: "0 0 25px 0",
      color: "#333",
      fontSize: "28px",
      fontWeight: 600,
    },
    inputGroup: {
      position: "relative",
      marginBottom: "20px",
    },
    input: {
      width: "100%",
      padding: "12px 15px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      fontSize: "16px",
      transition: "border-color 0.3s, box-shadow 0.3s",
      outline: "none",
      backgroundColor: "#f9f9f9",
    },
    inputFocus: {
      borderColor: "#4a90e2",
      boxShadow: "0 0 0 2px rgba(74, 144, 226, 0.2)",
      backgroundColor: "#fff",
    },
    button: {
      width: "100%",
      padding: "14px",
      backgroundColor: "#4a90e2",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      fontSize: "16px",
      fontWeight: 600,
      cursor: "pointer",
      marginTop: "15px",
      transition: "background-color 0.3s, transform 0.1s",
      boxShadow: "0 4px 6px rgba(74, 144, 226, 0.2)",
    },
    buttonHover: {
      backgroundColor: "#3a7bc8",
      transform: "translateY(-2px)",
      boxShadow: "0 6px 8px rgba(74, 144, 226, 0.3)",
    },
    buttonDisabled: {
      backgroundColor: "#a0c4f0",
      cursor: "not-allowed",
      transform: "none",
      boxShadow: "none",
    },
    link: {
      textDecoration: "none",
      color: "#4a90e2",
      fontWeight: 500,
      transition: "color 0.3s",
    },
    linkHover: {
      color: "#3a7bc8",
      textDecoration: "underline",
    },
    registerText: {
      marginTop: "25px",
      color: "#666",
      fontSize: "15px",
    },
    error: {
      color: "#e74c3c",
      backgroundColor: "rgba(231, 76, 60, 0.1)",
      padding: "10px 15px",
      borderRadius: "6px",
      marginBottom: "20px",
      fontSize: "14px",
      textAlign: "left",
      borderLeft: "3px solid #e74c3c",
    },
    forgotPassword: {
      display: "block",
      textAlign: "right",
      fontSize: "14px",
      marginTop: "5px",
      marginBottom: "15px",
    },
    loadingSpinner: {
      display: "inline-block",
      width: "16px",
      height: "16px",
      border: "2px solid rgba(255, 255, 255, 0.3)",
      borderRadius: "50%",
      borderTopColor: "#fff",
      animation: "spin 1s ease-in-out infinite",
      marginRight: "8px",
      verticalAlign: "middle",
    },
  };

  // Handle input focus style
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    Object.assign(e.target.style, styles.inputFocus);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.style.borderColor = "#ddd";
    e.target.style.boxShadow = "none";
    e.target.style.backgroundColor = "#f9f9f9";
  };

  // Handle button hover effects
  const handleButtonHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!loading) {
      Object.assign(e.currentTarget.style, styles.buttonHover);
    }
  };

  const handleButtonLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    Object.assign(e.currentTarget.style, styles.button);
  };

  // Handle link hover effects
  const handleLinkHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    Object.assign(e.currentTarget.style, styles.linkHover);
  };

  const handleLinkLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    Object.assign(e.currentTarget.style, styles.link);
  };

  // Handle form submission
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // Store token in localStorage
      localStorage.setItem("token", data.token);
      alert("Login successful!");

      // Redirect to the dashboard or home page
      navigate("/dashboard");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formWrapper}>
        <h2 style={styles.header}>Welcome Back</h2>
        {error && <div style={styles.error}>{error}</div>}
        <form onSubmit={handleLogin}>
          <div style={styles.inputGroup}>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
            />
            <Link 
              to="/forgot-password" 
              style={{...styles.link, ...styles.forgotPassword}}
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
            >
              Forgot Password?
            </Link>
          </div>
          <button 
            type="submit" 
            style={loading ? {...styles.button, ...styles.buttonDisabled} : styles.button}
            disabled={loading}
            onMouseEnter={handleButtonHover}
            onMouseLeave={handleButtonLeave}
          >
            {loading ? (
              <>
                <span style={styles.loadingSpinner}></span>
                <span>Signing In...</span>
              </>
            ) : (
              "Sign In"
            )}
          </button>
        </form>
        <p style={styles.registerText}>
          Don't have an account?{" "}
          <Link 
            to="/register" 
            style={styles.link}
            onMouseEnter={handleLinkHover}
            onMouseLeave={handleLinkLeave}
          >
            Create Account
          </Link>
        </p>
      </div>
      <style>
        {`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Login;