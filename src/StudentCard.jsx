function StudentCard({ name, course, onDelete }) {
  return (
    <div style={{ 
      border: "1px solid gray", 
      padding: "10px", 
      margin: "10px", 
      borderRadius: "8px",
      width: "200px"
    }}>
      <h2>{name}</h2>
      <p>Course: {course}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default StudentCard;
