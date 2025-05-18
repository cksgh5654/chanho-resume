import "./App.css";
import BasicInformationSection from "./components/BasicInformationSection";
import CertificationEducation from "./components/CertificationEducation";
import ProjectSection from "./components/ProjectSection";
import SkillSection from "./components/SkillSection";

interface MainPageProps {
  initialProject?: string;
}

const MainPage: React.FC<MainPageProps> = ({ initialProject }) => {
  return (
    <>
      <ProjectSection initialProject={initialProject} />
      <BasicInformationSection />
      <SkillSection />
      <CertificationEducation />
    </>
  );
};

export default MainPage;
