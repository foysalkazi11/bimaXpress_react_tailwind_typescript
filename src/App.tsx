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
import Order from "./components/order/Order";
import Drafts from "./components/drafts/Drafts";
import EmpanelledCompanies from "./components/empanelled/EmpanelledCompanies";
import CreateCompany from "./components/empanelled/createCompany/CreateCompany";
import UpdateCompanies from "./components/empanelled/updateCompanies/UpdateCompanies";
import Mail from "./components/mail/Mail";
import LoginPage from "./components/auth/login.page";
// import SignPage from "./components/auth/signup.page";
import { useAppSelector } from "./redux/hooks";
import PreauthForm from "./components/preauthForm/PreauthForm";

function App() {
  const { user } = useAppSelector((state) => state?.user);

  return (
    <Router>
      <Layout>
        <Routes>
          {user ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/plan" element={<Plan />} />
              <Route path="/hospital" element={<Hospital />} />
              <Route path="/analyst" element={<Analyst />} />
              <Route path="/analyst/:key" element={<AnalystUpdate />} />
              <Route path="/analyst/create" element={<AnalystCreate />} />
              <Route path="/doctor" element={<Doctor />} />
              <Route path="/doctor/create" element={<DoctorCreate />} />
              <Route path="/doctor/:key" element={<DoctorUpdate />} />
              <Route path="/newCase" element={<NewCase />} />
              <Route path="/newCase/:case" element={<NewCase />} />
              <Route path="/order" element={<Order />} />
              <Route path="/caseData/:case" element={<Drafts />} />
              <Route path="/mail" element={<Mail />} />
              <Route path="/preauthform" element={<PreauthForm />} />
              <Route
                path="/empanelledCompanies"
                element={<EmpanelledCompanies />}
              />
              <Route
                path="/empanelledCompanies/create"
                element={<CreateCompany />}
              />
              <Route
                path="/empanelledCompanies/:key"
                element={<UpdateCompanies />}
              />
            </>
          ) : (
            <>
              <Route path="/" element={<LoginPage />} />
              <Route path="/login" element={<LoginPage />} />
              {/* <Route path="/signup" element={<SignPage />} /> */}
            </>
          )}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
