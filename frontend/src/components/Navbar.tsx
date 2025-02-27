import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.navContainer}>
        <div style={styles.brand}>HAMS</div>
        <div style={styles.links}>
          <NavLink to="/login" style={({ isActive }) => (isActive ? { ...styles.link, ...styles.activeLink } : styles.link)}>Login</NavLink>
          <NavLink to="/register" style={({ isActive }) => (isActive ? { ...styles.link, ...styles.activeLink } : styles.link)}>Register</NavLink>
          <NavLink to="/dashboard" style={({ isActive }) => (isActive ? { ...styles.link, ...styles.activeLink } : styles.link)}>Dashboard</NavLink>
          <NavLink to="/appointments" style={({ isActive }) => (isActive ? { ...styles.link, ...styles.activeLink } : styles.link)}>Appointments</NavLink>
          <NavLink to="/doctors" style={({ isActive }) => (isActive ? { ...styles.link, ...styles.activeLink } : styles.link)}>Doctors</NavLink>
          <NavLink to="/patients" style={({ isActive }) => (isActive ? { ...styles.link, ...styles.activeLink } : styles.link)}>Patients</NavLink>
          <NavLink to="/profile" style={({ isActive }) => (isActive ? { ...styles.link, ...styles.activeLink } : styles.link)}>Profile</NavLink>
          <NavLink to="/settings" style={({ isActive }) => (isActive ? { ...styles.link, ...styles.activeLink } : styles.link)}>Settings</NavLink>
        </div>
      </div>
    </nav>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  navbar: { background: "#333", padding: "10px 0" },
  navContainer: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 20px" },
  brand: { color: "#fff", fontSize: "24px", fontWeight: "bold" },
  links: { display: "flex", gap: "15px" },
  link: { color: "#fff", textDecoration: "none", fontSize: "18px" },
  activeLink: { fontWeight: "bold", textDecoration: "underline" }
};

export default Navbar;
