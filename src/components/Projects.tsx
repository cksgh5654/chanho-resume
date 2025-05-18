import { FC, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import XIcon from "../assets/icons/XIcon";
import Cinemahub from "./projects/Cinemahub";
import Workplus from "./projects/Workplus";
import Blahblah from "./projects/Blahblah";
import { Modal } from "parkchanho-react-ui-kit";
import Uikit from "./projects/UiKit";

interface ProjectsProps {
  title: string;
  logoImage: string;
  bgImage: string;
  carouselIndex: number;
  isModalOpen?: boolean;
}

const Projects: FC<ProjectsProps> = ({
  title,
  logoImage,
  bgImage,
  carouselIndex,
  isModalOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(isModalOpen);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === `/project/${title.toLowerCase()}`) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [location.pathname, title]);

  const handleOpenModal = () => {
    setIsOpen(true);
    navigate(`/project/${title.toLowerCase()}`);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    navigate("/", { replace: true });
  };

  return (
    <div
      className="flex justify-center items-center w-full h-full bg-contain bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex flex-col items-center justify-center gap-8">
        <img
          src={logoImage}
          alt={title}
          className="h-[10vw] md:h-[5vw] max-h-[120px]"
        />

        <Modal
          onOpenModal={handleOpenModal}
          onCloseModal={handleCloseModal}
          open={isOpen}
        >
          <Modal.Backdrop className="z-1 bg-black/50 backdrop-blur-lg" />
          <Modal.Trigger>
            <button className="bg-blue-600 px-10 py-3 text-lg text-white rounded-full hover:bg-blue-700 cursor-pointer transition duration-300">
              자세히 보기
            </button>
          </Modal.Trigger>
          <Modal.Content className="z-2 md:my-[128px] top-0 w-full md:w-[90%] max-w-[1280px] bg-white md:rounded-2xl">
            <Modal.Close>
              <XIcon className="z-3 sticky md:fixed top-4 translate-x-[calc(100vw-64px)] md:translate-x-[calc(90vw-64px)] w-12 cursor-pointer" />
            </Modal.Close>
            {carouselIndex === 1 ? (
              <Cinemahub />
            ) : carouselIndex === 2 ? (
              <Blahblah />
            ) : carouselIndex === 3 ? (
              <Workplus />
            ) : carouselIndex === 4 ? (
              <Uikit />
            ) : null}
          </Modal.Content>
        </Modal>
      </div>
    </div>
  );
};

export default Projects;
