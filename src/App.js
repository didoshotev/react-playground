import { Route, Routes } from "react-router-dom";
import "./App.css";
import CoursePage from "./components/CoursePage/CoursePage";
import ManageCourse from "./components/ManageCourse/ManageCourse";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CoursePage />} />
        <Route path="/course/:slug" element={<ManageCourse />} />
        <Route path="/course" element={<ManageCourse />} />
      </Routes>
    </div>
  );
}

export default App;
