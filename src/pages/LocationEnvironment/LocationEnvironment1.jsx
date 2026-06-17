import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import LocationSectionBox from "../../components/LocationSectionBox/LocationSectionBox";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import section2Image1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import section2Image2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import section2Image3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import section2Image4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import section2Image5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import section2Image6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";

const LocationSection = [
  {
    img: section2Image1,
    titleText: "용인 반도체클러스터 미래가치<br />프리미엄 입지",
    contentText:
      "용인 반도체클러스터 개발 수혜를 기대하는 입지<br />미래가치를 품은 프리미엄 주거환경",
  },
  {
    img: section2Image2,
    titleText: "풍부한 생활 인프라<br />편리한 생활 환경",
    contentText:
      "생활·상업·문화 인프라를 가까이 누리는 입지<br />일상을 더욱 편리하게 만드는 생활환경",
  },
  {
    img: section2Image3,
    titleText: "광역 교통망 프리미엄<br />편리한 교통 환경",
    contentText:
      "국도 45호선 및 광역도로망 접근이 편리한 입지<br />수도권 이동을 더욱 빠르게 연결하는 교통환경",
  },
  {
    img: section2Image4,
    titleText: "교육 환경과 생활 편의<br />가족 중심 주거환경",
    contentText:
      "교육시설과 생활 인프라를 함께 누리는 생활권<br />가족의 삶을 고려한 쾌적한 주거환경",
  },
  {
    img: section2Image5,
    titleText: "2,018세대 프리미엄 대단지<br />용인 이안 플렉시티",
    contentText:
      "10년 민간임대 대단지의 품격 있는 주거가치<br />미래를 담은 프리미엄 라이프를 제안합니다.",
  },
  {
    img: section2Image6,
    titleText: "쾌적한 자연환경<br />프리미엄 힐링 라이프",
    contentText:
      "녹지와 자연을 가까이 누리는 쾌적한 생활환경<br />여유로운 일상을 완성하는 프리미엄 주거공간",
  },
];


const LocationEnvironment1 = () => {
  const menuContents = [
    // { title: "입지 안내영상", url: "/FloorPlan/videos" },
    { title: "입지안내", url: "/LocationEnvironment/intro" },
    { title: "프리미엄", url: "/LocationEnvironment/primium" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

  // 화면 스크롤이 탑이 아니면 isScroll 값 true로 변환
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>


<Helmet>
  {/* 페이지별 메타 */}
  <title>용인 이안 플렉시티 | 입지환경</title>

  <meta
    name="description"
    content="용인 이안 플렉시티 입지환경 안내. 용인특례시 처인구 남사읍 아곡리 일원에 조성되는 2,018세대 10년 민간임대 아파트의 교통, 생활 인프라, 교육환경, 자연환경과 미래가치를 확인하세요."
  />

  <meta
    name="keywords"
    content="용인 이안 플렉시티 입지환경, 용인 이안플렉시티, 용인 민간임대 아파트, 용인 10년 민간임대, 용인 처인구 아파트, 남사읍 아파트, 용인 반도체클러스터, 용인 교통환경, 용인 생활인프라"
  />

  <meta name="robots" content="index,follow" />

  <link
    rel="canonical"
    href="https://www.ianflexity.co.kr/LocationEnvironment/intro"
  />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="용인 이안 플렉시티" />

  <meta
    property="og:title"
    content="용인 이안 플렉시티 | 입지환경"
  />

  <meta
    property="og:description"
    content="용인 이안 플렉시티의 교통, 생활 인프라, 자연환경과 미래가치를 확인하세요."
  />

  <meta
    property="og:url"
    content="https://www.ianflexity.co.kr/LocationEnvironment/intro"
  />

  <meta
    property="og:image"
    content="https://www.ianflexity.co.kr/img/og/location.jpg"
  />

  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />

  <meta
    name="twitter:title"
    content="용인 이안 플렉시티 | 입지환경"
  />

  <meta
    name="twitter:description"
    content="용인 이안 플렉시티의 교통, 생활 인프라와 미래가치를 확인하세요."
  />

  <meta
    name="twitter:image"
    content="https://www.ianflexity.co.kr/img/og/location.jpg"
  />

  <meta
    name="twitter:url"
    content="https://www.ianflexity.co.kr/LocationEnvironment/intro"
  />

  {/* JSON-LD */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",

      "name": "용인 이안 플렉시티 - 입지환경",

      "url": "https://www.ianflexity.co.kr/LocationEnvironment/intro",

      "description":
        "용인 이안 플렉시티 입지환경 페이지입니다. 교통환경, 생활 인프라, 교육환경, 자연환경 및 반도체클러스터 미래가치를 안내합니다.",

      "primaryImageOfPage": {
        "@type": "ImageObject",
        "contentUrl": "https://www.ianflexity.co.kr/img/og/location.jpg",
        "width": 1200,
        "height": 630
      },

      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "홈",
            "item": "https://www.ianflexity.co.kr/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "입지환경",
            "item": "https://www.ianflexity.co.kr/LocationEnvironment/intro"
          }
        ]
      }
    })}
  </script>
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="입지환경" />

<MenuBar contents={menuContents} />

<h1 className={styles.screenReaderOnly}>
  용인 이안 플렉시티 - 입지환경
</h1>

<p className={styles.screenReaderOnly}>
  용인 이안 플렉시티 입지환경 페이지입니다.
  용인특례시 처인구 남사읍 아곡리 일원에 조성되는
  2,018세대 10년 민간임대 아파트의 교통환경과 생활 인프라,
  교육환경, 자연환경 및 반도체클러스터 미래가치를 안내합니다.
</p>

<div className={styles.textBox}>
  <div>반도체클러스터 미래가치를 품은 프리미엄 입지</div>
  <div>생활과 자연, 교통이 어우러진 새로운 주거환경</div>
  <div>용인 이안 플렉시티가 프리미엄 라이프를 제안합니다.</div>
</div>

<img
  src={page1}
  className={styles.image2}
  alt="용인 이안 플렉시티 입지환경 및 미래가치 안내 이미지"
/>


      <div className={styles.section2}>
        {LocationSection.map((value, idx) => (
          <LocationSectionBox
            image={value.img}
            title={value.titleText}
            text={value.contentText}
          />
        ))}
      </div>

      <div className={styles.commonBox}>
        <div className={styles.notice}>
          ※본 홍보물의 내용과 지역도는 소비자의 이해를 돕기 위한 것으로, 개발 예정•계획 및 교통, 학교 계획 등에 관한 사항은 해당 기관의 아래 자료를 토대로 제작되었습니다. 사업계획 및 일정은 개발계획별 사업주체에 의해 변경될 수 있으며, 용인 이안 플렉시티사업주체 및 시공사와 무관합니다.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
