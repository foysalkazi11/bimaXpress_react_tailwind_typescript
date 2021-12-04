import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Plan from "./components/plan/Plan";
import Layout from "./components/layout/Layout";
import Hospital from "./components/hospital/Hospital";
import Analyst from "./components/analyst/Analysts";
import AnalystCreate from "./components/analyst/analystCreate/AnalystCreate";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/hospital" element={<Hospital />} />
          <Route path="/analyst" element={<Analyst />} />
          <Route path="/analyst/create" element={<AnalystCreate />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
