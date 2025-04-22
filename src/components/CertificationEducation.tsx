import MagnifierIcon from "../assets/icons/MagnifierIcon";
import firstCertificateionImage from "../assets/images/certificate1.png";
import secondCertificateionImage from "../assets/images/certificate2.png";
import licenseLogo from "../assets/icons/licenseLogo.svg";
import XIcon from "../assets/icons/XIcon";
import { useState } from "react";
import { Modal } from "parkchanho-react-ui-kit";

const CertificationEducation = () => {
  const [isModal1Open, setIsModal1Open] = useState(false);

  const handleOpenModal1 = () => {
    setIsModal1Open(true);
  };

  const handleCloseModal1 = () => {
    setIsModal1Open(false);
  };

  const [isModal2Open, setIsModal2Open] = useState(false);

  const handleOpenModal2 = () => {
    setIsModal2Open(true);
  };

  const handleCloseModal2 = () => {
    setIsModal2Open(false);
  };

  return (
    <section
      id="education"
      className="flex flex-col items-center w-full relative"
    >
      <div className="w-full max-w-[1440px]">
        <div className="flex flex-col gap-8 px-4 md:px-8 pt-32 pb-8">
          <h1 className="text-5xl text-center md:text-start font-bold text-gray-800 leading-snug">
            교육&자격증
          </h1>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-100 p-8 rounded-2xl">
              <h2 className="text-3xl font-semibold text-gray-800 pb-8 text-center md:text-start">
                교육
              </h2>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl text-center md:text-start font-semibold text-gray-700">
                  엘리스 react 트랙 2기
                </h3>
                <p className="text-gray-500 text-center md:text-start">
                  2024년 9월 30일 ~ 2025년 3월 4일
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="relative group">
                    <img
                      src={firstCertificateionImage}
                      alt="firstCertificateionImage"
                      className="w-full h-auto object-cover rounded-lg"
                    />

                    <Modal
                      onOpenModal={handleOpenModal1}
                      onCloseModal={handleCloseModal1}
                      open={isModal1Open}
                    >
                      <Modal.Backdrop className="z-1 bg-black/50 backdrop-blur-lg" />
                      <Modal.Trigger>
                        <button className="flex justify-center items-center absolute inset-0 bg-blue-500/50 opacity-0 group-hover:opacity-100 group-hover:cursor-pointer transition-opacity duration-300 rounded-lg">
                          <MagnifierIcon className="w-16" />
                        </button>
                      </Modal.Trigger>
                      <Modal.Content
                        fixed
                        className="z-2 top-0 w-[90%] max-w-[700px] bg-white rounded-2xl"
                      >
                        <Modal.Close>
                          <XIcon className="z-3 fixed top-4 right-4 w-12 cursor-pointer" />
                        </Modal.Close>
                        <img
                          src={firstCertificateionImage}
                          alt="firstCertificateionImage"
                        />
                      </Modal.Content>
                    </Modal>
                  </div>
                  <div className="relative group">
                    <img
                      src={secondCertificateionImage}
                      alt="secondCertificateionImage"
                      className="w-full h-auto object-cover rounded-lg"
                    />
                    <Modal
                      onOpenModal={handleOpenModal2}
                      onCloseModal={handleCloseModal2}
                      open={isModal2Open}
                    >
                      <Modal.Backdrop className="z-1 bg-black/50 backdrop-blur-lg" />
                      <Modal.Trigger>
                        <button className="flex justify-center items-center absolute inset-0 bg-blue-500/50 opacity-0 group-hover:opacity-100 group-hover:cursor-pointer transition-opacity duration-300 rounded-lg">
                          <MagnifierIcon className="w-16" />
                        </button>
                      </Modal.Trigger>
                      <Modal.Content
                        fixed
                        className="z-2 top-0 w-[90%] max-w-[700px] bg-white rounded-2xl"
                      >
                        <Modal.Close>
                          <XIcon className="z-3 fixed top-4 right-4 w-12 cursor-pointer" />
                        </Modal.Close>
                        <img
                          src={secondCertificateionImage}
                          alt="secondCertificateionImage"
                        />
                      </Modal.Content>
                    </Modal>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-gradient-to-b from-slate-100 to-slate-300 p-8 rounded-2xl">
              <h2 className="text-3xl font-semibold text-gray-800 pb-8 text-center md:text-start">
                자격증
              </h2>
              <div className="flex flex-col gap-8 text-center md:text-start">
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-semibold text-gray-700">
                    시각디자인산업기사
                  </h3>
                  <p className="text-gray-600">한국산업인력공단</p>
                  <p className="text-gray-500">2019년 12월 20일</p>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-semibold text-gray-700">
                    컬러리스트산업기사
                  </h3>
                  <p className="text-gray-600">한국산업인력공단</p>
                  <p className="text-gray-500">2023년 9월 1일</p>
                </div>
              </div>
              <div className="w-full h-full flex items-center justify-center pt-8">
                <img src={licenseLogo} alt="license" className="w-[50%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CertificationEducation;
