import useMatchMedia from "./useMatchMedia";

const useDevice = () => {
  const isMobile = useMatchMedia("(max-width: 768px)");
  const isTablet = useMatchMedia("(min-width: 769px) and (max-width: 1023px)");
  const isDesktop = useMatchMedia("(min-width: 1024px)");
  const isDesktopLg = useMatchMedia(
    "(min-width: 1024px) and (max-width: 1279px)"
  );
  const isDesktopXl = useMatchMedia(
    "(min-width: 1280px) and (max-width: 1439px)"
  );
  const isDesktop2xl = useMatchMedia("(min-width: 1440px)");

  return {
    isMobile,
    isTablet,
    isDesktop,
    isDesktopLg,
    isDesktopXl,
    isDesktop2xl,
  };
};

export default useDevice;
