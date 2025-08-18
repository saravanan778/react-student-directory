import React from "react";
import ProfileCard from "./ProfileCard.jsx";

function App() {
  const teamMembers = [
    { name: "saro", role: "Developer", photo: "SARO.jpg" },
    { name: "santa", role: "Designer", photo: "SANTA.jpg" },
    { name: "sudalai", role: "Tester", photo: "SUDALAI.jpg" }
  ];

  return (
    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
      {teamMembers.map((member, index) => (
        <ProfileCard 
          key={index}
          name={member.name}
          role={member.role}
          photo={member.photo}
        />
      ))}
    </div>
  );
}

export default App;
