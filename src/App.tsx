import "./App.css";
import BasicInformationSection from "./components/BasicInformationSection";
import CertificationEducation from "./components/CertificationEducation";
import Footer from "./components/Footer";
import Header from "./components/header/Header";
import MainSection from "./components/MainSection";
import ProjectSection from "./components/ProjectSection";
import SkillSection from "./components/SkillSection";

function App() {
  return (
    <>
      <Header />
      <MainSection />
      <BasicInformationSection />
      <SkillSection />
      <ProjectSection />
      <CertificationEducation />
      <Footer />
    </>
  );
}

export default App;
