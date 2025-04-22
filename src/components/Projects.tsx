import { FC, useState } from "react";
import XIcon from "../assets/icons/XIcon";
import Cinemahub from "./projects/Cimemahub";
import Workplus from "./projects/Workplus";
import Blahblah from "./projects/Blahblah";
import { Modal } from "parkchanho-react-ui-kit";
import Uikit from "./projects/UiKit";

interface ProjectsProps {
  title: string;
  logoImage: string;
  bgImage: string;
  carouselIndex: number;
}

const Projects: FC<ProjectsProps> = ({
  title,
  logoImage,
  bgImage,
  carouselIndex,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
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
          <Modal.Content className="z-2 my-[128px] top-0 w-[90%] max-w-[1280px] bg-white rounded-2xl">
            <Modal.Close>
              <XIcon className="z-3 fixed top-4 right-4 w-12 cursor-pointer" />
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
