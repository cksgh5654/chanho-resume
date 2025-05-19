import GithubLogo from "../assets/icons/GithubLogo";
import profileImg from "../assets/images/profile.png";
import useDevice from "../hooks/useDevice";
import illustrator from "../assets/icons/adobe illustrator.svg";
import photoshop from "../assets/icons/adobe photoshop.svg";
import premiere from "../assets/icons/adobe premiere.svg";
import xd from "../assets/icons/adobe xd.svg";
import nameIcon from "../assets/icons/name.svg";
import callIcon from "../assets/icons/call.svg";
import mailIcon from "../assets/icons/mail.svg";
import NotionLogo from "../assets/icons/NotionLogo";

const BasicInformationSection = () => {
  const { isDesktop, isDesktopLg, isDesktopXl, isDesktop2xl, isTablet } =
    useDevice();
  return (
    <section
      id="basic-information"
      className="flex flex-col items-center pt-32 gap-16"
    >
      <div className="w-full max-w-[1440px] px-4 md:px-8 flex flex-col justify-center gap-8">
        <h1 className="text-5xl font-bold text-gray-600 leading-snug">
          안녕하세요 UI/UX에 강한&nbsp;
          {(isDesktop || isTablet) && <br />}
          프론트엔드 개발자
          <span className="text-gray-800"> 박찬호</span>입니다.
        </h1>
        <p className="text-lg text-gray-700">
          안녕하세요 웹디자인 경험을 바탕으로 UI/UX에 강한 프론트엔드 개발자로
          성장하고자 하는 박찬호입니다.&nbsp;
          {(isDesktop || isTablet) && <br />}
          저는 4년 6개월 동안 병원 광고대행사에서 웹 기획 및 디자인하며 보다
          직관적이고 사용하기 편리한 웹사이트를 만드는 것에 관심을
          가져왔습니다.&nbsp;
          {isDesktop && <br />}
          이러한 경험을 통해 프론트엔드 개발에 대한 흥미가 생겼고, 프론트엔드
          개발자로 성장하기 위해 부트캠프를 통해 React와 TypeScript를 활용한 웹
          애플리케이션 개발 역량을 쌓았습니다.
          {(isDesktop || isDesktopLg) && <br />}도전적이고 창의적인 성향을
          바탕으로 새로운 기술 트렌드에 빠르게 적응하며, 사용자 중심의 UI/UX를
          구현하는 데 큰 열정을 가지고 있습니다.
          {(isDesktopXl || isDesktop2xl) && <br />}세부사항에 주의를
          기울이면서도 전체적인 방향성을 놓치지 않는 균형 잡힌 접근을
          추구합니다.{(isDesktopXl || isDesktop2xl) && <br />} 협업 과정에서는
          열린 자세로 의견을 나누고, 팀의 목표 달성을 위해 주도적으로
          기여하겠습니다.
        </p>
      </div>
      <div className="w-full grid grid-rows-[712px_308px_228px] px-4 md:grid-cols-2 md:grid-rows-[392px_308px] gap-4 max-w-[1440px] md:px-8">
        <div className="md:col-span-2 grid md:grid-cols-[1fr_1fr] gap-8 w-full bg-slate-100 p-8 rounded-2xl">
          <div className="flex justify-center items-center">
            <div className="w-full h-[328px] flex items-end justify-center bg-white rounded-full overflow-hidden">
              <img src={profileImg} alt="박찬호" className="h-[300px]" />
            </div>
          </div>
          <div className="flex flex-col gap-8 justify-center items-center md:items-start md:pl-10">
            <h2 className="text-3xl font-semibold text-gray-800">기본 정보</h2>
            <dl className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <dt>
                  <img src={nameIcon} alt="name" className="w-6" />
                </dt>
                <dd>박찬호</dd>
              </div>
              <div className="flex items-center gap-2">
                <dt>
                  <img src={mailIcon} alt="mail" className="w-6" />
                </dt>
                <dd>qkrcksgh5654@gmail.com</dd>
              </div>
              <div className="flex items-center gap-2">
                <dt>
                  <img src={callIcon} alt="phone" className="w-6" />
                </dt>
                <dd>010-2328-5654</dd>
              </div>
            </dl>
            <li className="flex items-center">
              <ul>
                <a
                  href="https://github.com/cksgh5654?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubLogo className="h-10" />
                </a>
              </ul>
              <ul>
                <a
                  href="https://catkin-form-486.notion.site/UI-UX-1a22ee14f61580a09577d9509b8e57a5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <NotionLogo className="h-9" />
                </a>
              </ul>
            </li>
          </div>
        </div>
        <div className="bg-slate-100 p-8 rounded-2xl">
          <h2 className="text-3xl font-semibold text-gray-800 pb-8 text-center md:text-start">
            경력
          </h2>
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl text-center md:text-start font-semibold text-gray-700">
              웹디자인, 광고디자인
            </h3>
            <p className="text-gray-600 text-center md:text-start">
              나인다세해
            </p>
            <p className="text-gray-500 text-center md:text-start">
              2019년 9월 ~ 2024년 2월
            </p>
            <div className="flex justify-center md:justify-start gap-3 pt-4">
              <img src={illustrator} alt="illustrator" />
              <img src={photoshop} alt="photoshop" />
              <img src={premiere} alt="premiere" />
              <img src={xd} alt="xd" />
            </div>
          </div>
        </div>
        <div className="bg-slate-100 p-8 rounded-2xl">
          <h2 className="text-3xl font-semibold text-gray-800 pb-8 text-center md:text-start">
            학력
          </h2>
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl text-center md:text-start font-semibold text-gray-700">
              시각디자인 전공 (전문학사)
            </h3>
            <p className="text-gray-600 text-center md:text-start">
              학점은행제
            </p>
            <p className="text-gray-500 text-center md:text-start">
              2015년 4월 ~ 2024년 2월
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BasicInformationSection;
