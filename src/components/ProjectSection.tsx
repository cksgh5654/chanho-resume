import Projects from "./Projects";
import cinemahubLogo from "../assets/icons/cinemahub-logo.svg";
import cinemahubBgLg from "../assets/images/cinemahub-bg-lg.png";
import cinemahubBgSm from "../assets/images/cinemahub-bg-sm.png";
import blahblahLogo from "../assets/icons/blahblah-logo.svg";
import blahblahBgLg from "../assets/images/blahblah-bg-lg.png";
import blahblahBgSm from "../assets/images/blahblah-bg-sm.png";
import uiKitLogo from "../assets/icons/ui-kit-Logo.svg";
import uiKitBgLg from "../assets/images/uikit-bg-lg.png";
import uiKitBgSm from "../assets/images/uikit-bg-sm.png";
import useDevice from "../hooks/useDevice";
import ChevronIcon from "../assets/icons/ChevronIcon";
import { CarouselInfinite } from "parkchanho-react-ui-kit";

interface ProjectSectionProps {
  initialProject?: string;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ initialProject }) => {
  const { isDesktop, isTablet } = useDevice();

  const projects = [
    {
      title: "cinemahub",
      logoImage: cinemahubLogo,
      bgImage: isDesktop || isTablet ? cinemahubBgLg : cinemahubBgSm,
      index: 1,
    },
    {
      title: "blahblah",
      logoImage: blahblahLogo,
      bgImage: isDesktop || isTablet ? blahblahBgLg : blahblahBgSm,
      index: 2,
    },
    {
      title: "uikit",
      logoImage: uiKitLogo,
      bgImage: isDesktop || isTablet ? uiKitBgLg : uiKitBgSm,
      index: 4,
    },
  ];

  const aspectRatioClass =
    isDesktop || isTablet ? "aspect-[16/9]" : "aspect-[9/16]";

  return (
    <section
      id="project"
      className="flex flex-col items-center w-full bg-slate-100 pb-32 relative"
    >
      <CarouselInfinite className="relative">
        <CarouselInfinite.ItemContainer>
          <CarouselInfinite.ItemList>
            {projects.map((project) => (
              <CarouselInfinite.Item
                key={project.title}
                className={`w-full px-4 md:px-8 2xl:w-[1440px] ${aspectRatioClass}`}
              >
                {() => (
                  <Projects
                    title={project.title}
                    logoImage={project.logoImage}
                    bgImage={project.bgImage}
                    carouselIndex={project.index}
                    isModalOpen={initialProject === project.title}
                  />
                )}
              </CarouselInfinite.Item>
            ))}
          </CarouselInfinite.ItemList>
        </CarouselInfinite.ItemContainer>
        <CarouselInfinite.Navigator className="w-full max-w-[1440px] absolute top-[calc(50%-32px)] left-1/2 transform -translate-x-1/2 flex items-center justify-between gap-2 px-8">
          {(handlePrev, handleNext, isTransitioning) => (
            <>
              <button
                className="bg-[rgba(0,0,0,0.5)] rounded-full opacity-50 hover:opacity-100 duration-300 ease-in-out backdrop-blur-sm p-2 cursor-pointer"
                onClick={handlePrev}
                disabled={isTransitioning}
              >
                <ChevronIcon height="40px" color="#fff" thickness="3" />
              </button>
              <button
                className="bg-[rgba(0,0,0,0.5)] rounded-full opacity-50 hover:opacity-100 duration-300 ease-in-out backdrop-blur-sm p-2 cursor-pointer"
                onClick={handleNext}
                disabled={isTransitioning}
              >
                <ChevronIcon
                  height="40px"
                  color="#fff"
                  thickness="3"
                  className="rotate-180"
                />
              </button>
            </>
          )}
        </CarouselInfinite.Navigator>
        <CarouselInfinite.Indicator
          styleType="dots"
          dotSize={16}
          activeColor="oklch(62.3% 0.214 259.815)"
        />
      </CarouselInfinite>
    </section>
  );
};

export default ProjectSection;
