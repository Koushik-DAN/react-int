import React from "react";
import { NavLink, Outlet } from "react-router";


export default function DashboardHome() {
  const styles = {
    wrapper: {
      display: "flex",
      minHeight: "100vh",
      background: "#f6f7fb",
      fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
    },
    sidebar: {
      width: "240px",
      background: "#111827",
      color: "#fff",
      padding: "20px",
      boxSizing: "border-box",
    },
    brand: {
      fontSize: "18px",
      fontWeight: 700,
      marginBottom: "18px",
      letterSpacing: "0.5px",
    },
    nav: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    link: {
      padding: "10px 12px",
      borderRadius: "10px",
      textDecoration: "none",
      color: "#d1d5db",
      background: "transparent",
    },
    linkActive: {
      color: "#fff",
      background: "rgba(255,255,255,0.12)",
    },
    content: {
      flex: 1,
      padding: "24px",
      boxSizing: "border-box",
    },
    contentCard: {
      background: "#fff",
      borderRadius: "14px",
      padding: "18px",
      boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
    },
  };

  const navLinkStyle = ({ isActive }) => {
console.log(isActive);
    return {
    ...styles.link,
    ...(isActive ? styles.linkActive : {}),
  }
  };

  return (
    <div style={styles.wrapper}>
      {/* Left menu */}
      <aside style={styles.sidebar}>
        <div style={styles.brand}>My App</div>

        <nav style={styles.nav}>
          <NavLink to="profile" end style={navLinkStyle}>
            Profile
          </NavLink>
          <NavLink to="/dashboard" style={navLinkStyle}>
            Dashboard
          </NavLink>
          <NavLink to="settings" style={navLinkStyle}>
            Settings
          </NavLink>
        </nav>
      </aside>

      {/* Page content */}
      <main style={styles.content}>
        <div style={styles.contentCard}>
          <div style={{ fontSize: "50px" }}>
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}
