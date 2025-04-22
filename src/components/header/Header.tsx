import useDevice from "../../hooks/useDevice";
import HeaderDesktopAndTablet from "./HeaderDesktopAndTablet";
import HeaderMobile from "./HeaderMobile";

const Header = () => {
  const { isDesktop, isTablet } = useDevice();
  return (
    <>{isDesktop || isTablet ? <HeaderDesktopAndTablet /> : <HeaderMobile />}</>
  );
};
export default Header;
