import bgimg from "../../assets/images/uikit-modal-bg.jpg";
import bgimgmobile from "../../assets/images/uikit-modal-bg-m.png";
import logo from "../../assets/icons/ui-kit-Logo.svg";
import useDevice from "../../hooks/useDevice";
import {
  Accordion,
  Breadcrumb,
  Calendar,
  CarouselInfinite,
  CarouselXscroll,
  Pagination,
  Select,
  Tabs,
  useToast,
} from "parkchanho-react-ui-kit";
import { ReactNode, useEffect, useRef, useState } from "react";
import ChevronIcon from "../../assets/icons/ChevronIcon";

type SelectedItem = {
  label: ReactNode;
  value: string;
};

const totalItems = 400;
const pageSize = 10;

const dummyData = Array.from(
  { length: totalItems },
  (_, i) => `아이템 ${i + 1}`
);

const Uikit = () => {
  const { isMobile, isDesktop, isTablet } = useDevice();
  const { toast } = useToast();
  const [_selectDate, setSelectDate] = useState<Date | null>(null);

  const [currentPage, setCurrentPage] = useState(0);
  const baseRef = useRef<HTMLHeadingElement>(null);
  const [baseRect, setBaseRect] = useState(new DOMRect());
  const [modalRect, setModalRect] = useState(new DOMRect());
  const itemListRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [selectedItem, setSelectedItem] = useState<SelectedItem>({
    label: "선택한 아이템 1",
    value: "item 1",
  });

  const startIdx = currentPage * pageSize;
  const endIdx = startIdx + pageSize;
  const currentPageItems = dummyData.slice(startIdx, endIdx);

  const [selectedValue, setSelectedValue] = useState<string>("1");

  const handleChangeDate = (index: Date) => {
    setSelectDate(index);
  };

  const handleChangeTab = (index: number) => {
    console.log(`Tab changed to index: ${index}`);
  };

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

  const handleCopy = () => {
    navigator.clipboard.writeText("npm i parkchanho-react-ui-kit");
    toast(
      {
        title: "복사 완료!",
        description: "클립보드에 명령어가 복사되었습니다.",
        duration: 3000,
      },
      {
        position: "top-center",
      }
    );
  };

  const handleToast = () => {
    toast(
      {
        title: "토스트 타이틀",
        description: "토스트 설명",
        duration: 3000,
      },
      {
        position: "bottom-center",
      }
    );
  };

  const handleChangeValue = (selectedValue: string) => {
    setSelectedValue(selectedValue);
    console.log(selectedValue);
  };

  const handlePageChange = (index: number) => {
    setCurrentPage(index);
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
          <img src={logo} alt="cinemahub logo" className="h-14 md:h-28" />
          <a
            href="https://github.com/cksgh5654/react-ui-kit"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center bg-blue-600 w-fit px-12 py-3 text-lg text-white rounded-full hover:bg-blue-700 cursor-pointer transition duration-300"
          >
            깃허브 바로가기
          </a>
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
                  TypeScript
                </ul>
              </li>
            </dd>
          </div>

          <div>
            <dt className="text-xl font-semibold text-slate-700 pb-2">기간</dt>
            <dd className="text-slate-500">
              2024년 10월 29일 ~ 2025년 4월 21일
            </dd>
          </div>
          <div>
            <dt className="text-xl font-semibold text-slate-700 pb-2">팀원</dt>
            <dd className="text-slate-500">개인 프로젝트</dd>
          </div>
        </dl>
      </div>
      <div className="flex flex-col gap-12 pt-32 px-4 md:px-8">
        <h3 className="text-4xl font-bold text-slate-700">프로젝트 설명</h3>
        <p className="text-slate-500">
          리엑트 프로젝트에서 사용하는 공통 컴포넌트로 스타일이 없는 headless ui
          컨셉입니다.
          {(isDesktop || isTablet) && <br />}
          context를 사용하여 컴포넌트 트리 전체에 데이터를 제공하는 형태로
          제작되었습니다.
          {(isDesktop || isTablet) && <br />}
          <span
            onClick={handleCopy}
            onKeyDown={(e) => e.key === "Enter" && handleCopy()}
            role="button"
            tabIndex={0}
            className="text-blue-600 hover:text-blue-800"
          >
            npm i parkchanho-react-ui-kit
          </span>{" "}
          으로 다운받아 사용합니다.
        </p>
      </div>

      <div className="flex flex-col gap-12 pt-32">
        <h3 className="text-4xl font-bold text-slate-700 px-4 md:px-8">예시</h3>
        <ul className="flex flex-col gap-16">
          <li className="px-4 md:px-8">
            <h4 className="text-3xl font-semibold text-slate-700 pb-8">
              Accordion
            </h4>
            <Accordion className="flex flex-col justify-center items-center gap-4">
              <Accordion.Item
                className="w-full flex flex-col gap-2  border-b border-b-slate-400"
                value="item-1"
              >
                <Accordion.Trigger
                  className="w-full flex justify-between items-center hover:underline underline-offset-4 text-lg text-slate-800"
                  chevron
                >
                  아이템 1 트리거
                </Accordion.Trigger>
                <Accordion.Content className="text-slate-600">
                  아이템 1 컨텐츠
                </Accordion.Content>
              </Accordion.Item>
              <Accordion.Item
                className="w-full flex flex-col gap-2  border-b border-b-slate-400"
                value="item-2"
              >
                <Accordion.Trigger
                  className="w-full flex justify-between items-center hover:underline underline-offset-4 text-lg text-slate-800"
                  chevron
                >
                  아이템 2 트리거
                </Accordion.Trigger>
                <Accordion.Content className="text-slate-600">
                  아이템 2 컨텐츠
                </Accordion.Content>
              </Accordion.Item>
              <Accordion.Item
                className="w-full flex flex-col gap-2  border-b border-b-slate-400"
                value="item-3"
              >
                <Accordion.Trigger
                  className="w-full flex justify-between items-center hover:underline underline-offset-4 text-lg text-slate-800"
                  chevron
                >
                  아이템 3 트리거
                </Accordion.Trigger>
                <Accordion.Content className="text-slate-600">
                  아이템 3 컨텐츠
                </Accordion.Content>
              </Accordion.Item>
            </Accordion>
          </li>
          <li className="px-4 md:px-8">
            <h4 className="text-3xl font-semibold text-slate-700 pb-4">
              Breadcrumb
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2 bg-slate-100 p-4 rounded-lg">
                <p className="text-slate-400">width가 초과 안되었을 때</p>
                <Breadcrumb width="300px">
                  <Breadcrumb.Item href="/a">1</Breadcrumb.Item>
                  <Breadcrumb.Item href="/a-a">2</Breadcrumb.Item>
                  <Breadcrumb.Item href="/a-a-a">3</Breadcrumb.Item>
                  <Breadcrumb.Item href="/a-a-a-a">4</Breadcrumb.Item>
                  <Breadcrumb.Item href="/a-a-a-a-a">5</Breadcrumb.Item>
                </Breadcrumb>
              </div>
              <div className="flex flex-col gap-2 bg-slate-100 p-4 rounded-lg">
                <p className="text-slate-400">width가 초과 되었을 때</p>
                <Breadcrumb width="100px">
                  <Breadcrumb.Item href="/a">1</Breadcrumb.Item>
                  <Breadcrumb.Item href="/a-a">2</Breadcrumb.Item>
                  <Breadcrumb.Item href="/a-a-a">3</Breadcrumb.Item>
                  <Breadcrumb.Item href="/a-a-a-a">4</Breadcrumb.Item>
                  <Breadcrumb.Item href="/a-a-a-a-a">5</Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </div>
            <p className="text-red-300 text-sm pt-2">
              * 브래드크럼 예시 버튼을 누르면 url이 변경되어 모달창이 꺼집니다.
            </p>
          </li>
          <li className="px-4 md:px-8">
            <h4 className="text-3xl font-semibold text-slate-700 pb-4">
              Calendar
            </h4>
            <Calendar
              chevronColor="white"
              onChange={handleChangeDate}
              value={new Date()}
              className="flex flex-col justify-center items-center gap-4 bg-blue-500 rounded-2xl text-white"
            >
              <Calendar.Navigator className="flex justify-between items-center gap-4 pt-4">
                <Calendar.Current />
              </Calendar.Navigator>
              <Calendar.Body className="w-full bg-slate-100 rounded-b-2xl p-4" />
            </Calendar>
          </li>
          <li>
            <h4 className="text-3xl font-semibold text-slate-700 pb-4 px-4 md:px-8">
              CarouselInfinite
            </h4>
            <CarouselInfinite className="relative">
              <CarouselInfinite.ItemContainer>
                <CarouselInfinite.ItemList>
                  <CarouselInfinite.Item
                    key={1}
                    className={`w-full px-4 md:px-8 2xl:w-[700px]`}
                  >
                    {() => (
                      <div className=" h-56 flex justify-center items-center bg-blue-500 text-white text-4xl rounded-xl">
                        1
                      </div>
                    )}
                  </CarouselInfinite.Item>
                  <CarouselInfinite.Item
                    key={2}
                    className={`w-full px-4 md:px-8 2xl:w-[700px]`}
                  >
                    {() => (
                      <div className="h-56 flex justify-center items-center bg-blue-600 text-white text-4xl rounded-xl">
                        2
                      </div>
                    )}
                  </CarouselInfinite.Item>
                  <CarouselInfinite.Item
                    key={3}
                    className={`w-full px-4 md:px-8 2xl:w-[700px]`}
                  >
                    {() => (
                      <div className="h-56 flex justify-center items-center bg-blue-700 text-white text-4xl rounded-xl">
                        3
                      </div>
                    )}
                  </CarouselInfinite.Item>
                </CarouselInfinite.ItemList>
              </CarouselInfinite.ItemContainer>

              <CarouselInfinite.Navigator className="w-full max-w-[1440px] absolute top-[calc(50%-48px)] left-1/2 transform -translate-x-1/2 flex justify-between items-center gap-2">
                {(handlePrev, handleNext, isTransitioning) => (
                  <div className="w-full flex justify-between items-center px-8">
                    <button
                      className="bg-[rgba(255,255,255,0.5)] rounded-full opacity-50 hover:opacity-100 duration-300 ease-in-out backdrop-blur-sm p-2"
                      onClick={handlePrev}
                      disabled={isTransitioning}
                    >
                      <ChevronIcon height="40px" color="#000" thickness="3" />
                    </button>
                    <button
                      className="bg-[rgba(255,255,255,0.5)] rounded-full opacity-50 hover:opacity-100 duration-300 ease-in-out backdrop-blur-sm p-2"
                      onClick={handleNext}
                      disabled={isTransitioning}
                    >
                      <ChevronIcon
                        height="40px"
                        color="#000"
                        thickness="3"
                        className="rotate-180"
                      />
                    </button>
                  </div>
                )}
              </CarouselInfinite.Navigator>

              <CarouselInfinite.Indicator
                styleType="dots"
                dotSize={16}
                activeColor="oklch(62.3% 0.214 259.815)"
              />
            </CarouselInfinite>
          </li>
          <li>
            <ul>
              <h4
                ref={baseRef}
                className="text-3xl font-semibold text-slate-700 pb-4 px-4 md:px-8"
              >
                CarouselXscroll
              </h4>
              <CarouselXscroll
                baseRect={baseRect}
                pixelMove={modalRect.width}
                itemListRef={itemListRef}
                className="group"
              >
                <CarouselXscroll.ItemContainer>
                  <CarouselXscroll.Items className="flex gap-4 translate-x-[-50px]">
                    <div className="bg-blue-400 w-56 h-56 flex justify-center items-center text-white text-4xl rounded-xl">
                      1
                    </div>
                    <div className="bg-blue-500 w-56 h-56 flex justify-center items-center text-white text-4xl rounded-xl">
                      2
                    </div>
                    <div className="bg-blue-600 w-56 h-56 flex justify-center items-center text-white text-4xl rounded-xl">
                      3
                    </div>
                    <div className="bg-blue-700 w-56 h-56 flex justify-center items-center text-white text-4xl rounded-xl">
                      4
                    </div>
                    <div className="bg-blue-800 w-56 h-56 flex justify-center items-center text-white text-4xl rounded-xl">
                      5
                    </div>
                    <div className="bg-blue-900 w-56 h-56 flex justify-center items-center text-white text-4xl rounded-xl">
                      6
                    </div>
                  </CarouselXscroll.Items>
                </CarouselXscroll.ItemContainer>
                <CarouselXscroll.Navigator>
                  {(prev, next, leftStyle, rightStyle) => (
                    <>
                      <button
                        className="bg-[rgba(255,255,255,0.5)] rounded-full opacity-50 hover:opacity-100 duration-300 ease-in-out backdrop-blur-sm p-2"
                        style={leftStyle}
                        onClick={prev}
                      >
                        <ChevronIcon height="40px" color="#000" thickness="3" />
                      </button>
                      <button
                        className="bg-[rgba(255,255,255,0.5)] rounded-full opacity-50 hover:opacity-100 duration-300 ease-in-out backdrop-blur-sm p-2"
                        style={rightStyle}
                        onClick={next}
                      >
                        <ChevronIcon
                          height="40px"
                          color="#000"
                          thickness="3"
                          className="rotate-180"
                        />
                      </button>
                    </>
                  )}
                </CarouselXscroll.Navigator>
              </CarouselXscroll>
            </ul>
          </li>
          <li className="px-4 md:px-8">
            <h4
              ref={baseRef}
              className="text-3xl font-semibold text-slate-700 pb-8"
            >
              Pagination
            </h4>

            <ul className="flex flex-col gap-4 pb-4">
              {currentPageItems.map((item, index) => (
                <li className="pb-3 border-b border-slate-300" key={index}>
                  {item}
                </li>
              ))}
            </ul>
            <Pagination
              total={totalItems}
              value={currentPage}
              onPageChange={handlePageChange}
              pageSize={pageSize}
              blockSize={15}
              color="oklch(54.6% 0.245 262.881)"
            >
              <Pagination.Navigator className="flex justify-center items-center gap-4">
                <Pagination.Buttons className="flex gap-2" />
              </Pagination.Navigator>
            </Pagination>
          </li>
          <li className="px-4 md:px-8">
            <h4
              ref={baseRef}
              className="text-3xl font-semibold text-slate-700 pb-8"
            >
              Select
            </h4>

            <Select
              onChange={handleChangeValue}
              value={selectedValue}
              item={selectedItem}
              setItem={setSelectedItem}
              selectId="my-popover"
            >
              <Select.Trigger />
              <Select.Content className="bg-white p-4 rounded-lg shadow-lg mt-4">
                <div className="flex flex-col gap-2">
                  <Select.Item value="item 1">선택한 아이템 1</Select.Item>
                  <Select.Item value="item 2">선택한 아이템 2</Select.Item>
                </div>
              </Select.Content>
            </Select>
          </li>
          <li className="px-4 md:px-8">
            <h4
              ref={baseRef}
              className="text-3xl font-semibold text-slate-700  pb-8"
            >
              Tabs
            </h4>

            <Tabs onChangeTab={handleChangeTab} className="flex flex-col gap-8">
              <Tabs.MenuList className="flex gap-4 w-full justify-between bg-slate-100 rounded-lg p-2">
                <Tabs.Menu
                  className="w-full text-slate-400 text-center p-2 rounded data-[active=true]:bg-white data-[active=true]:text-slate-900 transition duration-300 ease-in-out"
                  index={1}
                >
                  메뉴 1
                </Tabs.Menu>
                <Tabs.Menu
                  className="w-full text-slate-400 text-center p-2 rounded data-[active=true]:bg-white data-[active=true]:text-slate-900 transition duration-300 ease-in-out"
                  index={2}
                >
                  메뉴 2
                </Tabs.Menu>
                <Tabs.Menu
                  className="w-full text-slate-400 text-center p-2 rounded data-[active=true]:bg-white data-[active=true]:text-slate-900 transition duration-300 ease-in-out"
                  index={3}
                >
                  메뉴 3
                </Tabs.Menu>
              </Tabs.MenuList>
              <Tabs.Pannel
                index={1}
                className="w-full bg-blue-500 text-white text-2xl flex justify-center items-center h-56 rounded-2xl"
              >
                컨텐츠 1
              </Tabs.Pannel>
              <Tabs.Pannel
                index={2}
                className="w-full bg-blue-600 text-white text-2xl flex justify-center items-center h-56 rounded-2xl"
              >
                컨텐츠 2
              </Tabs.Pannel>
              <Tabs.Pannel
                index={3}
                className="w-full bg-blue-700 text-white text-2xl flex justify-center items-center h-56 rounded-2xl"
              >
                컨텐츠 3
              </Tabs.Pannel>
            </Tabs>
          </li>
          <li className="px-4 md:px-8">
            <h4
              ref={baseRef}
              className="text-3xl font-semibold text-slate-700  pb-8"
            >
              Toast
            </h4>
            <button
              type="button"
              onClick={handleToast}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out"
            >
              토스트 띄우기
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Uikit;
