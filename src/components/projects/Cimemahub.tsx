import bgimg from "../../assets/images/cinemahub-modal-bg.jpg";
import bgimgmobile from "../../assets/images/cinemahub-modal-bg-m.png";
import logo from "../../assets/icons/cinemahub-logo.svg";
import githubLogo from "../../assets/icons/github.svg";
import ChevronIcon from "../../assets/icons/ChevronIcon";
import { useEffect, useRef, useState } from "react";
import useDevice from "../../hooks/useDevice";
import { cinemahubImg } from "@consts/projectImg";
import { otherWepImg } from "@consts/projectImg";
import watchapediaLogo from "../../assets/icons/watchpedia.svg";
import tmdbLogo from "../../assets/icons/tmdb.svg";
import imdbLogo from "../../assets/icons/imdb.svg";
import XIcon from "../../assets/icons/XIcon";
import { CarouselXscroll } from "parkchanho-react-ui-kit";

const Cinemahub = () => {
  const baseRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const itemListRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { isMobile, isDesktop, isTablet } = useDevice();
  const [baseRect, setBaseRect] = useState(new DOMRect());
  const [modalRect, setModalRect] = useState(new DOMRect());
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedDescription, setSelectedDescription] = useState<string | null>(
    null
  );

  const calculateBaseDivRect = () => {
    if (!baseRef.current) return;
    setBaseRect(baseRef.current.getBoundingClientRect());
    if (modalRef.current) {
      setModalRect(modalRef.current.getBoundingClientRect());
    }
  };

  useEffect(() => {
    calculateBaseDivRect();

    const handleResize = () => {
      calculateBaseDivRect();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const openModal = (imgUrl: string, description: string) => {
    setSelectedImage(imgUrl);
    setSelectedDescription(description);
    dialogRef.current?.showModal();
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedDescription(null);
    dialogRef.current?.close();
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    const dialogDimensions = dialogRef.current?.getBoundingClientRect();
    if (
      dialogDimensions &&
      (e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom)
    ) {
      closeModal();
    }
  };

  return (
    <section ref={modalRef} className="pb-32">
      <div
        className="flex justify-center md:justify-start items-end w-full bg-cover bg-left h-[640px] md:h-[720px] rounded-t-2xl"
        style={
          isMobile
            ? { backgroundImage: `url(${bgimgmobile})` }
            : { backgroundImage: `url(${bgimg})` }
        }
      >
        <div className="flex items-center md:items-start flex-col gap-6 pb-12 md:pl-24 md:pb-16">
          <img src={logo} alt="cinemahub logo" className="h-20 md:h-30" />
          <a
            href="https://cinemahub.chanhoportfolio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center bg-blue-600 w-fit px-12 py-3 text-lg text-white rounded-full hover:bg-blue-700 cursor-pointer transition duration-300"
          >
            홈페이지 바로가기
          </a>
          <div className="flex gap-8">
            <a
              href="https://github.com/cksgh5654/cinemahub-front"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <img src={githubLogo} alt="github" className="w-6" />
              frontend
            </a>
            <a
              href="https://github.com/cksgh5654/cinemahub-back"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <img src={githubLogo} alt="github" className="w-6" />
              backend
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-12 pt-16 px-4 md:px-8">
        <h3 className="text-4xl font-bold text-slate-700">기본 정보</h3>
        <dl className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <dt className="text-xl font-semibold text-slate-700 pb-2">
              프론트엔드
            </dt>
            <dd>
              <li className="flex gap-2 flex-wrap">
                <ul className="bg-blue-400 text-white px-2 py-1 rounded-xl">
                  Vite
                </ul>

                <ul className="bg-blue-400 text-white px-2 py-1 rounded-xl">
                  React
                </ul>
                <ul className="bg-blue-400 text-white px-2 py-1 rounded-xl">
                  TailwindCSS
                </ul>
                <ul className="bg-blue-400 text-white px-2 py-1 rounded-xl">
                  Zustand
                </ul>
                <ul className="bg-blue-400 text-white px-2 py-1 rounded-xl">
                  Axios
                </ul>
                <ul className="bg-blue-400 text-white px-2 py-1 rounded-xl">
                  React Router
                </ul>
              </li>
            </dd>
          </div>
          <div>
            <dt className="text-xl font-semibold text-slate-700 pb-2">
              백엔드
            </dt>
            <dd>
              <li className="flex gap-2 flex-wrap">
                <ul className="bg-blue-400 text-white px-2 py-1 rounded-xl">
                  node.js
                </ul>

                <ul className="bg-blue-400 text-white px-2 py-1 rounded-xl">
                  Express
                </ul>
                <ul className="bg-blue-400 text-white px-2 py-1 rounded-xl">
                  MongoDB
                </ul>
                <ul className="bg-blue-400 text-white px-2 py-1 rounded-xl">
                  Mongoose
                </ul>
              </li>
            </dd>
          </div>
          <div>
            <dt className="text-xl font-semibold text-slate-700 pb-2">기타</dt>
            <dd>
              <li className="flex gap-2 flex-wrap">
                <ul className="bg-blue-400 text-white px-2 py-1 rounded-xl">
                  Figma
                </ul>
                <ul className="bg-blue-400 text-white px-2 py-1 rounded-xl">
                  Notion
                </ul>
                <ul className="bg-blue-400 text-white px-2 py-1 rounded-xl">
                  discord
                </ul>
              </li>
            </dd>
          </div>
          <div>
            <dt className="text-xl font-semibold text-slate-700 pb-2">기간</dt>
            <dd className="text-slate-500">2025년 2월 11일 ~ 3월 5일</dd>
          </div>
          <div>
            <dt className="text-xl font-semibold text-slate-700 pb-2">팀원</dt>
            <dd className="text-slate-500">4명</dd>
          </div>
        </dl>
      </div>
      <div className="flex flex-col gap-12 pt-32 px-4 md:px-8">
        <h3 className="text-4xl font-bold text-slate-700">프로젝트 설명</h3>
        <p className="text-slate-500">
          다양한 국가의 트랜드 영화와 영화인의 정보를 확인할 수 있고 영화의
          리뷰와 유저간의 팔로우 기능을 통해 {(isDesktop || isTablet) && <br />}
          유저의 관심있는 영화와 영화인, 리뷰 내역을 확인하며 관심 영화를
          공유하는 공간으로 만들고자 했습니다.
        </p>
      </div>
      <div className="flex flex-col gap-16 pt-32 px-4 md:px-8">
        <h3 className="text-4xl font-bold text-slate-700">담당 페이지</h3>
        <div className="w-full flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h4 className="text-3xl font-semibold text-slate-700">
              메인 페이지: 동적 UI와 데이터 안정성 문제 해결
            </h4>
            <p className="text-slate-500">
              사용자에게 시각적으로 매력적이고 몰입감 있는 첫인상을 제공하면서,
              다양한 화면 크기에 맞는 유연한 UI를 구현해야 했습니다.
              {isDesktop && <br />} 또한, 외부 API 의존으로 인해 데이터 호출
              실패 시 사용자 경험이 저하될 가능성이 있었습니다.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-100 rounded-xl p-4">
              <div className="flex flex-col justify-center gap-4 rounded-xl px-4 xl:pl-12 py-8">
                <h5 className="text-2xl font-semibold text-slate-700">
                  사이즈의 한계가 있는
                  <br />
                  다른 웹사이트들
                </h5>
                <p className="text-slate-500">
                  4K 모니터로 확인한 웹 페이지는 {isDesktop && <br />}
                  가로 컨텐츠 영역의 크기의 한계가 있는 모습입니다.
                </p>
              </div>
              <figure className="flex relative flex-col gap-4 rounded-xl">
                <img
                  className="rounded-xl shadow-lg"
                  src={otherWepImg[4].url}
                  alt={otherWepImg[4].description}
                />
                <figcaption className="absolute bottom-4 left-4">
                  <img
                    className="h-8"
                    src={watchapediaLogo}
                    alt="watchapediaLogo"
                  />
                </figcaption>
              </figure>
              <figure className="flex relative flex-col gap-4 rounded-xl">
                <img
                  className="rounded-xl shadow-lg"
                  src={otherWepImg[2].url}
                  alt={otherWepImg[2].description}
                />
                <figcaption className="absolute bottom-4 left-4">
                  <img className="h-9" src={tmdbLogo} alt="tmdbLogo" />
                </figcaption>
              </figure>
              <figure className="flex relative flex-col gap-4 rounded-xl ">
                <img
                  className="rounded-xl bshadow-lg"
                  src={otherWepImg[0].url}
                  alt={otherWepImg[0].description}
                />
                <figcaption className="absolute bottom-4 left-4">
                  <img className="h-16" src={imdbLogo} alt="imdbLogo" />
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-xl">
            <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-8">
              <figure className="flex relative flex-col gap-4 rounded-xl">
                <img
                  className="rounded-xl shadow-lg"
                  src={cinemahubImg[0].url}
                  alt={cinemahubImg[0].description}
                />
                <figcaption className="absolute bottom-4 left-4 text-black">
                  메인 페이지
                </figcaption>
              </figure>
              <div className="flex flex-col px-8 justify-center gap-4 rounded-xl xl:pl-0 xl:pr-8 py-8">
                <h5 className="text-2xl font-semibold text-slate-700">
                  동적 UI 최적화
                </h5>
                <p className="text-slate-500">
                  첫 번째 섹션의 오늘의 트렌드 영화 예고편은 브라우저 width에
                  맞게 동적으로 크기를 조정하도록 구현했습니다. 이를 통해 모든
                  디바이스에서 예고편이 화면에 꽉 차게 재생되어 시각적 몰입감을
                  극대화했습니다. 장르별 영화, 이번 주 트렌드 영화, 인기 배우
                  섹션은 width 제한을 하지않아 고해상도 화면일 수록 더 많은
                  콘텐츠를 한눈에 확인할 수 있도록 했습니다.
                </p>
                <h5 className="text-2xl pt-8 font-semibold text-slate-700">
                  데이터 안정성 강화
                </h5>
                <p className="text-slate-500">
                  TMDB API 호출 실패 가능성에 대비해 매일 자정에 영화 및 영화인
                  데이터를 MongoDB에 업데이트하도록 설정했습니다. 트렌드 영화
                  데이터는 빠른 접근을 위해 LRUCache를 활용해 메모리에 캐싱하여
                  API 호출 부하를 줄이고 응답 속도를 개선했습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h4 className="text-3xl font-semibold text-slate-700">
              영화 및 영화인 상세 페이지: 데이터 중복 호출과 UX 문제 해결
            </h4>
            <p className="text-slate-500">
              상세 페이지에서 매번 TMDB API를 호출하면 응답 시간이 길어지고, API
              호출 횟수 제한에 걸릴 위험이 있었습니다.
              {isDesktop && <br />} 또한, 모달 형태의 상세 페이지를 제공하면서도
              URL 공유와 같은 페이지 수준의 기능을 지원해야 했습니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <figure className="flex relative flex-col gap-4 rounded-xl">
              <img
                className="rounded-xl"
                src={cinemahubImg[2].url}
                alt={cinemahubImg[2].description}
              />
              <figcaption className="absolute bottom-4 left-4 text-white">
                영화 상세페이지
              </figcaption>
            </figure>
            <figure className="flex relative flex-col gap-4 rounded-xl">
              <img
                className="rounded-xl"
                src={cinemahubImg[3].url}
                alt={cinemahubImg[3].description}
              />
              <figcaption className="absolute bottom-4 left-4 text-white">
                영화인 상세페이지
              </figcaption>
            </figure>
            <div className="flex flex-col md justify-center gap-4">
              <h5 className="text-2xl font-semibold text-slate-700">
                데이터 호출 최적화
              </h5>
              <p className="text-slate-500">
                사용자가 상세 정보를 처음 클릭하면 영화 상세 정보, 스틸 이미지,
                포스터, 인물 상세 정보, 참여 영화, 인물 사진 데이터를 각각
                MongoDB에 저장하도록 설계했습니다. 이후 동일한 데이터 요청 시
                DB에서 즉시 불러와 API 호출 횟수를 최소화했습니다. 이미지나,
                관련 영화 데이터는 페이지네이션으로 MongoDB에서 해당 페이지의
                데이터만 가져와 많은 양의 데이터를 한꺼번에 로드하지 않도록
                설정했습니다. 이를 통해 응답 속도를 높이고 API 사용량을
                효율적으로 관리했습니다.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h5 className="text-2xl font-semibold text-slate-700">UX 개선</h5>
              <p className="text-slate-500">
                상세 페이지를 1280px 크기의 모달로 구현하여 직관적인 UI를
                제공했습니다. 모달 외부 클릭 시 이전 화면으로 돌아가도록 설정해
                사용자 편의성을 높였습니다. 동시에, 모달이 독립된 페이지처럼
                동작하도록 URL 공유가 가능하게 하여 접근성을 강화했습니다.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h4 className="text-3xl font-semibold text-slate-700">
              카테고리별 영화 페이지: 데이터 로딩과 스케일링 문제 해결
            </h4>
            <p className="text-slate-500">
              대량의 영화 데이터를 효율적으로 표시하면서, 다양한 해상도에서
              최적의 콘텐츠 노출을 보장해야 했습니다. {isDesktop && <br />}
              또한, 한 번에 모든 데이터를 로드하면 성능 저하가 발생할 가능성이
              있었습니다.
            </p>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-8">
            <figure className="flex relative flex-col gap-4 rounded-xl">
              <img
                className="rounded-xl shadow-lg"
                src={cinemahubImg[1].url}
                alt={cinemahubImg[1].description}
              />
              <figcaption className="absolute bottom-4 left-4 text-black">
                장르별 영화 페이지
              </figcaption>
            </figure>
            <div className="flex flex-col xl:justify-center gap-8">
              <div className="flex flex-col gap-4">
                <h5 className="text-2xl font-semibold text-slate-700">
                  유연한 UI 설계
                </h5>
                <p className="text-slate-500">
                  width 제한을 두지 않아 고해상도 화면에서 더 많은 영화 데이터를
                  한눈에 확인할 수 있도록 했습니다. 인기순, 최신순, 이름순 정렬
                  기능을 추가해 사용자 맞춤 탐색을 지원했습니다.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h5 className="text-2xl font-semibold text-slate-700">
                  성능 최적화
                </h5>
                <p className="text-slate-500">
                  MongoDB에 저장된 영화 데이터를 선택한 카테고리별로 쿼리하여
                  데이터 접근 속도를 최적화했습니다. 무한 스크롤을 구현하여 한
                  번에 모든 데이터를 로드하지 않고, 사용자가 스크롤할 때 필요한
                  데이터만 점진적으로 로드하도록 설계했습니다. 이를 통해 초기
                  로딩 속도를 개선하고 서버 부하를 줄였습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-12 pt-32 px-4 md:px-8">
        <h3 className="text-4xl font-bold text-slate-700">시연 영상</h3>
        <iframe
          className="w-full aspect-video rounded-lg"
          src="https://www.youtube.com/embed/FSimkIO0lCE"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="flex flex-col gap-12 pt-32 px-4 md:px-8">
        <h3 ref={baseRef} className="text-4xl font-bold text-slate-700">
          페이지
        </h3>
        <CarouselXscroll
          baseRect={baseRect}
          pixelMove={modalRect.width}
          itemListRef={itemListRef}
          className="group"
        >
          <CarouselXscroll.ItemContainer className="h-full">
            <CarouselXscroll.Items className="flex gap-4">
              {cinemahubImg.map((img, index) => {
                return (
                  <button
                    key={img.description}
                    className="flex justify-center items-center w-[328px] h-full relative"
                    onClick={() => openModal(img.url, img.description)}
                  >
                    <img
                      className="shadow-lg"
                      src={img.url}
                      alt={img.description}
                    />
                    {index < 4 && (
                      <span className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                        담당페이지
                      </span>
                    )}
                  </button>
                );
              })}
            </CarouselXscroll.Items>
          </CarouselXscroll.ItemContainer>
          <CarouselXscroll.Navigator>
            {(prev, next, leftStyle, rightStyle) => (
              <>
                <button
                  className="bg-[rgba(255,255,255,0.5)] rounded-full opacity-0 group-hover:opacity-100 duration-300 ease-in-out b backdrop-blur-sm"
                  style={leftStyle}
                  onClick={prev}
                >
                  <ChevronIcon height="56px" />
                </button>
                <button
                  className="bg-[rgba(255,255,255,0.5)] rounded-full opacity-0 group-hover:opacity-100 duration-300 ease-in-out backdrop-blur-sm"
                  style={rightStyle}
                  onClick={next}
                >
                  <ChevronIcon height="56px" className="rotate-180" />
                </button>
              </>
            )}
          </CarouselXscroll.Navigator>
        </CarouselXscroll>
      </div>

      <dialog
        ref={dialogRef}
        onClick={handleBackdropClick}
        className="rounded-lg bg-transparent backdrop:bg-black backdrop:opacity-80 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        {selectedImage && (
          <div className="relative flex flex-col items-center rounded-lg">
            <img
              src={selectedImage}
              alt={selectedDescription || "Selected image"}
              className="max-w-[80vw] max-h-[80vh] object-contain"
            />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white rounded-full w-8 h-8 flex items-center justify-center"
            >
              <XIcon />
            </button>
          </div>
        )}
      </dialog>
    </section>
  );
};

export default Cinemahub;
