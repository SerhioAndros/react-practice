import styled from "styled-components";

export const HeaderNavigation = styled.nav`
  display: flex;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 18px;
    color: rgb(44, 50, 88);
    cursor: pointer;
    li {
      &:hover {
        color: rgb(155, 145, 131);
      }
      &:not(:last-child) {
        margin-right: 20px;
      }
    }
    a {
    }
  }
`;
