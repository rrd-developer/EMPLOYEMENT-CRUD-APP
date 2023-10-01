import "./styles.css";
import { useState } from "react";

export default function App() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [employee, setEmployee] = useState([
    {
      id: 1,
      name: "DHINAKAR",
      role: "REACTJS DEVELOPER"
    },
    {
      id: 2,
      name: "DHANAM",
      role: "JUNIOR TYPIST"
    }
  ]);

  //ADD EMPLOYEE

  const addEmployee = () => {
    console.log(id, name, role);
    setEmployee([...employee, { id: id, name: name, role: role }]);
    setId("");
    setName("");
    setRole("");
  };

  //DELETE ALL

  const deleteAll = () => {
    setEmployee([]);
  };

  //DELETE INDIVIAL

  const delIndival = (id) => {
    console.log(id);
    const newEmp = employee.filter((e) => e.id !== id);
    setEmployee(newEmp);
  };
  return (
    <div className="App">
      <h1>EMPLOYEE MANAGEMENT</h1>

      <div className="Form">
        <input
          type="number"
          placeholder="ENTER ID"
          required
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="text"
          placeholder="ENTER NAME"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="ENTER ROLE"
          required
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />

        <button onClick={addEmployee}>ADD</button>
        <button onClick={deleteAll}>DELETE ALL</button>
      </div>

      {employee.map((e, i) => {
        return (
          <div key={i}>
            {e.id} {e.name} {e.role}{" "}
            <button onClick={() => delIndival(e.id)}>DELETE</button>
          </div>
        );
      })}
    </div>
  );
}
