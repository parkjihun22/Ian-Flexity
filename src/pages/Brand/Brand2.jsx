import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import YouTube from 'react-youtube';

import styles from './Brand.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

const Brand2 = () => {
	const menuContents = [
		// { title: "브랜드 소개", url: "/brand/intro" }, 
		{ title: "홍보 영상", url: "/brand/video" }];


	const [isScroll, setIsScroll] = useState(false);
	const [isTextVisible, setIsTextVisible] = useState(true); // isTextVisible 상태 추가
	const isMobile = useMediaQuery({ query: '(max-width: 900px)' });
	const { pathname } = useLocation(); // 현재 경로를 가져옴

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

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className={styles.container}>
<Helmet>
  <title>용인 이안 플렉시티 | 홍보영상</title>

  <meta
    name="description"
    content="용인 이안 플렉시티 홍보영상 안내. 용인특례시 처인구 남사읍 아곡리 일원에 조성되는 2,018세대 대단지 10년 민간임대 아파트의 브랜드 가치와 입지 프리미엄, 미래가치를 영상으로 만나보세요."
  />

  <meta
    name="keywords"
    content="용인 이안 플렉시티, 용인 이안플렉시티 홍보영상, 용인 민간임대 아파트, 용인 10년 민간임대, 용인 처인구 아파트, 남사읍 아파트, 아곡리 아파트, 용인 반도체클러스터 아파트, 용인 이안 플렉시티 모델하우스"
  />

  <link
    rel="canonical"
    href="https://www.ianflexity.co.kr/Brand/video"
  />

  <meta name="robots" content="index,follow" />

  {/* OG */}
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="용인 이안 플렉시티" />

  <meta
    property="og:title"
    content="용인 이안 플렉시티 | 홍보영상"
  />

  <meta
    property="og:description"
    content="용인 이안 플렉시티의 브랜드 가치와 미래 프리미엄을 홍보영상으로 확인해보세요."
  />

  <meta
    property="og:url"
    content="https://www.ianflexity.co.kr/Brand/video"
  />

  <meta
    property="og:image"
    content="https://www.ianflexity.co.kr/images/og/main.jpg"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />

  <meta
    name="twitter:title"
    content="용인 이안 플렉시티 | 홍보영상"
  />

  <meta
    name="twitter:description"
    content="용인 이안 플렉시티의 브랜드 가치와 반도체클러스터 미래가치를 영상으로 만나보세요."
  />

  <meta
    name="twitter:image"
    content="https://www.ianflexity.co.kr/images/og/main.jpg"
  />
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="홍보영상" />
<MenuBar contents={menuContents} />

<h1 className={styles.screenReaderOnly}>
  용인 이안 플렉시티 - 홍보영상
</h1>

<p className={styles.screenReaderOnly}>
  용인 이안 플렉시티 홍보영상 페이지입니다.
  용인특례시 처인구 남사읍 아곡리 일원에 조성되는
  2,018세대 대단지 10년 민간임대 아파트의 브랜드 가치와
  우수한 입지환경, 생활 인프라, 반도체클러스터 미래가치,
  주거 프리미엄을 영상으로 확인하실 수 있습니다.
</p>

<div className={`${styles.textBox} ${isTextVisible ? styles.active : ''}`}>
  <div>반도체클러스터 미래가치를 품은 프리미엄 라이프</div>
  <div>용인 이안 플렉시티의 특별한 가치를 영상으로 만나보세요.</div>
</div>


			<div className={styles.videoContainer}>
				<YouTube
					videoId="9z8_2qPGqqs"
					opts={{
						width: isMobile ? "400" : "1300",
						height: isMobile ? "300" : "500",
						playerVars: {
							autoplay: 1,
							rel: 0,
							modestbranding: 1,
						},
					}}
					onEnd={(e) => {
						e.target.stopVideo(0);  // 비디오 종료 시 정지
					}}
				/>
			</div>

			<Footer />
		</div>
	)
}

export default Brand2;
