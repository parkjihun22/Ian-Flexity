import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from './Brand.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/Brand/intro/page1.jpg";

const Brand1 = () => {
    const menuContents = [
      // { title: "브랜드 소개", url: "/brand/intro" }, 
      { title: "홍보 영상", url: "/brand/video" }
    ];
    const [isScroll, setIsScroll] = useState(false);
    const [isTextVisible, setIsTextVisible] = useState(false); // 텍스트 애니메이션 상태
    const [isImageVisible, setIsImageVisible] = useState(false); // 이미지 애니메이션 상태
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 0);
            // 스크롤 시 이미지와 텍스트 애니메이션을 트리거
            if (window.scrollY > 200) {
                setIsImageVisible(true); // 이미지가 보이도록
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsTextVisible(true); // 메뉴 클릭 시 텍스트가 보이도록
        }, 500); // 딜레이를 두고 텍스트 애니메이션 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
<Helmet>
  <title>용인 이안 플렉시티 | 브랜드 소개</title>

  <meta
    name="description"
    content="용인 이안 플렉시티 브랜드 소개. 용인특례시 처인구 남사읍 아곡리 일원에 조성되는 2,018세대 대단지 10년 민간임대 아파트의 브랜드 가치, 주거 철학, 입지 프리미엄과 미래가치를 소개합니다."
  />

  <meta
    name="keywords"
    content="용인 이안 플렉시티, 용인 이안플렉시티, 용인 민간임대 아파트, 용인 10년 민간임대, 용인 처인구 아파트, 남사읍 아파트, 아곡리 아파트, 용인 반도체클러스터 아파트, 이안 플렉시티 브랜드"
  />

  <link
    rel="canonical"
    href="https://www.ianflexity.co.kr/Brand/intro"
  />

  <meta name="robots" content="index,follow" />

  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="용인 이안 플렉시티" />

  <meta
    property="og:title"
    content="용인 이안 플렉시티 | 브랜드 소개"
  />

  <meta
    property="og:description"
    content="용인 이안 플렉시티의 브랜드 가치와 2,018세대 대단지 10년 민간임대 아파트의 주거 프리미엄을 소개합니다."
  />

  <meta
    property="og:url"
    content="https://www.ianflexity.co.kr/Brand/intro"
  />

  <meta
    property="og:image"
    content="https://www.ianflexity.co.kr/images/og/main.jpg"
  />
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="브랜드 소개" />
<MenuBar contents={menuContents} />

<h1 className={styles.screenReaderOnly}>
  용인 이안 플렉시티 - 브랜드 소개
</h1>

<p className={styles.screenReaderOnly}>
  용인 이안 플렉시티 브랜드 소개 페이지입니다.
  용인특례시 처인구 남사읍 아곡리 일원에 조성되는 2,018세대 대단지
  10년 민간임대 아파트의 브랜드 가치와 주거 철학, 생활 인프라,
  쾌적한 단지 환경, 반도체클러스터 인접 미래가치를 소개합니다.
  용인 이안 플렉시티는 실용적인 공간 설계와 품격 있는 주거 환경을 바탕으로
  새로운 주거 가치를 제안합니다.
</p>

<div className={`${styles.textBox} ${isTextVisible ? styles.active : ''}`}>
  <div>용인 반도체클러스터 미래가치를 가까이</div>
  <div>용인 이안 플렉시티, 새로운 주거 가치</div>
</div>

<img
  className={`${styles.image} ${isImageVisible ? styles.visible : ''}`}
  src={page1}
  alt="용인 이안 플렉시티 브랜드 소개 및 용인 반도체클러스터 미래가치 이미지"
/>
            <Footer />
        </div>
    );
}

export default Brand1;
