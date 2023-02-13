import { Route, Routes } from "react-router-dom";
import Courses from "./components/courses/Courses";
import Details from "./components/details/Details";
import StudentsDetails from "./components/details/StudentsDetails";
import Materials from "./components/materials/Materials";
import StudentsMaterial from "./components/materials/StudentsMaterial";
import SideBar from "./components/side-bar/SideBar";
import Shedule from "./pages/ Shedule";
import Anounements from "./pages/Anounements";
import Late from "./pages/Late";
import Natifications from "./pages/Natifications";
import Raitings from "./pages/Raitings";
import Submitted from "./pages/Submitted";
import Waiting from "./pages/Waiting";

function App() {
  const materials = [
    {
      id: 1,
      title: "Material 1",
    },

    {
      id: 2,
      title: "Material 2",
    },
  ];

  const students = [
    {
      title: "Studensts 1",
      id: 1,
    },
    {
      title: "Studensts 2",
      id: 2,
    },
  ];
  return (
    <div>
      <SideBar />
      <Routes>
        <Route path="/courses" element={<Courses />}>
          <Route
            path="materials"
            element={<Materials materials={materials} />}
          />
          <Route
            path="materials/:id/details/"
            element={<Details materials={materials} />}
          >
            <Route path="submitted" element={<Submitted />} />

            <Route path="waiting" element={<Waiting />} />

            <Route path="late" element={<Late />} />
          </Route>

          <Route
            path="students"
            element={<StudentsMaterial students={students} />}
          />

          <Route
            path="students/:id/details/"
            element={<StudentsDetails students={students} />}
          />

          <Route path="raitings" element={<Raitings />} />
        </Route>
        <Route path="/anounements" element={<Anounements />} />

        <Route path="/natifications" element={<Natifications />} />
        <Route path="/shedule" element={<Shedule/>}/>
      </Routes>
    </div>
  );
}

export default App;
