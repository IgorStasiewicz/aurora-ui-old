import styled, { css } from "styled-components";
import Heading from "../heading";

export const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 350px;
  img {
    margin-right: 1rem;
    width: 80px;
  }

  ${({ theme }) => theme.mq.tablet} {
    margin-right: 0;
  }
`;

export const StyledHeading = styled(Heading)`
  color: ${({ theme }) => theme.colors.primaryBlack};
  span {
    color: ${({ theme }) => theme.colors.primaryYellow};
  }
  ${({ whiteIcon, theme }) =>
    whiteIcon &&
    css`
      &,
      span {
        color: ${theme.colors.primaryWhite};
      }
    `}
`;
