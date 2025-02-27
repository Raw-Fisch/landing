import * as React from "react";
import { css } from "@emotion/react";
import { SectionHeader } from "./SectionHeader";
import mock1 from "assets/images/feature_mock1.png";
import mock2 from "assets/images/feature_mock2.png";
import styled from "@emotion/styled";
import theme from "styles/theme";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    align-items: flex-start;
    padding: 80px 100px;
    padding-top: 150px;
    @media (max-width: 991px) {
        padding: 0 20px 100px;
    }
`;

const Title = styled.h1`
    display: flex;
    max-width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    font-size: 48px;
    font-weight: 600;
    @media (max-width: 991px) {
        max-width: 100%;
        font-size: 40px;
    }
`;

const Contents = styled.div`
    display: flex;
    max-width: 100%;
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    position: relative;
    padding: 40px;
    justify-content: center;
    @media (max-width: 991px) {
        padding: 20px;
    };
`;

const contentRowStyles = css({
  display: "flex",
  marginTop: "80px",
  width: "100%",
  alignItems: "center",
  justifyContent: "start",
  flexWrap: "wrap",
  "@media (max-width: 991px)": {
    maxWidth: "100%",
    marginTop: "40px",
  },
});

const imageColStyles = css({
  alignSelf: "stretch",
  display: "flex",
  minWidth: "240px",
  marginTop: "auto",
  marginBottom: "auto",
  alignItems: "center",
  gap: "10px",
  justifyContent: "center",
  flex: "1",
  flexShrink: "1",
  flexBasis: "0%",
  "@media (max-width: 991px)": {
    maxWidth: "100%",
  },
});

const imageStyles = css({
  aspectRatio: "0.69",
  objectFit: "contain",
  objectPosition: "center",
  width: "430px",
  alignSelf: "stretch",
  minWidth: "240px",
  marginTop: "auto",
  marginBottom: "auto",
});

const contentColStyles = css({
  alignSelf: "stretch",
  minWidth: "240px",
  marginTop: "auto",
  marginBottom: "auto",
  width: "640px",
  "@media (max-width: 991px)": {
    maxWidth: "100%",
  },
});

const featureItemStyles = css({
  borderLeftWidth: "6px",
  maxWidth: "100%",
  width: "640px",
  paddingLeft: "48px",
  paddingTop: "30px",
  paddingBottom: "30px",
  "@media (max-width: 991px)": {
    paddingLeft: "20px",
  },
});

const featureItemWithMarginStyles = css({
  ...featureItemStyles,
  marginTop: "24px",
});

const featureTitleStyles = css({
  width: "100%",
  fontSize: "20px",
  lineHeight: "1.1",
  "@media (max-width: 991px)": {
    maxWidth: "100%",
  },
});

const FeatureDesc = styled.p`
    line-height: 29px;
    margin-top: 24px;
    color: ${theme.colors.text.placeholder};
    @media (max-width: 991px) {
        max-width: 100%;
    };
`;

const Features: React.FC = () => {
  return (
    <Wrapper id="features">
      <Title>Features</Title>
      <Contents>
        <SectionHeader
          title="나에게 딱 맞는 네일, 쉽고 빠르게!"
          description="쉽고 빠르게 원하는 네일샵을 찾고, 나에게 딱 맞는 디자인을 만나보세요."
        />
        <div css={contentRowStyles}>
          <div css={imageColStyles}>
            <img src={mock1} css={imageStyles} alt="Essential tools illustration1"/>
          </div>
          <div css={contentColStyles}>
            <article css={featureItemStyles}>
              <h2 css={featureTitleStyles}>공동구매 – 더 저렴하게, 더 예쁘게!</h2>
              <FeatureDesc>
                - 인기 네일 디자인과 제품을 함께 구매하면 할인 혜택!
                <br/>
                - 일정 인원이 모이면 자동 확정 및 결제 진행
              </FeatureDesc>
            </article>
            <article css={featureItemWithMarginStyles}>
              <h2 css={featureTitleStyles}>네일샵 스케줄 조회 및 예약/결제 – 편리한 예약, 간편한 결제</h2>
              <FeatureDesc>
                - 실시간 스케줄 확인 후 원하는 시간대에 예약
                <br/>
                - 카드, 간편결제 등 다양한 결제 옵션 지원
              </FeatureDesc>
            </article>
            <article css={featureItemWithMarginStyles}>
              <h2 css={featureTitleStyles}>AI 맞춤 디자인 검색 및 추천 – 내 손에 꼭 맞는 네일 스타일</h2>
              <FeatureDesc>
                - 개인 취향을 분석해 AI가 추천하는 네일 디자인
                <br/>
                - 키워드 검색으로 최신 트렌드 스타일 찾기
              </FeatureDesc>
            </article>
          </div>
        </div>
      </Contents>
      <Contents>
        <SectionHeader
          title="네일샵 운영, 더 효율적으로!"
          description="예약부터 고객 관리까지, 간편하게 관리하세요."
        />
        <div css={contentRowStyles}>
          <div css={imageColStyles}>
            <img src={mock2} css={imageStyles} alt="Essential tools illustration2"/>
          </div>
          <div css={contentColStyles}>
            <article css={featureItemStyles}>
              <h2 css={featureTitleStyles}>실시간 스케줄 관리 – 예약을 편리하게 운영하세요!</h2>
              <FeatureDesc>
                - 예약 현황을 실시간으로 확인하고 손쉽게 관리
                <br/>
                - 취소 및 변경 알림으로 빈 시간 최소화
              </FeatureDesc>
            </article>

            <article css={featureItemWithMarginStyles}>
              <h2 css={featureTitleStyles}>매출 & 고객 분석 – 데이터로 성장하는 네일샵</h2>
              <FeatureDesc>
                - 예약 및 매출 데이터를 분석해 더 나은 전략 수립
                <br/>
                - 고객 선호 디자인과 방문 패턴을 파악하여 맞춤 서비스 제공
              </FeatureDesc>
            </article>

            <article css={featureItemWithMarginStyles}>
              <h2 css={featureTitleStyles}>프로모션 & 할인 설정 – 더 많은 고객을 만나보세요!</h2>
              <FeatureDesc>
                - 신규 고객 유치를 위한 프로모션 설정
                <br/>
                - 단골 고객을 위한 맞춤 할인 제공
              </FeatureDesc>
            </article>
          </div>
        </div>
      </Contents>
    </Wrapper>
  );
};

export default Features;
