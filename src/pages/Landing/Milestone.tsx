import styled from "@emotion/styled";
import theme from "styles/theme";
import * as React from "react";
import {css} from "@emotion/react";

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
    align-items: start;
    margin-top: 30px;
    position: relative;
`;

const items = [
  {
    title: '2025 2Q',
    description: '시장성 검증(SNS 공동구매 마케팅 진행)',
  },
  {
    title: '2025 3Q',
    description: 'MVP 출시 및 베타 테스트'
  },
  {
    title: '2025 4Q',
    description: '정식 서비스 론칭, 서비스 제공 지역 확장'
  },
  {
    title: '2026 1Q',
    description: '서비스 기능 고도화, MAU 50K 달성'
  },
  {
    title: '2026 2Q~',
    description: '메이크업 예약 서비스 추가, 뷰티 카테고리 확장'
  }
];

interface StepItemProps {
  title: string;
  description: string;
  isFirst?: boolean;
}

const TimelinePointWrapper = styled.div`
    display: flex;
    min-width: 240px;
    width: 268px;
    flex-direction: column;
    align-items: flex-end;
    padding: 0 54px;
    @media (max-width: 991px) {
        padding-left: 20px;
    }
`;

const TimelinePointDot = styled.div`
    stroke-width: 6px;
    background-color: ${theme.colors.primary};
    border-radius: 50%;
    z-index: 10;
    display: flex;
    margin-top: -6px;
    width: 31px;
    height: 31px;
    border: 6px solid ${theme.colors.text.secondary};
`;

const TimelinePoint: React.FC = () => {
  return (
    <TimelinePointWrapper>
      <TimelinePointDot />
    </TimelinePointWrapper>
  );
};

const timelineItemStyles = {
  container: css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  `,
  month: css`
    color: ${theme.colors.primary};
    font-size: 16px;
    font-weight: 500;
  `,
  content: css`
    display: flex;
    margin-top: 20px;
    flex-direction: column;
    color: ${theme.colors.white};
    justify-content: flex-start;
  `,
  title: css`
    font-size: 18px;
    font-weight: 600;
  `,
  description: css`
    font-size: 15px;
    font-weight: 400;
    line-height: 20px;
    margin-top: 20px;
  `,
};

const StepItem: React.FC<StepItemProps> = ({
                                             title,
                                             description,
                                             isFirst = false,
                                           }) => {
  return (
    <div
      css={{
        zIndex: "0",
        display: "flex",
        width: "100%",
        paddingLeft: "0px",
        paddingRight: "24px",
        paddingTop: "38px",
        paddingBottom: "16px",
        alignItems: "start",
        gap: "100px",
        justifyContent: "start",
        marginTop: isFirst ? 0 : "40px",
        lineHeight: "0.2",
      }}
    >
      <div
        css={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "20px",
        }}
      >
        <TimelinePoint />
      </div>
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "center",
        }}
      >
        <p css={timelineItemStyles.title}>{title}</p>
        <p css={timelineItemStyles.description}>
          {description}
        </p>
      </div>
    </div>
  );
};

function Milestone() {
  return (
    <Wrapper id="milestone">
      <Title>Our Milestone</Title>
      <Contents>
        {items.map((step, index) => (
          <StepItem
            key={step.title}
            title={step.title}
            description={step.description}
            isFirst={index === 0}
          />
        ))}
        <div
          css={{
            backgroundColor: "rgba(64, 64, 64, 1)",
            position: "absolute",
            zIndex: "-1",
            display: "flex",
            minHeight: "600px",
            width: "6px",
            left: "58px",
            top: "56%",
            transform: "translate(0%, -50%)",
            height: "40px",
          }}
        />
      </Contents>
    </Wrapper>
  );
}

export default Milestone;