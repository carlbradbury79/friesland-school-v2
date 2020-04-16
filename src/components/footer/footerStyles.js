import styled from "styled-components"

export const FooterContainer = styled.footer`
  /* display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start; */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 70px;
  grid-row-gap: 36px;
  padding: 0 40px;
  background: #004c97;
  color: #fff;
  padding: 3rem;
  /* text-align: center; */
  @media (max-width: 860px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 20px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 10px;
    text-align: center;
  }
`

export const FooterSocialIcons = styled.div`
  ul {
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;

    @media (max-width: 480px) {
      justify-content: center;
    }

    li {
      list-style: none;
      margin-right: 1rem;

      a {
        font-size: 2rem;
        color: #fff;
      }
    }
  }
`

export const FooterLinkStyle = styled.div`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      line-height: 1.8rem;
      a {
        color: #fff;
        text-decoration: none;

        :hover {
          text-decoration: underline;
        }
      }
    }
  }
`
