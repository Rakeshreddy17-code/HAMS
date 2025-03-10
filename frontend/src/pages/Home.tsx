
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/login");
  };

  return (
    <div style={{
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "40px 20px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: "#f8f9fa",
      borderRadius: "10px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      color: "#333",
      textAlign: "center",
      minHeight: "85vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }}>
      <div style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "30px",
        backgroundColor: "white",
        borderRadius: "12px",
        boxShadow: "0 6px 18px rgba(0, 0, 0, 0.08)"
      }}>
        <div style={{
          width: "80px",
          height: "80px",
          margin: "0 auto 20px auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            backgroundColor: "#4361ee",
            borderRadius: "50%",
            color: "white",
            fontSize: "32px",
            fontWeight: "bold"
          }}>
            <span style={{ transform: "translateY(-2px)" }}>+</span>
          </div>
        </div>

        <h1 style={{
          fontSize: "36px",
          fontWeight: "700",
          color: "#2c3e50",
          margin: "0 0 20px 0",
          position: "relative",
          display: "inline-block"
        }}>
          Welcome to HAMS
          <div style={{
            height: "4px",
            width: "60%",
            backgroundColor: "#4361ee",
            position: "absolute",
            bottom: "-10px",
            left: "20%",
            borderRadius: "2px"
          }}></div>
        </h1>

        <p style={{
          fontSize: "18px",
          color: "#6c757d",
          lineHeight: "1.6",
          margin: "30px 0 40px 0"
        }}>
          Book and manage your healthcare appointments easily.
        </p>

        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          marginBottom: "30px"
        }}>
          <button 
            onClick={handleGetStarted}
            style={{
              backgroundColor: "#4361ee",
              color: "white",
              border: "none",
              padding: "12px 24px",
              borderRadius: "6px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.2s ease",
              boxShadow: "0 4px 6px rgba(67, 97, 238, 0.3)"
            }} 
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#3a56d4";
              e.currentTarget.style.transform = "translateY(-2px)";
            }} 
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "#4361ee";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Get Started
          </button>
          <button style={{
            backgroundColor: "white",
            color: "#4361ee",
            border: "2px solid #4361ee",
            padding: "12px 24px",
            borderRadius: "6px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
            transition: "all 0.2s ease"
          }} onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "#f0f2ff";
            e.currentTarget.style.transform = "translateY(-2px)";
          }} onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "white";
            e.currentTarget.style.transform = "translateY(0)";
          }}>
            Learn More
          </button>
        </div>
      </div>

      <div style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "50px",
        gap: "30px",
        flexWrap: "wrap"
      }}>
        <div style={{
          padding: "25px",
          backgroundColor: "white",
          borderRadius: "8px",
          width: "220px",
          textAlign: "center",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)"
        }}>
          <div style={{
            width: "70px",
            height: "70px",
            margin: "0 auto 15px auto",
            backgroundColor: "#e8f0ff",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#4361ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </div>
          <h3 style={{
            margin: "0 0 10px 0",
            color: "#2c3e50",
            fontSize: "18px"
          }}>
            Easy Scheduling
          </h3>
          <p style={{
            margin: "0",
            color: "#6c757d",
            fontSize: "14px"
          }}>
            Book appointments with just a few clicks
          </p>
        </div>

        <div style={{
          padding: "25px",
          backgroundColor: "white",
          borderRadius: "8px",
          width: "220px",
          textAlign: "center",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)"
        }}>
          <div style={{
            width: "70px",
            height: "70px",
            margin: "0 auto 15px auto",
            backgroundColor: "#e8f0ff",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#4361ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
          </div>
          <h3 style={{
            margin: "0 0 10px 0",
            color: "#2c3e50",
            fontSize: "18px"
          }}>
            Reminders
          </h3>
          <p style={{
            margin: "0",
            color: "#6c757d",
            fontSize: "14px"
          }}>
            Never miss your important appointments
          </p>
        </div>

        <div style={{
          padding: "25px",
          backgroundColor: "white",
          borderRadius: "8px",
          width: "220px",
          textAlign: "center",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)"
        }}>
          <div style={{
            width: "70px",
            height: "70px",
            margin: "0 auto 15px auto",
            backgroundColor: "#e8f0ff",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#4361ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
          </div>
          <h3 style={{
            margin: "0 0 10px 0",
            color: "#2c3e50",
            fontSize: "18px"
          }}>
            Health Records
          </h3>
          <p style={{
            margin: "0",
            color: "#6c757d",
            fontSize: "14px"
          }}>
            Access your medical history anytime
          </p>
        </div>
      </div>

      <div style={{
        marginTop: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}>
        <h3 style={{
          color: "#2c3e50",
          fontSize: "20px",
          marginBottom: "20px"
        }}>
          Trusted by Healthcare Professionals
        </h3>
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap"
        }}>
          {/* Hospital Logo 1 */}
          <div style={{
            width: "120px",
            height: "60px",
            backgroundColor: "#f0f2ff",
            border: "1px solid #e0e0e0",
            borderRadius: "6px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#4361ee",
            fontSize: "18px",
            fontWeight: "bold"
          }}>
            MedCare
          </div>
          
          {/* Hospital Logo 2 */}
          <div style={{
            width: "120px",
            height: "60px",
            backgroundColor: "#f0f2ff",
            border: "1px solid #e0e0e0",
            borderRadius: "6px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#4361ee",
            fontSize: "18px",
            fontWeight: "bold"
          }}>
            HealthPlus
          </div>
          
          {/* Hospital Logo 3 */}
          <div style={{
            width: "120px",
            height: "60px",
            backgroundColor: "#f0f2ff",
            border: "1px solid #e0e0e0",
            borderRadius: "6px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#4361ee",
            fontSize: "18px",
            fontWeight: "bold"
          }}>
            CarePoint
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;