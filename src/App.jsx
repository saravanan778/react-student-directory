import { useState } from "react";
import StudentCard from "./StudentCard";
import "./App.css"; // for styles

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  const addStudent = () => {
    if (name && course) {
      setStudents([...students, { name, course }]);
      setName("");
      setCourse("");
    }
  };

  const deleteStudent = (index) => {
    setStudents(students.filter((_, i) => i !== index));
  };

  return (
    <div className="app-container">
      <h1 className="title">🎓 Student Directory</h1>

      <div className="form-container">
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
        <button onClick={addStudent}>Add Student</button>
      </div>

      <div className="students-list">
        {students.length === 0 ? (
          <p className="empty-message">No students added yet 🚀</p>
        ) : (
          students.map((student, index) => (
            <StudentCard
              key={index}
              name={student.name}
              course={student.course}
              onDelete={() => deleteStudent(index)}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
