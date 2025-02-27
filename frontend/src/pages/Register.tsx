import { Link } from "react-router-dom";
import React, { useState } from "react";
import API_BASE_URL from "../config";

// Import API base URL

const Register: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Inline styles
  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f4f4f4",
    },
    formWrapper: {
      width: "350px",
      padding: "20px",
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
    },
    input: {
      width: "100%",
      padding: "10px",
      margin: "10px 0",
      border: "1px solid #ccc",
      borderRadius: "5px",
      fontSize: "16px",
    },
    button: {
      width: "100%",
      padding: "10px",
      backgroundColor: "#28a745",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      fontSize: "16px",
      cursor: "pointer",
      marginTop: "10px",
    },
    link: {
      textDecoration: "none",
      color: "#007bff",
      marginTop: "15px",
      display: "block",
    },
    error: {
      color: "red",
      marginTop: "10px",
    },
  };

  // Handle form submission
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }

      alert("Registration successful!");
      setName("");
      setEmail("");
      setPassword("");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formWrapper}>
        <h2>Register</h2>
        {error && <p style={styles.error}>{error}</p>}
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
          <button type="submit" style={styles.button} disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
        <p>
          Already have an account? <Link to="/login" style={styles.link}>Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
