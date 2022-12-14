import styled from "styled-components";
import Poster from "./Poster";

export default function Footer({ title, posterURL, weekday, time }) {
  return (
    <StyledFooter data-test="footer">
      <div>
        <Poster posterURL={posterURL} />
      </div>
      <div>
        <p>{title}</p>
        {(weekday || time) && (
          <p>
            {weekday} - {time}
          </p>
        )}
      </div>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  width: 100%;
  height: 117px;
  background-color: var(--footer-background);
  border-top: 1px solid var(--footer-border);
  position: fixed;
  bottom: 0px;
  left: 0px;
  padding: 14px 10px;
  display: flex;
  align-items: center;
  box-shadow: 0px -3px 10px 0px var(--shadow);
  z-index: 1;

  div:first-child {
    width: 64px;
    height: 89px;
    margin-right: 14px;
  }

  p {
    font-size: 26px;
    line-height: 31px;
  }
`;
