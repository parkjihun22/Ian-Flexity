import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import Ready from "../../components/Ready/Ready";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";
import { Helmet } from "react-helmet-async";
import page1 from "../../assets/LocationEnvironment/LocationEnvironment2/page1.jpg";


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
  <title>용인 이안 플렉시티 | 프리미엄</title>

  <meta
    name="description"
    content="용인 이안 플렉시티 프리미엄 안내. 용인특례시 처인구 남사읍 아곡리 일원에 조성되는 2,018세대 10년 민간임대 아파트의 입지 가치, 생활 인프라, 광역 교통 환경, 반도체클러스터 미래가치와 주거 프리미엄을 확인하세요."
  />

  <meta
    name="keywords"
    content="용인 이안 플렉시티 프리미엄, 용인 이안플렉시티, 용인 민간임대 아파트, 용인 10년 민간임대, 용인 처인구 아파트, 남사읍 아파트, 아곡리 아파트, 용인 반도체클러스터, 용인 이안 플렉시티 입지"
  />

  <link
    rel="canonical"
    href="https://www.ianflexity.co.kr/LocationEnvironment/primium"
  />

  <meta name="robots" content="index,follow" />
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="프리미엄" />
<MenuBar contents={menuContents} />

<h1 className={styles.screenReaderOnly}>
  용인 이안 플렉시티 - 프리미엄
</h1>

<p className={styles.screenReaderOnly}>
  용인 이안 플렉시티만의 프리미엄을 확인하세요.
  용인특례시 처인구 남사읍 아곡리 일원에 조성되는
  2,018세대 10년 민간임대 아파트로, 생활 인프라와
  광역 교통 환경, 쾌적한 주거환경, 반도체클러스터 미래가치를
  함께 고려한 프리미엄 라이프를 제안합니다.
</p>

<div className={styles.textBox}>
  <div>반도체클러스터 미래가치를 품은 프리미엄 입지</div>
  <div>용인 이안 플렉시티의 특별한 주거 가치를 누리세요.</div>
</div>

<img
  src={page1}
  className={styles.image3}
  alt="용인 이안 플렉시티 프리미엄 및 반도체클러스터 미래가치 이미지"
/>

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
