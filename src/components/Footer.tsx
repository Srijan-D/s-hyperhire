import React from 'react';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa6';
import { FaUser } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 text-black ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-4 sm:w-[90%] md:w-[90%] lg:w-[85%] 2xl:w-[75%] pl-3 pr-2 xl:pl-0 xl:pr-0 xl:px-0">
        {/* Component 1: Company Info */}
        <div className="flex flex-col justify-between px-4 sm:px-0 py-4 rounded-md w-[50%]">
          <div className="img flex flex-row items-center mb-4">
            <Image src="/colored-logo.png" alt="hyperhire" className="mb-4" width={50} height={50} />
            <h1 className="text-2xl font-bold ml-2 mt-[-13px]">hyperhire</h1>
          </div>
          <p className=" mb-4 font-semibold">우리는 국경의 장벽을 넘어 최고의 인재를 매칭해드립니다.</p>
          <p className=" mb-4 font-extrabold text-gray-600">
            010-0000-0000
            <br /> aaaaa@naver.com
          </p>
        </div>

        {/* Component 2: Services Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4 px-4 sm:px-0">
          <FooterButton icon={<CodeIcon />} title="해외 개발자 원격 채용" />
          <FooterButton icon={<UserIcon />} title="외국인 원격 채용 (비개발)" />
          <FooterButton icon={<LanguageIcon />} title="한국어 가능 외국인 채용" />
          <FooterButton icon={<GearIcon />} title="해외 개발자 활용 서비스" />
        </div>

        {/* Component 3: Legal Info */}
        <div className="flex flex-col justify-between px-4 sm:px-0 py-4 rounded-md text-sm text-gray-700 ">
          <div className="flex flex-row justify-start gap-4 mb-4 ">
            <div className="space-y-2">
              <p className="font-bold">상호명</p>
              <p className="font-bold">하이퍼하이어</p>
              <p className="font-bold mt-2 text-gray-600">Hyperhire India Private Limited</p>
            </div>
            <div className="space-y-[10px] md:mt-4 lg:mt-0">
              <p className="font-black text-black">대표 CEO</p>
              <p>김주현</p>
              <p className="font-extrabold ">Juhyun Kim</p>
            </div>
          </div>
        </div>

        {/* Component 4: Address Info */}
        <div className="flex flex-col justify-between rounded-md py-4 px-4 sm:px-0">
          <div className="flex flex-col lg:flex-row justify-between gap-5">
            <div className="flex flex-col gap-2">
              <p className="font-semibold">
                사업자등록번호 <span className="font-black text-black">CIN</span>
              </p>
              <p className="font-extrabold text-gray-600 text-sm">427-86-01187</p>
              <p className=" font-extrabold text-gray-600 text-sm">U74110DL2016PTC290812</p>
            </div>
            <div className="text-sm lg:ml-6">
              <p className="font-black text-gray-800 mt-4 lg:mt-0">주소 ADDRESS</p>
              <p className="font-extrabold text-gray-600 mt-3">
                서울특별시 강남대로 479, 지하 1층 238호
                <br />
              </p>
              <p className="text-gray-600 mt-1 font-extrabold mr-28">
                D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India
              </p>
            </div>
          </div>
        </div>
        <p className="text-sm mt-4 font-extrabold text-gray-600 ml-4 sm:ml-0">© 2023 Hyperhire</p>
      </div>
    </footer>
  );
};

const FooterButton = ({ icon, title }: { icon: React.ReactNode; title: string }) => {
  return (
    <div className="flex flex-col justify-between bg-white p-4 rounded-md md:h-36 lg:h-52 xl:h-40  pb-2">
      <div className="flex flex-col">
        <div className="text-2xl mr-4 text-gray-600 rounded-md mb-2">{icon}</div>
        <div className="flex flex-col text-left">
          <span className="font-semibold text">{title}</span>
        </div>
      </div>
      <span className="flex items-center justify-start text-gray-600 text-xl mt-4 ">
        바로가기 <FaArrowRight className="ml-2 border-2 border-gray-600 rounded-md h-[25px] w-7 p-1" />
      </span>
    </div>
  );
};

const CodeIcon = () => <FaCode className="text-gray-600 h-9 w-10 bg-gray-100 rounded-md p-2" />;
const UserIcon = () => <FaUser className="text-gray-500 h-9 w-10 bg-gray-100 rounded-md p-2" />;
const LanguageIcon = () => (
  <span className="text-gray-600 h-9 w-10 bg-gray-100 rounded-md p-2 text-sm font-semibold">KOR</span>
);
const GearIcon = () => (
  <IoMdSettings className="text-gray-600 h-9 w-10 bg-gray-100 rounded-md p-2 text-sm font-semibold" />
);

export default Footer;
