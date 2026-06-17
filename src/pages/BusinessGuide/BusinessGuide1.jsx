import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styles from './BusinessGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import page1 from "../../assets/BusinessGuide/BusinessGuide1/page1.jpg";
import tableImage from "../../assets/BusinessGuide/BusinessGuide1/tableImage.jpg";
import { Helmet } from "react-helmet-async";



const projectData = [
  { label: '사업명', value: '용인 이안 플렉시티' },
  { label: '대지위치', value: '경기도 용인특례시 처인구 남사읍 아곡리 456번지 일원' },
  { label: '사업규모', value: '지하 2층 ~ 지상 29층, 15개동' },
  { label: '세대수', value: '총 2,018세대 10년 민간임대 아파트' },
  { label: '주택형', value: '전용 59㎡ · 84㎡ 예정' },
  { label: '입지환경', value: '용인 반도체클러스터와 가까운 미래가치 중심 입지' },
  { label: '교통환경', value: '국도 45호선 및 수도권 광역교통망 이용이 편리한 입지' },
  { label: '생활인프라', value: '교육·생활·상업·자연환경을 모두 누리는 용인 생활권' },
  { label: '대지면적', value: '82,065.00㎡' },
  { label: '연면적', value: '288,178.24㎡' },
  { label: '건축면적', value: '20,516.00㎡' },
  { label: '브랜드', value: '이안 플렉시티, 미래가치를 품은 프리미엄 주거단지' },
];
const BusinessGuide1 = () => {
  const menuContents = [
    { title: "사업안내", url: "/BusinessGuide/intro" },
  ];

  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation();
  const isMobile = useMediaQuery({ query: '(max-width: 900px)' });

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
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>

<Helmet>

<title>용인 이안 플렉시티 | 평택 고덕국제신도시 사업안내</title>

<meta
name="description"
content="용인 이안 플렉시티 사업안내. 평택 고덕국제신도시 생활권, 서정리역 접근성, 84㎡·101㎡ 중심 구성과 1·2단지 총 1,126세대 브랜드 프리미엄을 확인하세요."
/>

<meta
name="keywords"
content="용인 이안 플렉시티, 고덕국제신도시 수자인풍경채, 평택 고덕 아파트, 평택 분양, 고덕국제신도시 아파트, 서정리역 아파트"
/>

<meta name="robots" content="index,follow" />

<link
rel="canonical"
href="https://www.ianflexity.co.kr/BusinessGuide/intro"
/>

<meta property="og:type" content="website" />
<meta property="og:site_name" content="용인 이안 플렉시티" />

<meta
property="og:title"
content="용인 이안 플렉시티 | 평택 고덕국제신도시 사업안내"
/>

<meta
property="og:description"
content="평택 고덕국제신도시 수자인풍경채 사업안내. 생활 인프라, 교통환경, 브랜드 프리미엄을 확인하세요."
/>

<meta
property="og:url"
content="https://www.ianflexity.co.kr/BusinessGuide/intro"
/>

<meta
property="og:image"
content="https://www.ianflexity.co.kr/img/og/business.jpg"
/>

<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />

<meta name="twitter:card" content="summary_large_image" />

<meta
name="twitter:title"
content="용인 이안 플렉시티 | 평택 고덕국제신도시 사업안내"
/>

<meta
name="twitter:description"
content="용인 이안 플렉시티 사업안내 및 브랜드 프리미엄 정보를 확인하세요."
/>

<meta
name="twitter:image"
content="https://www.ianflexity.co.kr/img/og/business.jpg"
/>

<script type="application/ld+json">
{JSON.stringify({
"@context":"https://schema.org",
"@type":"WebPage",

"name":"용인 이안 플렉시티 사업안내",

"url":"https://www.ianflexity.co.kr/BusinessGuide/intro",

"description":"평택 고덕국제신도시 수자인풍경채 사업개요, 입지환경, 브랜드 프리미엄 정보를 제공합니다.",

"primaryImageOfPage":{
"@type":"ImageObject",
"contentUrl":"https://www.ianflexity.co.kr/img/og/business.jpg",
"width":1200,
"height":630
},

"breadcrumb":{
"@type":"BreadcrumbList",
"itemListElement":[
{
"@type":"ListItem",
"position":1,
"name":"홈",
"item":"https://www.ianflexity.co.kr/"
},
{
"@type":"ListItem",
"position":2,
"name":"사업안내",
"item":"https://www.ianflexity.co.kr/BusinessGuide/intro"
}
]
}

})}
</script>

</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="사업개요" />

<MenuBar contents={menuContents} />

<h1 className={styles.screenReaderOnly}>
용인 이안 플렉시티 - 사업안내
</h1>

<p className={styles.screenReaderOnly}>
용인 이안 플렉시티는 평택 고덕국제신도시 생활권에 조성되는 브랜드 아파트입니다.
고덕국제신도시의 풍부한 생활 인프라와 서정리역 접근성,
교육·상업시설·공원 환경을 누릴 수 있는 미래가치 중심 단지입니다.
84㎡와 101㎡ 중심 구성 및 총 1·2단지 1,126세대 규모의 브랜드 주거단지 정보를 제공합니다.
</p>

<div className={styles.textBox}>
<div>평택 고덕국제신도시가 품은 새로운 주거 가치</div>
<div>용인 이안 플렉시티, 브랜드 프리미엄을 완성합니다.</div>
</div>

<img className={styles.img3} src={page1} alt="용인 이안 플렉시티 사업개요 이미지"/>

			<div className={styles.tableContainer}>
				{!isMobile && <img className={styles.tableImg} src={tableImage} />}
				<table className={styles.projectTable}>
					<tbody>
						{projectData.map((item, index) => (
							<tr key={index}>
								<td className={styles.label}>{item.label}</td>
								<td className={styles.contents}>{item.value}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			 <div className={styles.commonBox}>
				<div className={styles.notice}>
					※ 본 홈페이지에 표기된 내용은 하기의 내용을 근거로 한 내용이며, 추후 계획의 변동 등은 당사와 무관합니다.
				</div>
				
			</div> 


			<Footer />
		</div>
	)
}

export default BusinessGuide1;
