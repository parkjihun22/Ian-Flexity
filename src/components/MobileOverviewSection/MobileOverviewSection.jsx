// src/components/MobileOverviewSection/MobileOverviewSection.jsx

import React, { useState, useEffect } from "react";
import styles from "./MobileOverviewSection.module.scss";

// 1) 모바일 메인 히어로 이미지
import heroImage from "../../assets/Main/heroImage.jpg";
// 2) 입지환경 지도
import mobileMap from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import mobileMap2 from "../../assets/LocationEnvironment/LocationEnvironment2/page2.jpg";
// 3) 프리미엄 슬라이드 이미지들
import slide1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import slide2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import slide3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import slide4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import slide5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import slide6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";

const items = [
  {
    key: "overview",
    label: "사업개요",
    content: (
      <ul className={styles.detailList}>
        <li>
          <strong>사업명</strong>
          <span>용인 이안 플렉시티</span>
        </li>
        <li>
          <strong>대지위치</strong>
          <span>
            용인특례시 처인구 남사읍 아곡리 456번지 일원
          </span>
        </li>
        <li>
          <strong>건축규모</strong>
          <span>
            지하 2층 ~ 지상 29층, 15개동
          </span>
        </li>
        <li>
          <strong>세대정보</strong>
          <span>
            총 2,018세대 10년 민간임대 아파트
          </span>
        </li>
        <li>
          <strong>대지면적</strong>
          <span>82,065.00㎡</span>
        </li>
        <li>
          <strong>연면적</strong>
          <span>288,178.24㎡</span>
        </li>
        <li>
          <strong>건축면적</strong>
          <span>20,516.00㎡</span>
        </li>
      </ul>
    ),
  },
  
  {
    key: "location",
    label: "입지환경",
    content: (
      <div className={styles.mapGrid}>
        <img
          src={mobileMap}
          className={styles.mapImage}
          alt="용인 이안 플렉시티 입지환경 지도"
        />
        <img
          src={mobileMap2}
          className={styles.mapImage}
          alt="고덕국제신도시 수자인풍경채 생활권 지도"
        />
      </div>
    ),
  },
  {
    key: "premium",
    label: "프리미엄",
    content: (
      <>
        {/* 프리미엄 섹션 상단 문단 */}
        <div className={styles.premiumIntro}>
          <h3 className={styles.premiumTitle}>GREAT PREMIUM</h3>
          <p className={styles.premiumSubtitle}>
            고덕국제신도시 생활 인프라와 미래가치를 누리는<br />
            용인 이안 플렉시티 프리미엄 라이프
          </p>
        </div>
        {/* 슬라이더 */}
        <PremiumSlider />
      </>
    ),
  },
];

function PremiumSlider() {
  const slides = [
    {
      img: slide1,
      title: "고덕국제신도시 중심 생활권",
      desc:
        "평택 고덕국제신도시의 풍부한 생활 인프라<br/>신도시 개발에 따른 미래가치 기대<br/>쾌적한 주거환경을 누리는 브랜드 아파트",
    },
    {
      img: slide2,
      title: "84㎡·101㎡ 중심 주거 구성",
      desc:
        "실수요 선호도가 높은 중대형 타입 구성<br/>가족 단위 생활에 적합한 여유로운 공간 설계<br/>용인 이안 플렉시티만의 합리적인 주거 선택",
    },
    {
      img: slide3,
      title: "서정리역 생활권과 광역 교통 접근성",
      desc:
        "서정리역을 통한 수도권 이동 편의성 기대<br/>고덕국제신도시 주요 도로망과 연결되는 입지<br/>출퇴근과 생활 이동을 고려한 교통 환경",
    },
    {
      img: slide4,
      title: "교육·생활 인프라를 품은 고덕 생활권",
      desc:
        "고덕국제신도시 내 교육환경과 생활 편의시설<br/>상업시설, 공원, 문화 인프라를 누리는 생활환경<br/>가족 중심 주거에 적합한 쾌적한 신도시 라이프",
    },
    {
      img: slide5,
      title: "쾌적한 단지 설계와 브랜드 프리미엄",
      desc:
        "수자인과 풍경채 브랜드가 함께하는 주거 가치<br/>입주민의 생활 편의를 고려한 단지 구성<br/>고덕국제신도시에서 만나는 품격 있는 주거공간",
    },
    {
      img: slide6,
      title: "삼성전자 평택캠퍼스 배후수요 기대",
      desc:
        "삼성전자 평택캠퍼스를 중심으로 한 직주근접 가치<br/>고덕국제신도시의 산업 배후수요와 성장성<br/>실거주와 미래가치를 함께 고려한 입지 프리미엄",
    },
  ];

  

  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  const nextSlide = () =>
    setCurrent((c) => (c + 1 + slides.length) % slides.length);
  const prevSlide = () =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length);

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEndX(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX == null || touchEndX == null) return;
    const dist = touchStartX - touchEndX;
    if (dist > 50) nextSlide();
    else if (dist < -50) prevSlide();
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      className={styles.premiumSlider}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.slide}>
        <img src={slides[current].img} alt="" />
        <div className={styles.caption}>
          <h4
            dangerouslySetInnerHTML={{ __html: slides[current].title.replace(/\n/g, "<br/>") }}
          />
          <p
            dangerouslySetInnerHTML={{ __html: slides[current].desc }}
          />
        </div>
      </div>
      <div className={styles.dots}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={idx === current ? styles.dotActive : styles.dot}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default function MobileOverviewSection() {
  const [openKey, setOpenKey] = useState(null);
  const toggle = (key) => setOpenKey(openKey === key ? null : key);

  return (
    <section className={styles.overviewSection}>
      {/* ─── 헤더 영역 ─── */}
      <header className={styles.overviewHeader}>
        <div className={styles.preTitle}>HILLSTATE BUSINESS</div>
        <div className={styles.line} />
        <h2 className={styles.mainTitle}>사업안내</h2>
      </header>

      {/* ─── 히어로 이미지 ─── */}
      <img src={heroImage} className={styles.heroImage} alt="단지 전경" />

      {/* ─── 아코디언 항목 ─── */}
      {items.map(({ key, label, content }) => (
        <div key={key} className={styles.accordionItem}>
          <button
            className={`${styles.accordionHeader} ${openKey === key ? styles.active : ""}`}
            onClick={() => toggle(key)}
          >
            <span className={styles.label}>{label}</span>
            <span className={`${styles.arrow} ${openKey === key ? styles.up : styles.down}`} />
          </button>
          {openKey === key && <div className={styles.accordionContent}>{content}</div>}
        </div>
      ))}
    </section>
  );
}
