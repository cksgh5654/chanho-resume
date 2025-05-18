import bgimg from "../../assets/images/blahblah-modal-bg.jpg";
import bgimgmobile from "../../assets/images/blahblah-modal-bg-m.png";
import logo from "../../assets/icons/blahblah-logo.svg";
import githubLogo from "../../assets/icons/github.svg";
import ChevronIcon from "../../assets/icons/ChevronIcon";
import { useEffect, useRef, useState } from "react";
import useDevice from "../../hooks/useDevice";
import { blahblahImg } from "@consts/projectImg";
import dcinsideLogo from "../../assets/icons/dcinside.svg";
import dcinsideImg from "../../assets/images/blahblahPage/dcinside.png";
import aGlance from "@blahblahPage/main-a-glance.png";
import header from "@blahblahPage/header.png";
import XIcon from "../../assets/icons/XIcon";
import { CarouselXscroll } from "parkchanho-react-ui-kit";

const Blahblah = () => {
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
        <div className="flex flex-col items-center md:items-start gap-6 pb-12 md:pl-24 md:pb-16">
          <img src={logo} alt="blahblah logo" className="w-fit h-20 md:h-30" />
          <a
            href="https://blahblah.chanhoportfolio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center bg-blue-600 w-fit px-12 py-3 text-lg text-white rounded-full hover:bg-blue-700 cursor-pointer transition duration-300"
          >
            홈페이지 바로가기
          </a>
          <div className="flex gap-8">
            <a
              href="https://github.com/cksgh5654/blahblah-front"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <img src={githubLogo} alt="github" className="w-6" />
              frontend
            </a>
            <a
              href="https://github.com/cksgh5654/blahblah-backend"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <img src={githubLogo} alt="github" className="w-6" />
              backend
            </a>
            <a
              href="https://github.com/cksgh5654/blahblah-ui-kit"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <img src={githubLogo} alt="github" className="w-6" />
              blahblah-ui-kit
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
            <dd className="text-slate-500">2025년 1월 3일 ~ 16일</dd>
          </div>
          <div>
            <dt className="text-xl font-semibold text-slate-700 pb-2">팀원</dt>
            <dd className="text-slate-500">3명</dd>
          </div>
        </dl>
      </div>
      <div className="flex flex-col gap-12 pt-32 px-4 md:px-8">
        <h3 className="text-4xl font-bold text-slate-700">프로젝트 설명</h3>
        <p className="text-slate-500">
          블라블라는 사용자가 관심 주제에 따라 카테고리별 게시판을 생성하고,
          {(isDesktop || isTablet) && <br />}
          매니저로서 게시글과 멤버를 관리하거나, 일반 멤버로서 활동할 수 있는
          플랫폼입니다.
          {(isDesktop || isTablet) && <br />} 사용자에게 커뮤니티를 운영하거나
          참여하며 관심사를 자유롭게 공유하며 소통하는 공간을 제공합니다.
        </p>
      </div>
      <div className="flex flex-col gap-16 pt-32 px-4 md:px-8">
        <h3 className="text-4xl font-bold text-slate-700">담당 페이지</h3>
        <div className="w-full flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h4 className="text-3xl font-semibold text-slate-700">
              메인 페이지: UI 유연성과 데이터 로딩 최적화
            </h4>
            <p className="text-slate-500">
              다양한 해상도에서 최적의 콘텐츠 노출을 제공하면서, 대량의 게시판
              데이터를 효율적으로 로드해야 했습니다.
              {(isDesktop || isTablet) && <br />} 또한, 사용자가 원하는
              카테고리의 게시판을 빠르게 탐색할 수 있어야 했으며, URL 공유 및
              새로고침 시 동일한 상태를 유지해야 했습니다.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 bg-slate-100 rounded-xl p-8">
              <div className="flex flex-col justify-center gap-4 px-4 xl:pl-12 py-8">
                <h5 className="text-2xl font-semibold text-slate-700">
                  사이즈의 한계가 있는
                  <br />
                  다른 웹사이트
                </h5>
                <p className="text-slate-500">
                  4K 모니터로 확인한 웹 페이지는 {isDesktop && <br />}
                  가로 컨텐츠 영역의 크기의 한계가 있는 모습입니다.
                </p>
              </div>
              <figure className="flex relative flex-col gap-4 rounded-xl">
                <img
                  className="rounded-xl shadow-lg"
                  src={dcinsideImg}
                  alt="dcinside main page"
                />
                <figcaption className="absolute bottom-4 left-4">
                  <img className="h-5" src={dcinsideLogo} alt="dcinside logo" />
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-xl">
            <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-8">
              <div className="flex flex-col justify-center gap-4">
                <figure className="flex relative flex-col gap-4 rounded-xl bg-slate-100">
                  <img
                    className="rounded-xl shadow-lg"
                    src={blahblahImg[0].url}
                    alt={blahblahImg[0].description}
                  />
                  <figcaption className="absolute bottom-4 left-4 text-slate-600">
                    메인페이지
                  </figcaption>
                </figure>
                <figure className="flex relative flex-col gap-4 rounded-xl bg-slate-100">
                  <img
                    className="rounded-xl shadow-lg"
                    src={aGlance}
                    alt="메인페이지 게시판 한눈에 보기"
                  />
                  <figcaption className="absolute bottom-4 left-4 text-slate-600">
                    메인페이지 게시판 한눈에 보기
                  </figcaption>
                </figure>
              </div>
              <div className="flex flex-col px-4 md:px-8 justify-center gap-4 rounded-xl xl:pl-0 xl:pr-8 py-8">
                <h5 className="text-2xl font-semibold text-slate-700">
                  유연한 UI 설계
                </h5>
                <p className="text-slate-500">
                  게시판 카드에 대표 이미지를 크게 삽입하여 시각적으로 직관적인
                  식별이 가능하도록 했습니다. width 제한을 제거하여 고해상도
                  모니터에서 더 많은 게시판 카드를 한눈에 볼 수 있도록
                  구현했습니다. 카테고리 목록은 횡방향 스크롤로 제공하여 화면
                  크기에 상관없이 모든 카테고리에 접근 가능하도록 했습니다.
                </p>
                <h5 className="text-2xl pt-8 font-semibold text-slate-700">
                  데이터 로딩 최적화
                </h5>
                <p className="text-slate-500">
                  무한 스크롤을 적용하여 초기 로딩 시 모든 데이터를 불러오지
                  않고, 사용자가 스크롤할 때 필요한 데이터만 점진적으로
                  로드했습니다. 이를 통해 초기 로딩 속도를 높이고 서버 부하를
                  줄였습니다.
                </p>
                <h5 className="text-2xl pt-8 font-semibold text-slate-700">
                  URL 상태 관리
                </h5>
                <p className="text-slate-500">
                  카테고리별 경로를 "/연예"와 같이 분할하여, 새로고침이나 URL
                  공유 시 해당 카테고리의 게시판 목록이 즉시 표시되도록
                  했습니다. 이를 통해 사용자 경험이 끊기지 않고 일관되게
                  유지되었습니다.
                </p>
                <h5 className="text-2xl pt-8 font-semibold text-slate-700">
                  탐색 편의성
                </h5>
                <p className="text-slate-500">
                  페이지네이션 형태의 "게시판 한눈에 보기"를 추가하여 게시판
                  제목만 나열한 간소화된 뷰를 제공, 사용자가 빠르게 원하는
                  게시판을 찾을 수 있도록 했습니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h4 className="text-3xl font-semibold text-slate-700">
              헤더 검색창: 검색 부하와 사용자 편의성 문제 해결
            </h4>
            <p className="text-slate-500">
              원하는 게시판의 이름을 빠르게 찾기 위한 검색 창이 필요했습니다.
              {(isDesktop || isTablet) && <br />}
              헤더에 검색 기능에서 검색 결과 페이지로 가기 전 자동완성 기능에서
              빈번한 입력으로 서버에 과도한 요청이 발생할 가능성이 있었습니다.
            </p>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-8">
            <figure className="flex relative flex-col gap-4 rounded-xl">
              <img
                className="rounded-xl shadow-lg"
                src={header}
                alt="헤더 검색창"
              />
              <figcaption className="absolute bottom-4 left-4 text-black">
                헤더 검색창
              </figcaption>
            </figure>
            <div className="flex flex-col xl:justify-center gap-8">
              <div className="flex flex-col gap-4">
                <h5 className="text-2xl font-semibold text-slate-700">
                  검색 부하 최소화
                </h5>
                <p className="text-slate-500">
                  검색 결과 페이지로 이동 전, 검색 결과 미리보기 기능을 추가하여
                  입력 중 실시간으로 결과를 확인할 수 있도록 UX를 개선했습니다.
                  검색 결과는 디바운스를 300ms로 설정하여 사용자가 입력을 멈춘
                  후 300ms가 지나야 요청이 전송되도록 했습니다. 이를 통해
                  불필요한 API 호출을 줄이고 서버 부하를 최소화했습니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <h4 className="text-3xl font-semibold text-slate-700">
              검색 결과 페이지: 일관된 UX와 데이터 표시 문제 해결
            </h4>
            <p className="text-slate-500">
              검색 결과 페이지가 메인 페이지와 유사한 UI를 유지하면서도, 검색된
              게시판 데이터를 효율적으로 표시해야 했습니다.
              {(isDesktop || isTablet) && <br />} 다양한 해상도에서 최적의
              콘텐츠 노출이 필요했습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-8">
            <figure className="flex relative flex-col gap-4 rounded-xl">
              <img
                className="rounded-xl shadow-lg"
                src={blahblahImg[1].url}
                alt={blahblahImg[1].description}
              />
              <figcaption className="absolute bottom-4 left-4 text-black">
                검색 결과 페이지
              </figcaption>
            </figure>
            <div className="flex flex-col xl:justify-center gap-8">
              <div className="flex flex-col gap-4">
                <h5 className="text-2xl font-semibold text-slate-700">
                  일관된 UI 제공
                </h5>
                <p className="text-slate-500">
                  검색 결과 페이지를 메인 페이지와 유사한 디자인으로 구성하여
                  사용자가 익숙한 환경에서 탐색할 수 있도록 했습니다. 게시판
                  대표 이미지를 크게 표시하여 시각적 식별성을 높였습니다.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h5 className="text-2xl font-semibold text-slate-700">
                  유연한 데이터 표시
                </h5>
                <p className="text-slate-500">
                  width 제한을 두지 않아 고해상도 화면에서 더 많은 검색 결과를
                  한눈에 볼 수 있도록 했습니다. 이를 통해 다양한 디바이스에서
                  일관된 경험을 제공했습니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <h4 className="text-3xl font-semibold text-slate-700">
              게시판 상세 페이지: 권한 관리와 데이터 로딩 문제 해결
            </h4>
            <p className="text-slate-500">
              게시판의 가입 상태와 사용자 역할(일반 사용자, 관리자)에 따라 다른
              UI를 동적으로 제공해야 했습니다.
              {(isDesktop || isTablet) && <br />} 또한, 대량의 게시글 데이터를
              효율적으로 로드하면서 사용자 경험을 유지해야 했습니다.
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <figure className="flex relative flex-col gap-4 rounded-xl">
              <img
                className="rounded-xl shadow-lg"
                src={blahblahImg[2].url}
                alt={blahblahImg[2].description}
              />
              <figcaption className="absolute bottom-4 left-4 text-black">
                게시판 상세 페이지
              </figcaption>
            </figure>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 col-span-2">
              <div className="flex flex-col gap-4">
                <h5 className="text-2xl font-semibold text-slate-700">
                  동적 UI 제공
                </h5>
                <p className="text-slate-500">
                  가입하지 않은 사용자에게는 "가입하기" 버튼을 노출하고, 가입이
                  완료된 사용자에게는 버튼을 숨겼습니다. 관리자에게는 "게시판
                  관리자 페이지"로 이동하는 버튼을 표시하여 역할별 맞춤 UI를
                  제공했습니다. 이를 통해 직관적이고 혼란 없는 사용자 경험을
                  구현했습니다.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h5 className="text-2xl font-semibold text-slate-700">
                  게시글 유형 관리
                </h5>
                <p className="text-slate-500">
                  일반글과 관리자 전용 공지글을 탭 메뉴로 구분하여 사용자가
                  원하는 콘텐츠를 쉽게 필터링할 수 있도록 했습니다. 이를 통해
                  콘텐츠 탐색 효율성을 높였습니다.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h5 className="text-2xl font-semibold text-slate-700">
                  효율적인 데이터 로딩
                </h5>
                <p className="text-slate-500">
                  게시글 목록을 페이지네이션 형태로 분할하여 한 번에 모든
                  데이터를 로드하지 않고, 필요한 만큼만 점진적으로 로드했습니다.
                  이를 통해 페이지 로딩 속도를 최적화하고, 대량 데이터 처리 시
                  성능 저하를 방지했습니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h4 className="text-3xl font-semibold text-slate-700">
              게시판 생성 페이지: 품질 관리와 검색 유입 문제 해결
            </h4>
            <p className="text-slate-500">
              누구나 쉽게 게시판을 생성할 수 있도록 하되, 부적절한 콘텐츠가 메인
              페이지에 노출되는 것을 방지해야 했습니다.
              {(isDesktop || isTablet) && <br />} 또한, 게시판의 검색 엔진
              유입을 높일 필요가 있었습니다.
            </p>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-8">
            <figure className="flex relative flex-col gap-4 rounded-xl">
              <img
                className="rounded-xl shadow-lg"
                src={blahblahImg[3].url}
                alt={blahblahImg[3].description}
              />
              <figcaption className="absolute bottom-4 left-4 text-black">
                게시판 생성 페이지
              </figcaption>
            </figure>
            <div className="flex flex-col xl:justify-center gap-8">
              <div className="flex flex-col gap-4">
                <h5 className="text-2xl font-semibold text-slate-700">
                  콘텐츠 품질 관리
                </h5>
                <p className="text-slate-500">
                  게시판 생성자가 주소를 자유롭게 설정할 수 있도록 하여 검색
                  엔진 최적화(SEO)를 강화하고, 외부 유입을 유도했습니다. 그러나
                  생성된 게시판은 관리자의 승인을 거쳐야 메인 페이지에
                  노출되도록 설정하여 불건전한 콘텐츠를 사전에 차단했습니다.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h5 className="text-2xl font-semibold text-slate-700">
                  사용자 친화적 설계
                </h5>
                <p className="text-slate-500">
                  게시판 생성 과정을 직관적으로 구성하여 초보 사용자도 쉽게
                  신청할 수 있도록 했습니다. 이를 통해 다양한 커뮤니티 활성화를
                  유도하면서도 품질 관리를 유지했습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-12 pt-32 px-4 md:px-8">
        <h3 className="text-4xl font-bold text-slate-700">시연 영상</h3>
        <iframe
          className="w-full aspect-video rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/_vsem5gLmm0"
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
              {blahblahImg.map((img, index) => {
                return (
                  <button
                    key={img.description}
                    className="flex justify-center items-center w-[328px] h-full relative"
                    onClick={() => openModal(img.url, img.description)}
                  >
                    <img
                      className="border border-slate-300 rounded-lg"
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
                  className="bg-[rgba(0,0,0,0.5)] rounded-full opacity-0 group-hover:opacity-100 duration-300 ease-in-out b backdrop-blur-sm"
                  style={leftStyle}
                  onClick={prev}
                >
                  <ChevronIcon color="white" height="56px" />
                </button>
                <button
                  className="bg-[rgba(0,0,0,0.5)] rounded-full opacity-0 group-hover:opacity-100 duration-300 ease-in-out backdrop-blur-sm"
                  style={rightStyle}
                  onClick={next}
                >
                  <ChevronIcon
                    color="white"
                    height="56px"
                    className="rotate-180"
                  />
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

export default Blahblah;
