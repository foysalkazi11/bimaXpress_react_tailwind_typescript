import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Plan from "./components/plan/Plan";
import Layout from "./components/layout/Layout";
import Hospital from "./components/hospital/Hospital";
import Analyst from "./components/analyst/Analysts";
import AnalystCreate from "./components/analyst/analystCreate/AnalystCreate";
import AnalystUpdate from "./components/analyst/analystUpdateContainer/AnalystUpdateContainer";
import Doctor from "./components/doctor/Doctor";
import DoctorCreate from "./components/doctor/doctorCreate/DoctorCreate";
import DoctorUpdate from "./components/doctor/doctorUpdateContainer/DoctorUpdateContainer";
import NewCase from "./components/newCase/NewCase";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/hospital" element={<Hospital />} />
          <Route path="/analyst" element={<Analyst />} />
          <Route path="/analyst/update" element={<AnalystUpdate />} />
          <Route path="/analyst/create" element={<AnalystCreate />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/doctor/create" element={<DoctorCreate />} />
          <Route path="/doctor/update" element={<DoctorUpdate />} />
          <Route path="/newCase" element={<NewCase />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
