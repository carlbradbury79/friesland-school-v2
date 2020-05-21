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
  padding: 0 2rem 2rem 2rem;
  background: #004c97;
  color: #fff;
  padding: 3rem;
  /* text-align: center; */
  @media (max-width: 860px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    text-align: center;
  }
`

export const FooterSocialIcons = styled.div`
  h3 {
    color: #fff;
    /* font-family: "Open Sans", sans-serif; */
    font-size: 1.2rem;
    font-weight: normal;
  }
  ul {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;

    @media (max-width: 480px) {
      align-items: center;
    }

    li {
      list-style: none;
      margin-right: 1rem;
      line-height: 1.8rem;

      a {
        font-size: 1.2rem;
        color: #fff;
        display: flex;
        flex-direction: row;
        align-items: center;
        span {
          font-size: 1rem;
          :hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
`

export const FooterLinkStyle = styled.div`
  h3 {
    color: #fff;
    /* font-family: "Open Sans", sans-serif; */
    font-size: 1.2rem;
    font-weight: normal;
  }

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
