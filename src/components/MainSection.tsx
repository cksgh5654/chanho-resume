import video from "../assets/videos/Intro-desktop.mp4";
import videoMobile from "../assets/videos/Introㅡmobile.mp4";
import useDevice from "../hooks/useDevice";

const MainSection = () => {
  const { isDesktop, isTablet } = useDevice();
  return (
    <>
      {isDesktop || isTablet ? (
        <section className="relative w-full h-0 pb-[48%] overflow-hidden">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
            src={video}
            typeof="video/mp4"
            autoPlay
            loop
            muted
          ></video>
        </section>
      ) : (
        <section className="relative w-full h-0 pb-[calc(100vh-48px)] overflow-hidden">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
            src={videoMobile}
            typeof="video/mp4"
            autoPlay
            loop
            muted
          ></video>
        </section>
      )}
    </>
  );
};

export default MainSection;
