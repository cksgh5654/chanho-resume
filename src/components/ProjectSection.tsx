import Projects from "./Projects";
import cinemahubLogo from "../assets/icons/cinemahub-logo.svg";
import cinemahubBgLg from "../assets/images/cinemahub-bg-lg.png";
import cinemahubBgSm from "../assets/images/cinemahub-bg-sm.png";
import blahblahLogo from "../assets/icons/blahblah-logo.svg";
import blahblahBgLg from "../assets/images/blahblah-bg-lg.png";
import blahblahBgSm from "../assets/images/blahblah-bg-sm.png";
// import workplusLogo from "../assets/icons/workplus-logo.svg";
// import workplusBgLg from "../assets/images/workplus-bg-lg.png";
// import workplusBgSm from "../assets/images/workplus-bg-sm.png";
import uiKitLogo from "../assets/icons/ui-kit-Logo.svg";
import uiKitBgLg from "../assets/images/uikit-bg-lg.png";
import uiKitBgSm from "../assets/images/uikit-bg-sm.png";
import useDevice from "../hooks/useDevice";
import ChevronIcon from "../assets/icons/ChevronIcon";
import { CarouselInfinite } from "parkchanho-react-ui-kit";

const ProjectSection = () => {
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
    // {
    //   title: "workplus",
    //   logoImage: workplusLogo,
    //   bgImage: isDesktop || isTablet ? workplusBgLg : workplusBgSm,
    //   index: 3,
    // },
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
      {/* <div className="w-full max-w-[1440px]">
        <div className="flex flex-col gap-8 px-4 md:px-8 pt-32 pb-8 bg-slate-100 rounded-2xl">
          <h1 className="text-5xl font-bold text-gray-800 leading-snug">
            화면을 가득 채운 경험
          </h1>
          <p className="text-lg text-gray-700">
            대부분의 웹사이트는 1920px 이상의 해상도에서 더 이상 화면을
            적극적으로 활용하지 않습니다. {isDesktop && <br />}
            이는 초고해상도 디스플레이가 점점 보편화되는 시대에 사용자 경험의
            한계로 이어질 수 있다고 생각했습니다. {isDesktop && <br />}저는
            그러한 틀을 깨고, 고해상도 모니터를 사용하는 이용자에게 브라우저의
            넓이를 모두 활용하여,{isDesktop && <br />} 최적화된 UI/UX를 제공하여
            사용자에게 몰입감 있는 경험을 제공하는 것이 목표였습니다.
          </p>
        </div>
      </div> */}

      <CarouselInfinite className=" relative">
        <CarouselInfinite.ItemContainer>
          <CarouselInfinite.ItemList>
            {projects.map((project) => {
              return (
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
                    />
                  )}
                </CarouselInfinite.Item>
              );
            })}
          </CarouselInfinite.ItemList>
        </CarouselInfinite.ItemContainer>
        <CarouselInfinite.Navigator className="w-full max-w-[1440px] absolute top-[calc(50%-32px)] left-1/2 transform -translate-x-1/2 flex items-center justify-between gap-2 px-8">
          {(handlePrev, handleNext, isTransitioning) => (
            <>
              <button
                className="bg-[rgba(0,0,0,0.5)] rounded-full opacity-50 hover:opacity-100 duration-300 ease-in-out backdrop-blur-sm p-2"
                onClick={handlePrev}
                disabled={isTransitioning}
              >
                <ChevronIcon height="40px" color="#fff" thickness="3" />
              </button>

              <button
                className="bg-[rgba(0,0,0,0.5)] rounded-full opacity-50 hover:opacity-100 duration-300 ease-in-out backdrop-blur-sm p-2"
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
