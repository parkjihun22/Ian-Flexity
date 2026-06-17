import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from './BusinessGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";


import page1 from "../../assets/BusinessGuide/BusinessGuide2/calendar.jpg";

const BusinessGuide2 = () => {
    const menuContents = [
      { title: "사업안내", url: "/BusinessGuide/intro" },
      // { title: "분양일정", url: "/BusinessGuide/plan" },
      // { title: "공급안내", url: "/BusinessGuide/documents" }
    ];

    const [isScroll, setIsScroll] = useState(false);
    const [isImageVisible, setIsImageVisible] = useState(false); // ✅ 기존 이미지 가시성 상태 유지
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }

            // ✅ 기존 이미지 로딩 로직도 유지 (하지만 Ready가 표시됨)
            if (window.scrollY > 200) {
                setIsImageVisible(true);
            } else {
                setIsImageVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={styles.container}>
<Helmet>
  <title>용인 이안 플렉시티 | 분양일정 안내</title>

  <meta
    name="description"
    content="용인 이안 플렉시티 분양일정 안내. 용인특례시 처인구 남사읍 아곡리 일원에 조성되는 2,018세대 10년 민간임대 아파트의 분양일정과 모집공고, 계약 일정 등 주요 정보를 확인하세요."
  />

  <meta
    name="keywords"
    content="용인 이안 플렉시티 분양일정, 용인 이안플렉시티 모집공고, 용인 민간임대 아파트, 용인 10년 민간임대, 용인 처인구 아파트, 남사읍 아파트, 용인 이안 플렉시티 계약일정"
  />

  <link
    rel="canonical"
    href="https://www.ianflexity.co.kr/BusinessGuide/plan"
  />

  <meta name="robots" content="index,follow" />
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="분양일정" />
<MenuBar contents={menuContents} />

<h1 className={styles.screenReaderOnly}>
  용인 이안 플렉시티 - 분양일정
</h1>

<p className={styles.screenReaderOnly}>
  용인 이안 플렉시티 분양일정 페이지입니다.
  용인특례시 처인구 남사읍 아곡리 일원에 조성되는
  2,018세대 10년 민간임대 아파트의 모집공고,
  분양일정, 계약일정 및 관련 정보를 확인하실 수 있습니다.
</p>

<div className={styles.textBox}>
  <div>미래가치를 품은 프리미엄 라이프</div>
  <div>용인 이안 플렉시티 분양일정을 확인하세요.</div>
</div>

<img
  className={`${styles.image4} ${isImageVisible ? styles.visible : ''}`}
  src={page1}
  alt="용인 이안 플렉시티 분양일정 및 모집공고 안내"
/>

<div className={styles.readyContainer}>
  {/* 필요한 경우 Ready 또는 분양 카운트 컴포넌트 삽입 */}
</div>


            <Footer />
        </div>
    );
};

export default BusinessGuide2;
