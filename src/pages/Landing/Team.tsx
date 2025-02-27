import styled from "@emotion/styled";
import {css} from "@emotion/react";
import iconLinkedIn from "assets/icons/icon-linkedin.svg";

const Wrapper = styled.div`
    justify-content: center;
    align-items: start;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: 80px 100px;
    padding-top: 150px;
    @media (max-width: 991px) {
        padding: 0 20px 100px;
    }
`;

const Contents = styled.div`
    display: flex;
    max-width: 100%;
    width: 100%;
    flex-direction: column;
    align-items: start;
    margin-top: 30px;
`;

const Desc = styled.div`
    line-height: 1.8;
    @media (max-width: 991px) {
        max-width: 100%;
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

const CrewList = styled.div`
    align-self: stretch;
    margin-top: 70px;
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
    gap: 20px;
    @media (max-width: 991px) {
        margin-top: 40px;
    }
`;

const teamMembers = [
  {
    name: "Jihyung Lee",
    role: "Software Engineer",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/72561a42524e63db6fcfa6a1e79ef3c169ad7303b617363489de11a308aaf321?placeholderIfAbsent=true&apiKey=61415f98a9c04430a5650e6a03ff1614",
    linkedInUrl: "https://www.linkedin.com/in/jihyunglee"
  },
  {
    name: "Soyeon Lee",
    role: "Business Strategy Consultant",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/403b3faf2c75e3a825086465d930e4378163997d927d37568c730f05b28d9fbc?placeholderIfAbsent=true&apiKey=61415f98a9c04430a5650e6a03ff1614",
    linkedInUrl: "https://www.linkedin.com/in/soyeon-lee-3949a5117"
  },
  {
    name: "Yeonji Kim",
    role: "Data Analyst",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/5dc6ecef57724824f005884d26cb18cd450dbf663a4ec38daadde3bfcd742a35?placeholderIfAbsent=true&apiKey=61415f98a9c04430a5650e6a03ff1614",
    linkedInUrl: "https://www.linkedin.com/in/yeonji-kim-11a9b1195"
  },
  {
    name: "Yu-jeong Kang",
    role: "Product Marketing Manager",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/eae72d946a6c72d378e80819715a5ba8d8c4936331ba1aae92eb6aaf4ccb3715?placeholderIfAbsent=true&apiKey=61415f98a9c04430a5650e6a03ff1614",
    linkedInUrl: "https://www.linkedin.com/in/yujeon9kang"
  },
];


interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl: string;
  linkedInUrl: string;
}

const memberStyles = css`
  display: flex;
  flex-direction: column;
  font-weight: 400;
  width: calc(23%);
  @media (max-width: 991px) {
    width: 100%;
    margin-top: 40px;
  }
`;

const imageStyles = css`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 100px;
  max-width: 100%;
`;

const nameStyles = css`
  font-size: 22px;
  font-weight: 500;
  line-height: 1;
  margin-top: 17px;
`;

const Role = styled.div`
    font-size: 16px;
    line-height: 1.5;
    margin: 8px 0;
`;

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, imageUrl, linkedInUrl }) => {
  return (
    <div css={memberStyles}>
      <img css={imageStyles} src={imageUrl} alt={`${name}, ${role}`}/>
      <div css={nameStyles}>{name}</div>
      <Role>{role}</Role>
      <a href={linkedInUrl} target="_blank" rel="noreferrer noopener">
        <img src={iconLinkedIn} width={20} height={20} alt="linkedin"/>
      </a>
    </div>
  );
};

function Team() {
  return (
    <Wrapper id="team">
      <Title>Team RAW FISH</Title>
      <Contents>
        <Desc>
          팀 Raw Fish는 IT 스타트업과 대기업에서 쌓은 다양한 경험을 바탕으로, 문제 해결과 시장 확장을 위한 최적의 전략을 제시합니다.<br/>
          날것 그대로의 시장을 깊이 이해하고 기술과 데이터로 다듬어 뷰티 서비스의 새로운 트렌드를 만들어가겠습니다.
        </Desc>
        <CrewList>
          {teamMembers.map((member) => (
            <TeamMember key={member.name} {...member} />
          ))}
        </CrewList>
      </Contents>
    </Wrapper>
  )
}

export default Team;