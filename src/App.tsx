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
    <main className="overflow-x-hidden">
      <Header />
      <MainSection />
      <BasicInformationSection />
      <SkillSection />
      <ProjectSection />
      <CertificationEducation />
      <Footer />
    </main>
  );
}

export default App;
