import React, { useEffect, useState } from "react";
import styles from "./Bener.module.scss";
import img from "../../assets/Bener/bener.jpg";

const Bener = ({ title }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // 이미지가 로드된 후 애니메이션 시작
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true); // 이미지 로딩 후 애니메이션을 시작
        }, 100); // 0.1초 후에 애니메이션을 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            {/* 배너 이미지 */}
            <img
                className={`${styles.benerImage} ${isLoaded ? styles.showImage : ''}`}
                src={img}
                alt="용인 이안 플렉시티 배너이미지"
            />
            <div className={styles.overlay}></div>
            <div
                className={`${styles.contents} ${isLoaded ? styles.showContents : ''}`}
            >
                <div
                    className={`${styles.title} ${isLoaded ? styles.showTitle : ''}`}
                >
                    {title}
                </div>
                {contents(title, isLoaded)}
            </div>
        </div>
    );
};

export default Bener;

const contents = (text, isLoaded) => {
  if (
    text === '홍보영상' ||
    text === '체크포인트' ||
    text === '당첨자서류안내' ||
    text === '용인 이안 플렉시티'
  ) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          용인의 미래가치를 담은 새로운 프리미엄 주거단지.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          용인 이안 플렉시티, 우수한 입지와 생활 인프라를 누리는 브랜드 라이프.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          교통·생활·비전까지 모두 갖춘 용인의 새로운 랜드마크를 만나보세요.
        </div>
      </>
    );
  } else if (
    text === '사업개요' ||
    text === '세대안내' ||
    text === '인테리어' ||
    text === '청약안내' ||
    text === '모집공고안내' ||
    text === '인지세납부안내'
  ) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          미래가치를 품은 용인 핵심 입지에서 만나는 용인 이안 플렉시티.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          쾌적한 주거환경과 다양한 생활 인프라를 누릴 수 있는 프리미엄 단지.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          실거주 만족과 미래가치를 함께 고려한 새로운 주거 선택.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          용인 이안 플렉시티
        </div>
      </>
    );
  } else if (text === '입지환경' || text === '프리미엄') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          풍부한 생활 인프라와 광역 교통망이 어우러진 미래가치 중심 입지.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          개발호재와 직주근접 프리미엄으로 더욱 기대되는 용인 라이프를 제공합니다.
        </div>
      </>
    );
  } else if (text === '단지안내') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          효율적인 공간 설계와 쾌적한 주거환경을 담은 용인 이안 플렉시티.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          다양한 커뮤니티와 특화 설계로 품격 있는 일상을 제안합니다.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          용인 이안 플렉시티, 새로운 라이프스타일의 시작.
        </div>
      </>
    );
  }
};
