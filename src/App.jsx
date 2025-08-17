import { useState } from "react";
import StudentCard from "./StudentCard";

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
    <div>
      <h1>Student Directory</h1>

      <input 
        type="text" 
        placeholder="Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)}
      />
      <input 
        type="text" 
        placeholder="Course" 
        value={course} 
        onChange={(e) => setCourse(e.target.value)}
      />
      <button onClick={addStudent}>Add</button>

      {students.map((student, index) => (
        <StudentCard 
          key={index}
          name={student.name} 
          course={student.course} 
          onDelete={() => deleteStudent(index)}
        />
      ))}
    </div>
  );
}

export default App;
