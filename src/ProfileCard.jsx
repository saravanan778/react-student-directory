import React from "react";

function ProfileCard({ name, role, photo }) {
  return (
    <div
      style={{
        width: "200px",          // square width
        height: "200px",         // square height
        border: "2px solid #333",
        borderRadius: "12px",
        margin: "10px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
      }}
    >
      <img
        src={photo}
        alt={name}
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "8px",   // small curve but still square
          objectFit: "cover",
          marginBottom: "10px",
        }}
      />
      <h3 style={{ margin: "5px 0" }}>{name}</h3>
      <p style={{ margin: "0", fontSize: "14px", color: "#555" }}>{role}</p>
    </div>
  );
}

export default ProfileCard;
