const Profile = () => {
    return (
      <div style={styles.container}>
        <h1 style={styles.heading}>Profile</h1>
        <p style={styles.subtext}>Manage your profile details</p>
  
        <div style={styles.profileCard}>
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Email:</strong> john.doe@example.com</p>
          <p><strong>Role:</strong> Admin</p>
        </div>
      </div>
    );
  };
  
  const styles: { [key: string]: React.CSSProperties } = {
    container: { padding: 20, textAlign: "center" as const },
    heading: { fontSize: 32, fontWeight: "bold", marginBottom: 10 },
    subtext: { fontSize: 18, color: "#555", marginBottom: 20 },
    profileCard: { padding: 20, backgroundColor: "#f8f9fa", borderRadius: 5, display: "inline-block", textAlign: "left" as const },
  };
  
  export default Profile;
  