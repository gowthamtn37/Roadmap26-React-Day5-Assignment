import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AddStudent } from "./AddStudent";
import "./App.css";
import { Edit } from "./Edit";
import { Home } from "./Home";
import { View } from "./View";

function App() {
  const [studentDetails, setStudentDetails] = useState([
    {
      name: "ashok",
      blood: "A+",
      department: "mechatronics",
      dob: 1995,
    },
    {
      name: "bala",
      blood: "B+",
      department: "mechatronics",
      dob: 1994,
    },
    {
      name: "gowtham",
      blood: "AB+",
      department: "mechatronics",
      dob: 1993,
    },
    {
      name: "hari pranesh",
      blood: "O+",
      department: "mechatronics",
      dob: 1996,
    },
    {
      name: "sri nath",
      blood: "A-",
      department: "mechatronics",
      dob: 1994,
    },
    {
      name: "murugesh",
      blood: "B-",
      department: "mechatronics",
      dob: 1993,
    },
  ]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                studentDetails={studentDetails}
                setStudentDetails={setStudentDetails}
              />
            }
          />
          <Route
            path="/add-student"
            element={
              <AddStudent
                studentDetails={studentDetails}
                setStudentDetails={setStudentDetails}
              />
            }
          />
          <Route
            path="/view/:id"
            element={<View studentDetails={studentDetails} />}
          />
          <Route
            path="/edit/:id"
            element={<Edit studentDetails={studentDetails} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
