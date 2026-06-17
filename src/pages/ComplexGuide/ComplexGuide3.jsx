import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./ComplexGuide.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";


import page1 from "../../assets/ComplexGuide/ComplexGuide3/page1.jpg";



const ComplexGuide3 = () => {
  const menuContents = [
    { title: "단지 배치도", url: "/ComplexGuide/intro" },
    { title: "호수 배치도", url: "/ComplexGuide/detailintro" },
    { title: "커뮤니티", url: "/ComplexGuide/community" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const [isImage2Loaded, setIsImage2Loaded] = useState(false); // 이미지 로딩 상태 추가
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  // 이미지가 로드되면 호출되는 함수
  const handleImageLoad = () => {
    setIsImage2Loaded(true); // 이미지가 로드되면 상태 업데이트
  };

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

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
  <title>용인 이안 플렉시티 | 커뮤니티</title>

  <meta
    name="description"
    content="용인 이안 플렉시티 커뮤니티 안내. 용인특례시 처인구 남사읍 아곡리 일원에 조성되는 2,018세대 10년 민간임대 아파트의 입주민 편의시설, 여가 공간, 커뮤니티 특화 설계와 프리미엄 라이프를 확인하세요."
  />

  <meta
    name="keywords"
    content="용인 이안 플렉시티 커뮤니티, 용인 이안플렉시티 커뮤니티시설, 용인 민간임대 아파트, 용인 10년 민간임대, 용인 처인구 아파트, 남사읍 아파트, 아곡리 아파트, 용인 이안 플렉시티 단지안내"
  />

  <link
    rel="canonical"
    href="https://www.ianflexity.co.kr/ComplexGuide/community"
  />

  <meta name="robots" content="index,follow" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="용인 이안 플렉시티" />

  <meta
    property="og:title"
    content="용인 이안 플렉시티 | 커뮤니티"
  />

  <meta
    property="og:description"
    content="용인 이안 플렉시티의 다양한 커뮤니티 시설과 입주민을 위한 프리미엄 생활 공간을 확인하세요."
  />

  <meta
    property="og:url"
    content="https://www.ianflexity.co.kr/ComplexGuide/community"
  />

  <meta
    property="og:image"
    content="https://www.ianflexity.co.kr/img/og/complex.jpg"
  />
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="커뮤니티" />
<MenuBar contents={menuContents} />

<h1 className={styles.screenReaderOnly}>
  용인 이안 플렉시티 - 커뮤니티
</h1>

<p className={styles.screenReaderOnly}>
  용인 이안 플렉시티 커뮤니티 페이지입니다.
  용인특례시 처인구 남사읍 아곡리 일원에 조성되는
  2,018세대 10년 민간임대 아파트의 입주민 편의시설과
  여가 공간, 커뮤니티 특화 설계 및 프리미엄 생활 가치를
  확인하실 수 있습니다.
</p>

<div className={styles.textBox}>
  <div>일상을 더욱 풍요롭게 만드는 프리미엄 커뮤니티</div>
  <div>용인 이안 플렉시티에서 품격 있는 라이프를 누려보세요.</div>
</div>

<img
  className={`${styles.image2} ${isImage2Loaded ? styles.showImage2 : ''}`}
  src={page1}
  alt="용인 이안 플렉시티 커뮤니티 및 입주민 편의시설 안내 이미지"
  onLoad={handleImageLoad}
/>

      <div className={styles.commonBox}>
              <div className={styles.notice}>
                ※ 커뮤니티 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 차이가 날 수 있습니다
              </div>
              <div className={styles.notice}>
                ※ 커뮤니티내 조경 및 세부계획, 시설물의 위치는 실제 시공시 현장 상황에 따라 변경될 수 있습니다
              </div>
            </div>

      <Footer />
    </div>
  );
};

export default ComplexGuide3;
